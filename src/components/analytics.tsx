"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCATIONS } from "@/data/business";
import type { TrackPayload } from "@/lib/analytics-events";

// OpenAI Pixel queue (installed in the root layout, production only). Undefined
// in dev — the optional call below is a no-op there.
declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

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
