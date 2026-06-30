"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCATIONS } from "@/data/business";
import type { TrackPayload } from "@/lib/analytics-events";

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

      send({
        type,
        location: location as TrackPayload["location"],
        source,
        path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
