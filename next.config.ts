import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework.
  poweredByHeader: false,
  // Inline the page's CSS into the HTML <head> so the stylesheet isn't a
  // render-blocking request (improves FCP/LCP on slow connections).
  // Production only — in dev it interferes with the CSS chunk serving.
  experimental: {
    inlineCss: process.env.NODE_ENV === "production",
  },
  images: {
    // Our own trusted brand SVG (logo) is served via next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Add a 320 breakpoint so the ~272px grid tiles fetch a 320 variant
    // instead of jumping to 384 (PageSpeed "properly size images").
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    // Allow the lower 65 quality we use on photographic thumbnails, alongside
    // the Next default of 75 (Next 16 requires listing non-default qualities).
    qualities: [65, 75],
    // Cache optimized variants for a year. Default (4h) meant PageSpeed /
    // Googlebot kept hitting an expired cache and paying the on-demand
    // optimizer's cold-generation cost on our small instance (showed up as a
    // ~2.8s LCP "resource load duration"). Our image assets are versioned by
    // filename (e.g. hero-bg-v2), so a long TTL is safe.
    minimumCacheTTL: 31536000,
  },
  // Baseline security headers on every response. These are all safe for a
  // static marketing site (no full CSP here on purpose: a strict CSP would need
  // a per-request nonce for Next's hydration scripts and could break the Google
  // Maps embed — left as a future, carefully-tested step).
  async headers() {
    // Production only. In particular, sending HSTS from localhost poisons the
    // browser into forcing https://localhost (which the HTTP dev server can't
    // serve), breaking local development.
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        headers: [
          // Force HTTPS for 2 years incl. subdomains; eligible for preload list.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Clickjacking: don't allow our pages to be framed by other origins.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stop MIME-type sniffing.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send only the origin (not full path) on cross-origin requests.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable powerful APIs we never use.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old flat service slugs → new taxonomy (safety net for any stray links).
      { source: "/sell-gold", destination: "/precious-metals/sell-gold", permanent: true },
      { source: "/sell-silver", destination: "/precious-metals/sell-silver", permanent: true },
      { source: "/sell-diamonds", destination: "/precious-stones/sell-diamonds", permanent: true },
      { source: "/sell-jewelry", destination: "/jewelry", permanent: true },
      { source: "/sell-coins", destination: "/coins", permanent: true },

      // Legacy cashforgoldva.com (WordPress) URLs → closest current page.
      // Auto-generated from the old site's Wayback Machine URL list; every
      // source 404s today and every destination is a live page. Electronics
      // pages and dead theme/junk pages are intentionally left to 404.
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/coins/sell-your-gold-and-silver-coins-falls-church-va", destination: "/coins", permanent: true },
      { source: "/coins/sell-antique-coins/sell-us-antique-coins", destination: "/coins/sell-antique-coins", permanent: true },
      { source: "/coins/sell-collectible-coins/sell-collectible-coins", destination: "/coins/sell-collectible-coins", permanent: true },
      { source: "/coins/sell-gold-coins/sell-yor-us-gold-coins", destination: "/coins/sell-gold-coins", permanent: true },
      { source: "/coins/sell-silver-coins/sell-us-silver-bullion-coins", destination: "/coins/sell-silver-coins", permanent: true },
      { source: "/contact-us", destination: "/contact-us-cash-for-gold-locations", permanent: true },
      { source: "/contact-us-cash-for-gold-locations/bbb", destination: "/contact-us-cash-for-gold-locations", permanent: true },
      { source: "/contact-us-cash-for-gold-locations/cash-for-gold-arlington-va", destination: "/contact-us-cash-for-gold-locations", permanent: true },
      { source: "/contact-us-cash-for-gold-locations/feed", destination: "/contact-us-cash-for-gold-locations", permanent: true },
      { source: "/contact-us-cash-for-gold-locations/www-cashforgoldva-com", destination: "/contact-us-cash-for-gold-locations", permanent: true },
      { source: "/jewelry/sell-jewelry-alexandria-va", destination: "/jewelry", permanent: true },
      { source: "/selljewelry", destination: "/jewelry", permanent: true },
      { source: "/jewelry/sell-your-antique-jewelry/sell-antique-jewelry-fairfax-va", destination: "/jewelry/sell-your-antique-jewelry", permanent: true },
      { source: "/jewelry/sell-your-estate-jewelry/sell-estate-jewelry-arlington-va", destination: "/jewelry/sell-your-estate-jewelry", permanent: true },
      { source: "/jewelry/sell-your-scrap-gold-jewelry/sell-scrap-gold-coins-northern-va", destination: "/jewelry/sell-your-scrap-gold-jewelry", permanent: true },
      { source: "/cash-for-gold-near-me-2", destination: "/locations", permanent: true },
      { source: "/category/alexandria-va", destination: "/locations", permanent: true },
      { source: "/category/arlington-va", destination: "/locations", permanent: true },
      { source: "/category/bristol-va", destination: "/locations", permanent: true },
      { source: "/category/bristow-va", destination: "/locations", permanent: true },
      { source: "/category/bristow-va/feed", destination: "/locations", permanent: true },
      { source: "/category/burke-va", destination: "/locations", permanent: true },
      { source: "/category/burke-va/feed", destination: "/locations", permanent: true },
      { source: "/category/centrevilleva", destination: "/locations", permanent: true },
      { source: "/category/centrevilleva/feed", destination: "/locations", permanent: true },
      { source: "/category/clifton-va", destination: "/locations", permanent: true },
      { source: "/category/clifton-va/feed", destination: "/locations", permanent: true },
      { source: "/category/fairfax-va", destination: "/locations", permanent: true },
      { source: "/category/fairfaxva", destination: "/locations", permanent: true },
      { source: "/category/fairfaxva/feed", destination: "/locations", permanent: true },
      { source: "/category/falls-church-va", destination: "/locations", permanent: true },
      { source: "/category/gainesville-va", destination: "/locations", permanent: true },
      { source: "/category/gainesville-va/feed", destination: "/locations", permanent: true },
      { source: "/category/haymarket-va", destination: "/locations", permanent: true },
      { source: "/category/haymarket-va/feed", destination: "/locations", permanent: true },
      { source: "/category/nokesville-va", destination: "/locations", permanent: true },
      { source: "/category/nokesville-va/feed", destination: "/locations", permanent: true },
      { source: "/category/northern-va", destination: "/cash-for-gold-northern-virginia", permanent: true },
      { source: "/category/sterling-va", destination: "/locations", permanent: true },
      { source: "/category/uncategorized/page/2", destination: "/locations", permanent: true },
      { source: "/category/uncategorized/page/3", destination: "/locations", permanent: true },
      { source: "/category/washingtondc", destination: "/locations", permanent: true },
      { source: "/category/woodbridge-va", destination: "/locations", permanent: true },
      { source: "/category/woodbridgeva", destination: "/locations", permanent: true },
      { source: "/category/woodbridgeva/feed", destination: "/locations", permanent: true },
      { source: "/category/annandale-va", destination: "/locations/annandale", permanent: true },
      { source: "/locations/cash-gold-annandale", destination: "/locations/annandale", permanent: true },
      { source: "/cash-gold-chantilly-va-ads", destination: "/locations/chantilly", permanent: true },
      { source: "/category/chantilly-va", destination: "/locations/chantilly", permanent: true },
      { source: "/category/chantilly-va/feed", destination: "/locations/chantilly", permanent: true },
      { source: "/locations/cash-gold-chantilly", destination: "/locations/chantilly", permanent: true },
      { source: "/category/manassas-park-va", destination: "/locations/manassas", permanent: true },
      { source: "/category/manassas-park-va/feed", destination: "/locations/manassas", permanent: true },
      { source: "/category/manassas-va", destination: "/locations/manassas", permanent: true },
      { source: "/category/manassasva", destination: "/locations/manassas", permanent: true },
      { source: "/category/manassasva/feed", destination: "/locations/manassas", permanent: true },
      { source: "/locations/cash-gold-manassas", destination: "/locations/manassas", permanent: true },
      { source: "/cash-for-gold-mclean-va", destination: "/locations/vienna", permanent: true },
      { source: "/cash-for-gold-mclean-va/gia", destination: "/locations/vienna", permanent: true },
      { source: "/cash-for-gold-mclean-va/jvc", destination: "/locations/vienna", permanent: true },
      { source: "/cash-for-gold-mclean-va/pcgs", destination: "/locations/vienna", permanent: true },
      { source: "/category/tysons-corner-va", destination: "/locations/vienna", permanent: true },
      { source: "/category/vienna-va", destination: "/locations/vienna", permanent: true },
      { source: "/locations/cash-for-gold-diamond-and-luxury-watches-mclean-va", destination: "/locations/vienna", permanent: true },
      { source: "/locations/cash-for-gold-mclean", destination: "/locations/vienna", permanent: true },
      { source: "/locations/cash-for-gold-mclean/cash-for-gold-tysons-corner-va", destination: "/locations/vienna", permanent: true },
      { source: "/tysons-corner-cash-for-gold-location", destination: "/locations/vienna", permanent: true },
      { source: "/precious-metals/precious-metal-gold-silver-platinum-virginia", destination: "/precious-metals", permanent: true },
      { source: "/precious-metals/sell-gold/3rd-design", destination: "/precious-metals/sell-gold", permanent: true },
      { source: "/precious-metals/sell-gold/sell-gold-fairfax-va", destination: "/precious-metals/sell-gold", permanent: true },
      { source: "/precious-metals/sell-platinum/sell-platinum-ring-and-bullion-falls-church-va", destination: "/precious-metals/sell-platinum", permanent: true },
      { source: "/precious-metals/sell-silver/gold-and-silver-pile-scrap-and-cash-dollar-2", destination: "/precious-metals/sell-silver", permanent: true },
      { source: "/sell-your-silver", destination: "/precious-metals/sell-silver", permanent: true },
      { source: "/precious-metals/sell-your-palladium/sell-palladium-northern-va", destination: "/precious-metals/sell-your-palladium", permanent: true },
      { source: "/precious-stones/precious-gem-stones-sterling-va", destination: "/precious-stones", permanent: true },
      { source: "/precious-stones/sell-diamonds/sell-diamond-jewelry-chantilly-va", destination: "/precious-stones/sell-diamonds", permanent: true },
      { source: "/watches/sell-antique-watch", destination: "/watches", permanent: true },
      { source: "/watches/sell-antique-watch/sell-my-watch-in-northern-virginia", destination: "/watches", permanent: true },
      { source: "/watches/sell-pocket-watch", destination: "/watches", permanent: true },
      { source: "/watches/sell-pocket-watch/sell-gold-pocket-watch-in-falls-church-va", destination: "/watches", permanent: true },
      { source: "/watches/sell-your-design-watches-fairfax-va", destination: "/watches", permanent: true },
      { source: "/watches/sell-your-gold-watch", destination: "/watches", permanent: true },
      { source: "/watches/sell-your-gold-watch/sell-gold-watches-manassas-va", destination: "/watches", permanent: true },
      { source: "/we-buy-gold-watches", destination: "/watches", permanent: true },
      { source: "/watches/sell-rolex-watch", destination: "/watches/sell-rolex", permanent: true },
      { source: "/watches/sell-rolex-watch/sell-rolex-we-buy-gold-watches-norther-va", destination: "/watches/sell-rolex", permanent: true },

      // Legacy WordPress pages surfaced by GSC's "Not found (404)" report
      // (2026-07). The old site served content under a `/home/` prefix. Only
      // the genuine content pages are redirected here; the report's remaining
      // items (spam .mp4 hashes, /player, /wp-content, /wp-*.php, wildcards)
      // are intentionally left to 404.
      { source: "/home/sell-my-gold-and-silver-bullion-bank-chantilly-va-2", destination: "/locations/chantilly", permanent: true },
      { source: "/home/sell-my-gold-and-silver-bullion-bank-chantilly-va-2/feed", destination: "/locations/chantilly", permanent: true },
      // GSC truncates the slug at "…-gold-c"; wildcard covers the full slug
      // (…coins / …cash / etc.).
      { source: "/we-pay-90-for-gold-:slug", destination: "/precious-metals/sell-gold", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      // Legacy WordPress homepage dupe — clearly maps to the new homepage, so
      // consolidate its equity with a 301 instead of leaving it a 404.
      { source: "/home-2", destination: "/", permanent: true },
      // Old duplicate ("-2") of the live blog post — consolidate to canonical.
      // (The other "discovered, not indexed" junk — /13974-2, /14001-2,
      // /14002-2, /create-an-article-about-gold-price-today — stays 404.)
      { source: "/understanding-the-role-of-bullion-banks-2", destination: "/understanding-the-role-of-bullion-banks", permanent: true },

      // Blog consolidation (2026-07) — near-duplicate posts merged into a
      // stronger canonical to end cannibalization ("Crawled, not indexed" in
      // GSC). The merged-away slug 301s to the post that absorbed its content.
      { source: "/how-bullion-banks-influence-gold-prices", destination: "/understanding-the-role-of-bullion-banks", permanent: true },
      { source: "/current-trends-in-gold-prices-today", destination: "/gold-price-today", permanent: true },
      { source: "/finding-the-best-cash-for-gold-offers", destination: "/maximizing-your-profit-with-cash-for-gold", permanent: true },
      { source: "/understanding-cash-for-gold-services-reviews", destination: "/finding-the-best-cash-for-gold-options", permanent: true },
      { source: "/maximizing-your-cash-for-gold-experience", destination: "/understanding-the-cash-for-gold-process", permanent: true },

      // City landing pages (2026-07): the old Alexandria blog post was upgraded
      // into a full local landing page at /cash-for-gold-alexandria; its content
      // was absorbed there, so the blog URL 301s to the landing page.
      { source: "/sell-gold-alexandria-va", destination: "/cash-for-gold-alexandria", permanent: true },
      // Centreville's gold-intent blog post was consolidated into the full local
      // landing page at /cash-for-gold-centreville (same intent → avoid
      // cannibalization); its local content was absorbed there, so it 301s.
      { source: "/top-places-to-sell-gold-in-centreville", destination: "/cash-for-gold-centreville", permanent: true },
      // Falls Church city blog (same intent as the new landing) consolidated into
      // /cash-for-gold-falls-church; the regional NoVA guide stays separate.
      { source: "/cash-for-gold-falls-church-va", destination: "/cash-for-gold-falls-church", permanent: true },
      // Regional NoVA hub page. Canonical slug is the full keyword; the "nova"
      // slang slug redirects into it so both typed URLs land on the same page.
      { source: "/cash-for-gold-nova", destination: "/cash-for-gold-northern-virginia", permanent: true },
    ];
  },
};

export default nextConfig;
