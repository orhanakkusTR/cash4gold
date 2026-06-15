# Cash for Gold VA — Project Context (AGENTS.md)

> Canonical context file. `CLAUDE.md` is a symlink to this file. Keep it lean — a map, not an encyclopedia. Detail lives in code, `.claude/agents/`, and `docs/`.

## What we're building

A from-scratch rebuild of **cashforgoldva.com** — a local precious-metals buying business serving Northern Virginia. We build locally with Claude Code, push to GitHub, deploy to Vercel. After launch we own **ongoing SEO** (local SEO is the primary growth channel).

**Business:** Buys gold, silver, platinum/palladium, diamonds, designer jewelry, luxury watches, coins, and electronics. Pays instant cash. 4 physical locations.

**Locations (NAP — keep identical everywhere for local SEO):**

| Location | Phone | Address |
|---|---|---|
| Annandale | (571) 290-8020 | 7262 Columbia Pike, Annandale, VA |
| Manassas | (571) 359-0146 | 9013 Centreville Rd, Manassas, VA |
| Chantilly | (571) 224-5279 | 14025 Lee Jackson Memorial Hwy, Chantilly, VA |
| Vienna/McLean | (703) 889-0532 | 8453 Tyco Rd, Vienna, VA |

**Social proof:** Google 4.9★ / 342 reviews. Value props: Best Value, Accept Many Items, Instant Payment, Professional yet Simple.

## Tech stack

- **Next.js (App Router) + TypeScript** — static-first, SEO-friendly SSG
- **Tailwind CSS v4** (`@theme` tokens in `globals.css`) — **white + gold** theme (no cream), dark `ink` sections for contrast
- **Aceternity UI + Magic UI** distinctive components (vendored into `src/components/ui/`): Spotlight, Particles, SparklesText, BentoGrid, MagicCard, Marquee, TracingBeam, BorderBeam, ShimmerButton, NumberTicker, DotPattern, Meteors. Added via `npx shadcn@latest add <registry-url>`. Pass gold colors via props; they trip React-Compiler lint rules so `src/components/ui/**` has relaxed eslint (see `eslint.config.mjs`).
- **motion** (framer-motion) for scroll animations; **next-themes** (required by MagicCard; no provider — defaults to light)
- **Vercel** hosting + analytics
- Structured data: `LocalBusiness` / `JewelryStore` JSON-LD per location
- Forms: react-hook-form + zod → Resend email (`/api/quote`, honeypot-protected)

## Repo conventions

- Static-generate everything possible; no client JS where a server component works.
- One source of truth for business data: `src/data/business.ts` (NAP, services, hours). Never hardcode phone/address in components — import from data.
- Components in `src/components/`, route pages under `src/app/`.
- Tailwind tokens centralized; no magic hex values in JSX.
- Accessibility is a launch gate: semantic HTML, WCAG 2.2 AA.
- Never commit secrets. Branch before committing; commit/push only when asked.

## SEO strategy (our ongoing mandate)

- **Local SEO first**: per-location landing pages, consistent NAP, LocalBusiness schema, Google Business Profile alignment.
- **Service × location matrix**: `/sell-gold-annandale`, `/sell-watches-chantilly`, etc. — programmatic but unique content (avoid cannibalization).
- Core Web Vitals as a ranking + UX gate (Vercel/Lighthouse).
- Metadata, OG, sitemap.xml, robots.txt, canonical tags from day one.

## Agent playbook — which agent for which job

Agents live in `.claude/agents/` (version-controlled). Invoke via the Agent tool. Use them proactively:

**Build / UI**
- `frontend-developer` — Next.js routes, React components, data fetching, perf
- `ui-designer` — visual design, layout systems, mockups
- `design-system-architect` — tokens, theming, component library
- `accessibility-expert` — WCAG audits, a11y remediation

**SEO — technical**
- `seo-structure-architect` — header hierarchy, schema markup, internal linking
- `seo-keyword-strategist` — keyword density, LSI/semantic variations
- `seo-meta-optimizer` — titles, descriptions, URL slugs
- `seo-snippet-hunter` — featured-snippet / SERP-feature formatting

**SEO — content**
- `seo-content-planner` — topic clusters, content calendar, gap analysis
- `seo-content-writer` — page/blog copy from briefs
- `seo-content-auditor` — quality + E-E-A-T scoring of drafts
- `seo-authority-builder` — E-E-A-T / trust signals (important: YMYL-adjacent, money topic)
- `seo-cannibalization-detector` — overlap between location/service pages
- `seo-content-refresher` — keep published pages fresh

**Content / research**
- `content-marketer` — campaigns, distribution
- `search-specialist` — competitor research, fact-checking

**Quality / ship**
- `architect-review` — architecture integrity on structural changes
- `code-reviewer` — review before commit
- `deployment-engineer` — Vercel deploy, CI/CD

Session-level Vercel skills (`vercel:*`) and UI/SEO plugin skills are also available — prefer those for platform tasks.

## Deployment flow

1. Build + verify locally (`npm run dev`, Lighthouse, a11y).
2. `git` → GitHub.
3. Vercel deploy (preview → production). Use `vercel:deploy` skill / `deployment-engineer`.

## Quick reference

- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint`
- Business data: `src/data/business.ts`
- Agents: `.claude/agents/` · Skills: `.claude/skills/`
