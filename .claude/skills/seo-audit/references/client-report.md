# Client corporate PDF report — design & build spec

The formal deliverable the owner shares with the client. Polished, branded,
**business language only**. Lands at:

```
Raporlar/Cash-For-Gold-Audit-Raporu-YYYY-MM-DD.pdf
```

## Non-negotiables

- **Client-facing rule (strict).** No internal tools, hosting/platform, GitHub,
  AI/Claude/CLI, deploy mechanics, agent names, or `file:line` refs. Everything is
  "what it means for the business" + "what we recommend / will do." Translate,
  don't expose.
- **Honesty.** No inflated impact, no invented metrics. If something is a risk
  from inspection (not a measured number), say "based on a technical review."
- **Language.** Match the client's language. Default English (US business), since
  this is a US company presenting to a US audience — unless the owner says
  otherwise. Keep it warm, confident, plain — not jargon soup.

## Branding

- **Logo:** `Raporlar/Logo/Logo-v1.webp` — "CASH FOR GOLD" wordmark, gold with
  black outline. Embed it (base64) so the PDF is self-contained. Place on the
  cover and as a small header mark on inner pages.
- **Palette:** gold `#D9A521`/`#E8B93E` (from the logo), near-black `#141414` ink,
  white `#FFFFFF` ground, warm gray `#6B6B6B` for secondary text, subtle gold
  hairlines. Matches the live site (white + gold, dark ink accents).
- **Type:** clean sans (system stack: -apple-system, Segoe UI, Inter-like).
  Generous margins, real hierarchy, plenty of white space. Reads like a
  consultancy deliverable, not a data dump.
- **Severity → client-friendly labels** (drop "P0/P1/P2" jargon on the client
  copy): 
  - P0 → **"Critical — address now"** (red/gold accent)
  - P1 → **"High impact — recommended"** (amber)
  - P2 → **"Enhancement"** (neutral/green)

## Structure (pages)

1. **Cover** — logo, title "Website & SEO Audit Report", client/business name,
   date, prepared-for/prepared-by line (business names only), a single confident
   subtitle. Full-bleed gold hairline or tasteful gold band.
2. **Executive summary** — 4–6 sentences a busy owner reads in 30 seconds:
   overall health, the biggest wins available, the headline recommendation. Then
   the **overall score** as a large number + a one-line interpretation.
3. **Scorecard** — the 10–11 dimensions as a clean table or bar row, each with a
   score and a plain-language one-liner. Rename dimensions to client terms
   ("Search Engine Foundations", "Local Search & Store Listings", "Trust &
   Credibility", "Website Speed", "Accessibility", "Tracking & Measurement", …).
4. **Priorities** — the findings, grouped Critical → High impact → Enhancement.
   Each item: a **plain-language title**, one line on *why it matters to the
   business*, and *what we recommend*. No code. 3–8 items per group max — curate,
   don't dump everything.
5. **What's already working** — a short, genuine list of strengths. Builds trust
   and balance; a report that's all-negative reads as fear-selling.
6. **Recommended roadmap** — the fix plan as phases ("Phase 1: quick wins",
   "Phase 2: …") with rough sequencing. This is the "so what do we do" close.
7. **Footer / contact** — business contact block (from `business.ts` NAP if a
   Cash for Gold-branded report; otherwise the agency's block). Page numbers.

Keep it tight — a strong audit PDF is ~6–12 pages, not 40. Curate to the findings
that matter; the exhaustive list lives in the internal MD report.

## Build pipeline (recommended)

1. Author a single self-contained **HTML** file in the scratchpad with:
   - the logo embedded as a base64 `data:` URI,
   - print CSS: `@page { size: A4; margin: 18mm; }`, page-break control
     (`break-before: page` between sections), header/footer via `@page` or fixed
     running elements,
   - the palette/type above; charts/bars as inline SVG or styled divs (no external
     assets — must render offline).
2. Convert HTML → PDF into `Raporlar/`. Use the **`pdf` skill** for the
   conversion, or a headless renderer available on the machine. Verify the PDF
   actually rendered (non-zero size, opens) before reporting done.
3. Name it `Cash-For-Gold-Audit-Raporu-YYYY-MM-DD.pdf`. If a same-day file
   exists, append `-v2` etc. rather than overwriting silently.

## Quality bar before you hand it over

- Would this look at home coming from a professional agency? If not, redesign.
- Zero internal/technical leakage (re-scan the text for tool/host/AI names).
- Every claim is honest and defensible.
- Logo crisp, colors consistent, no broken layout across page breaks.
