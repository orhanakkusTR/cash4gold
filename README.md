# Cash for Gold VA

Marketing + local-SEO website for **Cash for Gold VA** — a Northern Virginia precious-metals buyer (gold, silver, diamonds, jewelry, watches, coins, electronics) with 4 locations.

Rebuild of [cashforgoldva.com](https://cashforgoldva.com) — modern, animated, SEO-first. Built with Claude Code, deployed on Vercel.

## Stack

- **Next.js 16** (App Router) + **TypeScript** — static-first SSG
- **Tailwind CSS v4** design tokens (charcoal + gold premium theme)
- **Motion** (framer-motion) — scroll reveals, parallax, count-up
- **react-hook-form + zod** — lead/quote form
- **Resend** — quote-request email delivery
- Structured data: `JewelryStore` / `LocalBusiness`, `BreadcrumbList`, `FAQPage`

## Local development

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY for live email
npm run dev                  # http://localhost:3000
npm run build                # production build (53 prerendered pages)
npm run lint
```

## Architecture

- **`src/data/business.ts`** — single source of truth (NAP, services, locations, copy). Never hardcode phone/address in components.
- **`src/app/`** — routes. Notable dynamic routes:
  - `/[service]` — 7 service pages (sell-gold, sell-watches, …)
  - `/[service]/[city]` — 28 service × location local-SEO landing pages
  - `/locations/[city]` — 4 location pages with maps + LocalBusiness schema
- **`src/components/`** — UI. `reveal.tsx` / `scroll.tsx` hold the scroll animations.
- **`src/app/api/quote/route.ts`** — form handler → Resend email (honeypot-protected).

## SEO

- Per-page metadata + canonicals, `sitemap.xml`, `robots.txt`
- LocalBusiness JSON-LD per location, FAQ + breadcrumb schema
- Service × location matrix for local search coverage
- See `AGENTS.md` for the ongoing SEO mandate + agent playbook.

## Agents & skills

Curated Claude Code agents (`.claude/agents/`) and skills (`.claude/skills/`) sourced from
[wshobson/agents](https://github.com/wshobson/agents). See **`AGENTS.md`** (≡ `CLAUDE.md`) for which agent to use for which task.

## Deploy

Push to GitHub → import on Vercel. Set env vars (`RESEND_API_KEY`, `LEAD_INBOX`, `LEAD_FROM`) in the Vercel dashboard.
