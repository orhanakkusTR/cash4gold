import type { MetadataRoute } from "next";
import { SITE, CATEGORIES, ALL_SUBCATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";
import { POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const now = new Date("2026-06-12");

  const staticPages = [
    "", "/what-we-buy", ...(SHOW_CALCULATOR ? ["/gold-calculator"] : []), "/locations", "/how-it-works", "/about",
    "/contact-us-cash-for-gold-locations", "/blog",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const subcategoryPages = ALL_SUBCATEGORIES.map(({ category, sub }) => ({
    url: `${base}/${category.slug}/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = POSTS.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...locationPages, ...blogPages];
}
