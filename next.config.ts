import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our own trusted brand SVG (logo) is served via next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
