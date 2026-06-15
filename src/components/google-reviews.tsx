import Script from "next/script";
import { SITE } from "@/data/business";

/**
 * Live Google reviews via the Elfsight widget.
 * The platform script is loaded lazily (after the page is interactive) to keep
 * Core Web Vitals impact minimal. The widget itself is lazy-rendered by Elfsight
 * via `data-elfsight-app-lazy`.
 */
export function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div className={SITE.elfsightReviewsAppId} data-elfsight-app-lazy />
    </>
  );
}
