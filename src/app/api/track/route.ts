import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { query, hasDb } from "@/lib/db";
import {
  EVENT_TYPES,
  EVENT_SOURCES,
  LOCATION_SLUGS,
  type EventType,
  type EventSource,
  type LocationSlug,
} from "@/lib/analytics-events";

// pg needs the Node.js runtime (not edge).
export const runtime = "nodejs";
// Never cache; every hit is a fresh write.
export const dynamic = "force-dynamic";

function clean<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : null;
}

const noContent = () => new NextResponse(null, { status: 204 });

// --- Bot / non-browser filter --------------------------------------------
// JS-rendering crawlers and scripted clients (curl, headless, libraries) can
// otherwise inflate the numbers. Anything matching here is dropped.
const BOT_UA =
  /bot|crawl|spider|slurp|mediapartners|bingpreview|headless|puppeteer|playwright|phantom|selenium|scrapy|lighthouse|pagespeed|gtmetrix|python-requests|python-urllib|curl\/|\bwget\b|libwww|httpclient|okhttp|axios|node-fetch|go-http|java\/|facebookexternalhit|whatsapp|telegrambot|preview/i;

const isBot = (ua: string) => !ua || BOT_UA.test(ua);

// Coarse UA class stored with each event so contamination can be cleaned later.
function uaClass(ua: string): "bot" | "mobile" | "desktop" {
  if (isBot(ua)) return "bot";
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua) ? "mobile" : "desktop";
}

// --- Same-origin check ----------------------------------------------------
// Only accept beacons whose Origin/Referer is one of our own hosts (apex, www,
// or the app-platform origin). Blocks anyone POSTing fake conversions from
// elsewhere.
const ALLOWED_HOST = /(^|\.)cashforgoldva\.com$|\.ondigitalocean\.app$/i;
function sameOrigin(req: NextRequest): boolean {
  const src = req.headers.get("origin") || req.headers.get("referer") || "";
  if (!src) return false;
  try {
    return ALLOWED_HOST.test(new URL(src).hostname);
  } catch {
    return false;
  }
}

// --- Coarse per-IP rate limit (in-memory) ---------------------------------
// Single app instance at this scale, so an in-memory window is enough. Not a
// security control — just a cap on how much one client can flood.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 40;
const hits = new Map<string, { n: number; t: number }>();
function rateLimited(key: string): boolean {
  const now = Date.now();
  const e = hits.get(key);
  if (!e || now - e.t > WINDOW_MS) {
    hits.set(key, { n: 1, t: now });
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (now - v.t > WINDOW_MS) hits.delete(k);
    }
    return false;
  }
  e.n += 1;
  return e.n > MAX_PER_WINDOW;
}

// --- Salted, non-reversible IP hash ---------------------------------------
// We never store the raw IP. The salt is secret (a dedicated TRACK_IP_SALT, or
// the DB URL as a stable fallback), so the hash can't be reversed but stays
// consistent enough to group/clean a contaminating source retroactively.
const IP_SALT = process.env.TRACK_IP_SALT || process.env.DATABASE_URL || "c4g-track-salt";
function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  return (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") || "").trim();
}
function hashIp(ip: string): string | null {
  if (!ip) return null;
  return createHmac("sha256", IP_SALT).update(ip).digest("hex").slice(0, 32);
}

export async function POST(req: NextRequest) {
  // Fire-and-forget for real visitors: success and no-op both return 204 so a
  // tracking failure never surfaces or gets retried. Guard rejections use a
  // distinct status (observable, but legit same-origin browsers never hit them).
  try {
    if (!hasDb) return noContent();

    const ua = req.headers.get("user-agent") || "";
    if (isBot(ua)) return new NextResponse(null, { status: 403 }); // crawler / script
    if (!sameOrigin(req)) return new NextResponse(null, { status: 403 }); // foreign origin

    const ip = clientIp(req);
    const ipHash = hashIp(ip);
    if (rateLimited(ipHash || ip || "anon")) {
      return new NextResponse(null, { status: 429 }); // flooding
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") return noContent();

    const type = clean<EventType>(body.type, EVENT_TYPES);
    if (!type) return noContent();

    const location = clean<LocationSlug>(body.location, LOCATION_SLUGS);
    const source = clean<EventSource>(body.source, EVENT_SOURCES);
    const path = typeof body.path === "string" ? body.path.slice(0, 512) : null;

    await query(
      `INSERT INTO events (type, location, source, path, ip_hash, ua_class)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [type, location, source, path, ipHash, uaClass(ua)],
    );
  } catch {
    // Swallow — analytics must never break navigation.
  }
  return noContent();
}
