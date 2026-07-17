import { SITE, LOCATIONS, CATEGORIES } from "@/data/business";
import { POSTS_BY_DATE } from "@/data/blog";
import { CITY_LANDINGS } from "@/data/city-landings";

// /llms.txt — a curated, machine-readable summary of the site for AI assistants
// (llmstxt.org convention). Generated from the single source of truth in
// business.ts so the NAP and services never drift. Statically generated.
export const dynamic = "force-static";

function llmsTxt(): string {
  const base = SITE.domain;
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.tagline}`);
  lines.push("");
  lines.push(
    `${SITE.name} buys gold, silver, platinum, palladium, diamonds, fine and designer jewelry, ` +
      `luxury watches, and coins for instant payout across four Northern Virginia locations. ` +
      `Every item is appraised for free, in person, and priced against live market rates with no ` +
      `obligation to sell. Google rated ${SITE.rating.value} stars from ${SITE.rating.count}+ reviews.`,
  );
  lines.push("");

  lines.push("## Locations");
  for (const l of LOCATIONS) {
    lines.push(
      `- [${l.city}, VA](${base}/locations/${l.slug}): ${l.street}, ${l.city}, ${l.region} ${l.postalCode} — ${l.phone}`,
    );
  }
  lines.push("");

  if (CITY_LANDINGS.length > 0) {
    lines.push("## Areas we serve across Northern Virginia");
    for (const c of CITY_LANDINGS) {
      lines.push(`- [Cash for Gold in ${c.city}, ${c.region}](${base}/${c.slug}): ${c.metaDescription}`);
    }
    lines.push("");
  }

  lines.push("## What we buy");
  for (const c of CATEGORIES) {
    lines.push(`- [${c.name}](${base}/${c.slug}): ${c.short}`);
  }
  lines.push("");

  lines.push("## Key pages");
  lines.push(`- [What We Buy](${base}/what-we-buy): full list of items we purchase`);
  lines.push(`- [Our Locations](${base}/locations): all four Northern Virginia stores and hours`);
  lines.push(`- [About](${base}/about): who we are and how we appraise`);
  lines.push(`- [Contact](${base}/contact-us-cash-for-gold-locations): visit, call, or get a free appraisal`);
  lines.push(`- [Blog](${base}/blog): guides on selling gold, silver, diamonds, and coins`);
  lines.push("");

  lines.push("## Guides & articles");
  for (const p of POSTS_BY_DATE) {
    lines.push(`- [${p.title}](${base}/${p.slug}): ${p.excerpt}`);
  }
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(llmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
