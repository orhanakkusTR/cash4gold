# Audit dimensions — detailed checklists

Load this when you need the specifics of what each lane must cover. Each agent
should treat its list as a *floor*, not a ceiling — report anything material it
finds, but at minimum resolve every item here for this site.

---

## 1. Technical SEO foundations — `seo-structure-architect`

- **Sitemap** (`src/app/sitemap.ts`): does every indexable route appear? Any
  route generated but missing from sitemap (or vice-versa)? Are `priority` /
  `changeFrequency` sane? Is `lastmod` stable (not build-time churn)?
- **Robots** (`src/app/robots.ts`): correct allow/disallow; `/api/` and
  `/admin-adam` blocked; no unsupported directives; sitemap URL absolute & apex.
- **Canonicals**: is `alternates.canonical` set on EVERY template, not just root?
  Do programmatic pages self-canonicalize to the right absolute URL? Any
  parameter/duplicate-path canonical leaks?
- **Indexability**: any accidental `noindex`? Orphan pages (in sitemap, no
  internal links)? `find-cash-for-gold-store` indexable per recent GSC fix.
- **Redirects**: legacy 301s present and correct (GSC 404 report items).
- **Heading hierarchy**: exactly one `<h1>` per page; no skipped levels.
- **Internal linking**: do deep `[category]/[sub]/[item]` pages receive links
  (breadcrumbs, related, hub pages)? Click-depth from home ≤ 3–4?
- **JSON-LD validity per template** (`src/components/json-ld.tsx` + usages):
  Organization on root; LocalBusiness/JewelryStore per location with full NAP +
  geo + hours + sameAs; Product/Offer on coin items; BreadcrumbList on nested
  pages; FAQPage where FAQs render. Validate required fields, no orphan/invalid
  types, no mismatch between visible content and schema.

## 2. Metadata at scale — `seo-meta-optimizer`

- Title length ≤ ~60 chars, description ~150–160; each page type checked.
- **Uniqueness at scale**: resolve the templated `generateMetadata` strings for
  the coin matrix + locations + city landings and prove titles/descriptions are
  actually unique per URL, not "Sell {X} | Brand" collisions.
- Slug quality: readable, keyword-relevant, no dupes, matches canonical.
- OG + Twitter: image, title, description present per template; OG image resolves.
- Brand suffix consistency; no truncation of the differentiating keyword.

## 3. Keyword & semantic coverage — `seo-keyword-strategist`

- Primary intent per page type (transactional for service/location, informational
  for blog). Mismatch = flag.
- LSI / entity coverage: does a "sell gold in Annandale" page cover the entities
  Google expects (karat, spot price, walk-in, instant cash, appraisal)?
- Over-optimization: keyword stuffing / exact-match repetition on money pages.
- Location + service keyword pairing without doorway-page thinness.

## 4. Cannibalization — `seo-cannibalization-detector`

- Compare intent across: city landings vs location pages vs service pages vs the
  coin matrix. Which URLs target the same query?
- Flag pairs where Google would struggle to pick a canonical.
- Per conflict, one action: **consolidate**, **differentiate** (with the specific
  angle each page should own), or **canonicalize**.
- Watch the coin matrix especially: `[sub]` vs `[item]` targeting the same coin.

## 5. Local SEO / NAP — `seo-structure-architect` (focused)

- **NAP identical everywhere**, sourced from `business.ts`. Diff each location's
  phone/address/hours against the canonical table. Any hardcoded drift = P0/P1.
- LocalBusiness/JewelryStore schema per location: `name`, `address`
  (PostalAddress), `telephone`, `geo` (lat/lng), `openingHoursSpecification`,
  `priceRange`, `areaServed`, `sameAs` (GBP/social), `aggregateRating` if honest.
- City landing pages: correct `areaServed` and geo targeting; not duplicating a
  real location's identity.
- Consistency signals that align with Google Business Profile (name, categories).

## 6. E-E-A-T / trust (YMYL) — `seo-authority-builder`

Money topic → weight heavily.

- **Experience/Expertise**: who appraises? credentials, years, licensing,
  bonding, association memberships surfaced on-page?
- **Trust**: guarantees, transparent pricing/spot-price basis, ID/legal
  compliance for buying, physical-store proof, real photos.
- **Reputation**: reviews present, verifiable, schema-marked (honestly).
- Citations/outbound to authoritative sources where claims are made.
- Author/reviewer bylines on blog content.

## 7. Content quality & depth — `seo-content-auditor`

- Thin/templated content on programmatic pages — is there enough *unique* value
  per URL, or is it doorway-thin?
- Structure: scannable, headed, follows the paragraph-splitting rule (no walls of
  text; `CategoryDescription` auto-splits — verify it's used).
- Intent satisfaction vs current top-ranking results (search live when possible).
- Duplicate/boilerplate blocks repeated across too many URLs.

## 8. Accessibility — `accessibility-expert`

- WCAG 2.2 AA. Semantic landmarks, one h1, logical heading order.
- Color contrast on the **white + gold** theme (gold-on-white is a known risk)
  and dark `ink` sections.
- Keyboard operability: all interactive elements focusable, visible focus ring,
  logical tab order, no traps.
- Images: meaningful `alt`; decorative images empty alt.
- Forms (`/api/quote`, contact): labels, error messaging, required-field a11y.
- Motion: respect `prefers-reduced-motion` (site uses framer-motion/marquee).

## 9. Core Web Vitals / performance — `frontend-developer`

- LCP: hero image `priority`, correct sizing, no render-blocking; video bg cost.
- CLS: reserved space for images/fonts/embeds; no layout shift from late content.
- INP: excessive client JS / hydration on matrix pages; unnecessary `"use client"`.
- Image strategy: `next/image` everywhere, modern formats (webp), lazy below fold.
- Bundle: heavy UI components (particles, meteors, spotlight) gated/where needed.
- Static-first honored (SSG), no accidental dynamic rendering.

## 10. Analytics / tracking — `analytics-tracking-specialist`

- Conversion integrity: phone-call conversions, pixel events (OpenAI Pixel, Ads)
  fire once, correctly, on the right actions.
- `/api/track` endpoint: what it records, dedupe, bot filtering.
- Consent posture appropriate for US (state laws) — no over-collection.
- No PII in URLs/query strings; tracking respects privacy rules.
- Gaps: key CTAs (call, get-directions, quote submit) all measured? Double-count?

## 11. Code health / architecture — `code-reviewer`

Scoped to what threatens SEO/quality — not a full code review.

- **Source-of-truth violations**: NAP/services/hours hardcoded instead of
  imported from `business.ts`.
- Dead code / duplicate components (the recent " 2" copy problem) / stale data.
- Broken internal links, wrong slugs, mismatched canonical vs route.
- Structural risks that could silently break generation of the matrix pages.
