import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  // Always return 204 — this endpoint is fire-and-forget (sendBeacon); we never
  // want a tracking failure to surface to the visitor or get retried.
  try {
    if (!hasDb) return new NextResponse(null, { status: 204 });

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new NextResponse(null, { status: 204 });
    }

    const type = clean<EventType>(body.type, EVENT_TYPES);
    if (!type) return new NextResponse(null, { status: 204 });

    const location = clean<LocationSlug>(body.location, LOCATION_SLUGS);
    const source = clean<EventSource>(body.source, EVENT_SOURCES);
    const path =
      typeof body.path === "string" ? body.path.slice(0, 512) : null;

    await query(
      `INSERT INTO events (type, location, source, path) VALUES ($1, $2, $3, $4)`,
      [type, location, source, path],
    );
  } catch {
    // Swallow — analytics must never break navigation.
  }
  return new NextResponse(null, { status: 204 });
}
