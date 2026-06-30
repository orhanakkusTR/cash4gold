import type { MetadataRoute } from "next";
import { SITE } from "@/data/business";

// Production: allow crawling of everything except API routes, and point crawlers
// at the sitemap. Canonicals/sitemap use SITE.domain (cashforgoldva.com).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin-adam"],
    },
    sitemap: `${SITE.domain}/sitemap.xml`,
    // NOTE: no `Host:` directive — it's a legacy Yandex-only field that Google
    // doesn't support and flags as an "unsupported directive" warning in Search
    // Console. Canonical host is enforced via the www→apex redirect instead.
  };
}
