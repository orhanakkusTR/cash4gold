import type { MetadataRoute } from "next";
import { SITE, CATEGORIES, ALL_SUBCATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";
import { POSTS } from "@/data/blog";
import { CITY_LANDINGS } from "@/data/city-landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  // Last significant site-wide content revision. Kept as a STABLE date on
  // purpose: stamping every page with the build time on each deploy makes
  // Google distrust (and ignore) lastmod. Bump this when pages get a real
  // content update. Blog posts use their own publish dates below.
  const lastUpdated = new Date("2026-06-30");

  const staticPages = [
    "", "/what-we-buy", ...(SHOW_CALCULATOR ? ["/gold-calculator"] : []), "/locations", "/about",
    "/contact-us-cash-for-gold-locations", "/blog", "/find-cash-for-gold-store",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const subcategoryPages = ALL_SUBCATEGORIES.map(({ category, sub }) => ({
    url: `${base}/${category.slug}/${sub.slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = POSTS.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // City landing pages (areas served, e.g. /cash-for-gold-alexandria) — high
  // local-SEO priority, just under location pages.
  const cityLandingPages = CITY_LANDINGS.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...locationPages, ...cityLandingPages, ...blogPages];
}
