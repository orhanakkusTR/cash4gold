import type { MetadataRoute } from "next";

// PRE-LAUNCH LOCKDOWN: the site is not ready to be indexed yet, so we disallow
// all crawling for every user agent. At launch, restore the allow rules and the
// sitemap reference (see git history / the previous version of this file).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
