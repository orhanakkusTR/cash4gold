"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCATIONS, SITE } from "@/data/business";
import type { TrackPayload } from "@/lib/analytics-events";

// Globals set by scripts in the root layout (production only). Both are optional
// so the calls below no-op in dev.
declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void; // OpenAI Pixel queue
    gtag?: (...args: unknown[]) => void; // Google Analytics / Ads
  }
}

// GA4 event name per internal conversion type. Mirroring these to GA4 (in
// addition to our own /api/track + the OpenAI pixel) is what lets GA4 and
// Google Ads actually see conversions. Consent Mode governs whether they're
// sent with cookies or as cookieless pings — we don't gate here.
const GA_EVENT: Partial<Record<TrackPayload["type"], string>> = {
  phone: "phone_call",
  directions: "get_directions",
  review_click: "review_click",
};

// One global, low-overhead tracker mounted in the root layout. It does two jobs:
//   1. Page views — fires whenever the pathname changes.
//   2. Click delegation — a single capture-phase listener on the document that
//      detects clicks on `tel:` links and Google-Maps links anywhere on the
//      site, figures out which store and where on the page (header/footer/body),
//      and records it. This means we never have to touch the individual
//      header/footer/location components.
//
// Everything is fire-and-forget via navigator.sendBeacon, so a `tel:` tap still
// dials instantly even as the request goes out during navigation.

// Lookup: last-10-digits of a phone → store slug.
const phoneToSlug = new Map<string, string>();
// Lookup: exact Google-Maps URL → store slug.
const mapUrlToSlug = new Map<string, string>();
for (const l of LOCATIONS) {
  const digits = l.phoneHref.replace(/\D/g, "").slice(-10);
  if (digits) phoneToSlug.set(digits, l.slug);
  if (l.mapUrl) mapUrlToSlug.set(l.mapUrl, l.slug);
}
// The Google review link is a maps.google URL too, so it must be recognised
// BEFORE the directions match — otherwise review-badge clicks inflate the
// "directions" conversion (and pollute it with null locations).
const REVIEW_URLS = new Set<string>([SITE.reviewsUrl]);

// 5-second suppression window: a visitor who taps the same call/directions link
// twice (impatience, a mis-tap) shouldn't be counted as two conversions.
const DEDUPE_MS = 5000;
const lastSent = new Map<string, number>();
function recentlySent(key: string): boolean {
  const now = Date.now();
  const prev = lastSent.get(key);
  if (prev && now - prev < DEDUPE_MS) return true;
  lastSent.set(key, now);
  return false;
}

function send(payload: TrackPayload) {
  const body = JSON.stringify(payload);
  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon("/api/track", blob)) return;
    }
  } catch {
    /* fall through to fetch */
  }
  fetch("/api/track", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
    keepalive: true,
  }).catch(() => {});
}

export function Analytics() {
  const pathname = usePathname();

  // Page views. Skip the admin area entirely — we don't track ourselves.
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin-adam")) return;
    send({ type: "pageview", path: pathname });
    // OpenAI Pixel page-view conversion — matches the "page_viewed" event
    // configured in the OpenAI Ads panel. Fires on client navigations too, so
    // SPA route changes are counted, not just hard page loads.
    window.oaiq?.("measure", "page_viewed", { type: "contents" });
  }, [pathname]);

  // Delegated click tracking for phone + directions links.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";

      let type: TrackPayload["type"] | null = null;
      let location: string | null = null;

      if (href.startsWith("tel:")) {
        type = "phone";
        const digits = href.replace(/\D/g, "").slice(-10);
        location = phoneToSlug.get(digits) ?? null;
      } else if (REVIEW_URLS.has(href)) {
        type = "review_click";
      } else if (/maps\.app\.goo\.gl|google\.[^/]+\/maps/.test(href)) {
        type = "directions";
        location = mapUrlToSlug.get(href) ?? null;
      }
      if (!type) return;

      const source = a.closest("header")
        ? "header"
        : a.closest("footer")
          ? "footer"
          : "page";

      // Suppress a repeat of the same interaction within 5s (double-tap guard).
      if (recentlySent(`${type}|${location ?? ""}`)) return;

      send({
        type,
        location: location as TrackPayload["location"],
        source,
        path: window.location.pathname,
      });

      // Mirror the conversion to GA4 (so GA4 + Google Ads can see it), with an
      // event_id for cross-destination dedupe. Consent Mode decides cookie vs
      // cookieless — we don't gate it here.
      const gaName = GA_EVENT[type];
      if (gaName) {
        const eventId =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${type}-${Date.now()}`;
        window.gtag?.("event", gaName, {
          event_category: "engagement",
          store: location ?? undefined,
          source,
          page_path: window.location.pathname,
          event_id: eventId,
        });
      }

      // OpenAI Pixel conversion: a phone-call click. Matches the custom
      // "phone" conversion event configured in the OpenAI Ads panel.
      if (type === "phone") {
        window.oaiq?.("measure", "custom", { type: "custom" }, {
          custom_event_name: "phone",
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
