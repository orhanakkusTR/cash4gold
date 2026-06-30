"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// GA4 is bootstrapped by a single inline <script> in the root layout <head>
// (consent defaults → config{send_page_view:false} → loader, in that exact
// order). Because we disable GA's automatic page_view, we send one manually on
// every client-side route change here — including the first load.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GaPageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
