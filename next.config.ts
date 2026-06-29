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
    ];
  },
};

export default nextConfig;
