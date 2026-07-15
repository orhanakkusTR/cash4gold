---
name: seo-audit
description: >-
  Full-site SEO + system audit for Cash for Gold VA. Discovers the whole site
  surface (programmatic coin matrix, locations, city landings, blog, static),
  fans out to specialist subagents across technical SEO, on-page/metadata,
  cannibalization, local SEO/NAP, E-E-A-T, content quality, accessibility, Core
  Web Vitals, analytics/tracking, and code health, then synthesizes ONE
  prioritized report (P0/P1/P2) with file:line evidence and concrete fixes.
  Produces THREE deliverables: an internal technical report in docs/audits/
  (led by a whole-site Health Snapshot x-ray), a self-contained HTML dashboard
  (docs/audits/*.html), and a polished, logo'd,
  client-facing corporate PDF in Raporlar/ (business language only, safe to share
  with the client). Tracks quarter-over-quarter progress across past runs. Use for a
  comprehensive site audit before launch, a quarterly review, or when diagnosing
  sitewide SEO/quality regressions.
---

# SEO + System Audit — Cash for Gold VA

A repeatable, evidence-first audit of the whole site. The job is NOT to dump ten
disconnected agent reports — it is to produce **one ranked, deduplicated,
actionable audit** the owner can work top-to-bottom.

## Operating principles

- **Evidence or it didn't happen.** Every finding cites `file:line` (or a URL +
  quoted text). No vibes, no "consider maybe." If you can't point at it, cut it.
- **This business, not a generic checklist.** It's a **local, YMYL (money)**
  business with a **large programmatic surface**. Weight findings by real impact
  on *this* site's rankings and conversions — not textbook SEO trivia.
- **Prioritize brutally.** P0 = actively hurting rankings/indexing/UX right now.
  P1 = clear opportunity or latent risk. P2 = polish. Drop P3 noise unless asked.
- **One source of truth.** `src/data/business.ts` owns NAP/services/hours. Any
  hardcoded phone/address/hours in a component is a defect — flag it.
- Do NOT change code during an audit. Audit = read + report. Fixes are a
  separate, explicitly-approved step.

## Preconditions (check before anything)

This skill depends on these files:
`references/dimensions.md`, `references/report-template.md`,
`references/client-report.md`, the client-PDF template
`references/client-report-template.html`, and the build script
`scripts/build-client-report.mjs`. **Before starting, verify all of them exist.**
If any is missing, **STOP** and tell the user exactly which one(s) — do NOT
improvise their contents. The dimension checklists and scorecard rubric must stay
identical across quarterly runs; reconstructing them from memory silently breaks
trend comparison. (Playwright is the PDF renderer — a `node_modules/playwright`
must be installed; if absent, run `npm install` first.)

## Site surface (what "the whole site" means here)

Confirm live each run — the matrix grows — but the shape is:

- **Programmatic coin matrix** — `src/app/[category]/[sub]/[item]/` fed by ~20+
  data files in `src/data/*coins*.ts`, `junk-silver.ts`, `silver-dollars.ts`,
  etc. This is the **highest-volume, highest-risk** surface (thin/dupe content,
  templated metadata, cannibalization).
- **Location pages** — `src/app/locations/[city]/` (4 stores).
- **City landing pages** — `cash-for-gold-<city>` from `src/data/city-landings.ts`.
- **Blog** — `src/app/blog/` + `src/data/blog.ts`.
- **Static** — home, what-we-buy, about, contact(s), find-store, calculator, etc.
- **Infra** — `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/llms.txt/route.ts`,
  root `metadata` + `OrganizationJsonLd` in `layout.tsx`, `src/components/json-ld.tsx`.
- **App/analytics** — `src/app/api/track/route.ts`, `admin-adam` dashboard.

## Phase 0 — Discovery + cheap automated scan (do this yourself, first)

Ground the whole audit before spawning anyone. Run fast checks and build the
work-list:

1. **Enumerate real routes + counts.** Glob `src/app/**/page.tsx`; count
   programmatic pages by resolving the data files (how many categories / subs /
   items / cities actually render).
2. **Grep for the obvious defects** (cite every hit):
   - Hardcoded NAP that should come from `business.ts`. Separators are optional
     and flexible (dots, dashes, spaces, parens, or none — matches `571.290.8020`,
     `571-290-8020`, `(571) 290-8020`, `5712908020`):
     `grep -rnE '\(?571\)?[ .-]?(290|359|224)[ .-]?[0-9]{4}|\(?703\)?[ .-]?889[ .-]?[0-9]{4}|Columbia Pike|Centreville Rd|Lee Jackson|Tyco Rd' src/` — any match **outside** `src/data/business.ts` is a NAP-drift risk.
   - Pages missing metadata: every `page.tsx` should export `metadata` or
     `generateMetadata`. List any that don't.
   - `next/image` usage vs raw `<img>`; `priority` on LCP images.
   - Canonicals: is `alternates.canonical` set per template, or only root?
3. **Read the four infra files** (`sitemap.ts`, `robots.ts`, `layout.tsx`
   metadata, `json-ld.tsx`) and note gaps yourself — these are small and worth a
   direct pass.
4. **Verify RENDERED output, not just source.** Code inspection misses defects
   that only appear in the actual HTML crawlers receive — e.g. a count-up
   component (`NumberTicker`) that server-renders `0`, shipping "0 Years in
   business" to Google. Fetch the raw HTML for at least: the **homepage**, one
   **coin item** page (`[category]/[sub]/[item]`), one **location** page, and one
   **city landing** page — via `next build && next start` + `curl`, or the
   production URL. **Fetch with a plain HTTP GET that does NOT execute JavaScript
   (`curl`/`wget` — never a headless browser).** The goal is to validate the
   *pre-hydration* HTML exactly as a crawler first sees it; a headless browser
   runs the client JS and would mask SSR defects (the count-up would animate to
   its final value on screen, hiding the `0` that shipped in the HTML). For that
   same reason, **specifically verify the SSR initial values of every client-side
   counter/animation/prop-driven component** — these are the classic source of
   shipped-`0` (and shipped-placeholder) bugs. Against the rendered HTML (not the
   source) confirm: `<title>`, canonical, JSON-LD blocks, and key visible text
   (counts, prices, NAP) render correctly. Tag every finding's evidence as either
   `code-inspection` or `rendered-output` so the two are never conflated.
   - **Don't eyeball it — diff it.** Eye-scanning rendered HTML for a stray `0`
     fails (a hardcoded "15 years" elsewhere on the page will fool you). Instead:
     `grep -rn "NumberTicker\|useSpring\|count-up\|animate" src/components` to
     enumerate every client-animated value, then for each usage read its source
     `value` and grep the rendered HTML for the element's actual SSR content. If
     the SSR'd number ≠ the source value (e.g. SSRs `startValue`/`0`), that's a
     `rendered-output` defect — crawlers and no-JS users get the wrong number.
     Apply the same source-value-vs-rendered-value diff to any prop-driven visible
     text, not just numbers.
   - **No anomaly gets waved off.** EVERY anomaly seen in the rendered output — an
     unexpected `0`, an empty/whitespace `<span>`, a placeholder string, a
     literal `&quot;`/`undefined`/`NaN`, a missing value — is EITHER reported as a
     finding OR explained as non-issue **with proof** (quote the source that makes
     it correct, or the reason crawlers don't get the bad value). You may NOT
     dismiss it as "probably fine" by pointing at some *other* element on the page
     that renders correctly. If you can't prove it's fine, it's a finding
     (downgrade to "needs verification" only if genuinely undecidable). This rule
     exists because a real "0 Years in business" bug was once waved off exactly
     that way.
5. Write the discovery summary into a scratch note; pass it to every subagent so
   they don't re-scan from zero.

## Phase 1 — Fan-out audit (dispatch specialists in parallel)

**Validate the roster first.** List `.claude/agents/` and confirm every agent
named in the dispatch table below actually exists. If one is missing, the
orchestrator covers that lane itself (using the checklist in
`references/dimensions.md`) and **notes the substitution in the report** — never
silently skip a lane.

Dispatch the agents below. Give **each** the Phase-0 discovery summary, the exact
files/routes in its lane, and the **required finding schema** (see below). Launch
them concurrently in waves so you keep progress visible — SEO wave first, System
wave second (or all at once if the user wants speed).

| # | Dimension | Agent | What it audits |
|---|---|---|---|
| 1 | Technical SEO foundations | `seo-structure-architect` | sitemap/robots/canonical coverage & correctness, indexability, redirect map, heading hierarchy, internal-linking depth to deep item pages, JSON-LD **validity per template** (Organization, LocalBusiness/JewelryStore, Product, Breadcrumb, FAQ) |
| 2 | Metadata at scale | `seo-meta-optimizer` | title/description **uniqueness + length** across the programmatic templates, slug quality, OG/Twitter completeness, templated-string collisions |
| 3 | Keyword & semantic coverage | `seo-keyword-strategist` | intent match per page type, LSI/entity coverage, over-optimization/keyword stuffing on money pages |
| 4 | Cannibalization | `seo-cannibalization-detector` | overlap across service×location + city landings + coin matrix; give a resolve action per conflict (consolidate / differentiate / canonicalize) |
| 5 | Local SEO / NAP | `seo-structure-architect` (focused prompt) | NAP consistency vs `business.ts`, LocalBusiness/JewelryStore schema completeness **per location**, geo/areaServed, GBP alignment signals |
| 6 | E-E-A-T / trust (YMYL) | `seo-authority-builder` | author/expertise signals, trust elements (guarantees, licensing, reviews), citations, schema trust fields — weighted heavily (money topic) |
| 7 | Content quality & depth | `seo-content-auditor` | thin/templated content on programmatic pages, structure, readability (paragraph-splitting rule), intent satisfaction vs live top results |
| 8 | Accessibility | `accessibility-expert` | WCAG 2.2 AA: semantic HTML, ARIA, keyboard, contrast (white+gold theme risk), focus states — this is a launch gate |
| 9 | Core Web Vitals / perf | `frontend-developer` | LCP/CLS/INP risks, image strategy, client-JS where server works, bundle/hydration on the big matrix pages |
| 10 | Analytics / tracking | `analytics-tracking-specialist` | conversion/event integrity (`/api/track`, phone-call & pixel events), consent posture, gaps/double-counting |
| 11 | Code health / architecture | `code-reviewer` | data-source-of-truth violations, dead/duplicate code, structural risks that threaten SEO (e.g. drift, broken links). Keep scoped — this is an audit, not a full review |

Adjust the roster to the request: "just SEO" drops 8–11; "quick" runs 1, 2, 4, 5
only. Note in the report which dimensions were **not** run — never let omitted
coverage read as "clean."

### Required finding schema (every agent returns findings as this)

```
- severity: P0 | P1 | P2         (P3 only if explicitly asked)
- dimension: <one of the 11 above>
- title: <one-line defect statement>
- evidence: <file:line or URL> — "<short quote / exact value>"
- source: code-inspection | rendered-output   (how it was verified)
- impact: <why it hurts THIS local/YMYL site — rankings, indexing, or conversion>
- fix: <concrete, specific action; name the file/pattern to change>
- effort: S | M | L
```

Tell each agent: return raw findings only, most-severe first, no preamble. If a
lane is clean, say so explicitly (that's a finding worth recording).

## Phase 2 — Synthesize (you, the orchestrator)

1. **Collect** all findings. **Deduplicate** across agents (the same missing
   canonical will surface from structure + metadata — merge, keep richest fix).
2. **Re-rank globally** by real impact, not by which agent found it. A single P0
   from accessibility can outrank three P2 SEO nits.
3. **Cross-check conflicts** — if two agents disagree, resolve it yourself by
   reading the file; don't ship both.
4. **Verify the scary ones.** For any P0 you're not certain of, open the file and
   confirm before it goes in. Downgrade anything you can't confirm to "needs
   verification."
5. Compute a lightweight **scorecard** (0–100 per dimension + overall) so trend
   is visible across quarterly runs. Keep the rubric consistent (see
   `references/report-template.md`).
6. **Quarter-over-quarter comparison.** If prior audits exist in `docs/audits/`,
   read the most recent one. Classify each current finding as **NEW / STILL OPEN /
   RESOLVED**, and compute the **scorecard delta per dimension** (↑/↓/=). Add a
   short **"Progress since last audit"** section to BOTH the internal report and
   the client PDF (in the PDF, phrase it as wins delivered + what's still open, in
   business language). If no prior audit exists, state this is the baseline run.

## Phase 3 — Output (three deliverables, distinct audiences)

There are **two audiences** — never mix them. The internal report is technical
and blunt (`file:line`, tool names OK). The client report is a polished corporate
deliverable in **business language only** (see client-facing rule in Guardrails).

1. **Internal dev report** → `docs/audits/audit-YYYY-MM-DD.md` using
   `references/report-template.md`. Durable, diffable, `file:line` evidence, the
   fix plan. This is what *we* work from. Read today's date from context — do not
   invent one.
   - **Site Health Snapshot (mandatory, at the very TOP, before findings).**
     Record the state of the site whether or not problems were found — a
     comparable "x-ray" so trends (including healthy things) are visible run over
     run. All values come from Phase 0 discovery — **no extra scanning pass**.
     Include: page inventory by surface (coin matrix / locations / city landings /
     blog / static, with counts); sitemap URL count vs actual route count (flag
     mismatches); coverage % for metadata, canonicals, and JSON-LD ("X of Y
     pages"); redirect-map size; framework + key dependency versions; build-output
     summary (route count, largest first-load JS bundles); and the per-dimension
     scorecard table.
2. **HTML dashboard** → `docs/audits/audit-YYYY-MM-DD.html`, a **single
   self-contained file** (inline CSS/JS, no external deps — opens offline): scorecard
   cards, P0/P1/P2 color-coded, dimension bars, quarter-over-quarter deltas. This
   is the primary visual because Claude Code / Desktop Code sessions can't publish
   chat Artifacts. **If** the environment does support Artifacts, you may publish
   one *in addition* (never instead) — load `artifact-design` first.
3. **Client corporate PDF** → `Raporlar/Cash-For-Gold-Audit-Raporu-YYYY-MM-DD.pdf`.
   The formal, logo'd, shareable-with-the-client deliverable. Build it, don't
   improvise it:
   1. **Author the report JSON** — translate the audit findings into the
      client-report data schema (see `references/client-report-sample.json` for the
      exact shape: `meta`, `overallScore`, `scoreInterpretation`, `takeaways[]`,
      `progress` {baseline flag, resolved/inProgress/new counts, `deltas[]`},
      `scorecard[]` (11 dimensions, client-friendly names), `findings`
      {`critical[]`, `high[]`, `polish[]`}, `strengths[]`, `nextSteps[]`). Every
      string is **business language only** — no file paths, tool names, tech stack,
      or `P0/P1/P2` jargon (use the Critical/High/Enhancement labels). Curate 3–8
      findings per group; the exhaustive list stays in the internal MD report.
   2. **Render the PDF** — `node scripts/build-client-report.mjs <path-to-json>`.
      The script fills `references/client-report-template.html`, embeds the logo as
      a data URI, prints to A4 via Playwright Chromium, and then rasterizes every
      page to PNG under `Raporlar/.qa-<date>/` for inspection.
   3. **Visual QA — MANDATORY, never skip.** Open and **look at every page image**
      the script emitted (`Raporlar/.qa-<date>/page-*.png`). Inspect each page for:
      running-footer/header collisions with body text, orphaned headings (a heading
      alone at a page foot), overflowing or clipped text, near-empty pages, and
      broken/split finding cards. **The PDF is NOT done until every page passes.**
      If any page fails, fix the template/data and rebuild — do NOT hand over an
      uninspected or failing PDF. (If `pdftoppm` is unavailable, screenshot each
      page with Playwright instead — but inspect either way.)
   4. **Confirm it landed** — verify the PDF exists in `Raporlar/` (non-zero size)
      and report its path. If a same-day file exists the script suffixes `-v2` etc.
      (never silently overwrites).
   `references/client-report.md` is the design spec behind the template (branding,
   structure, business-language translation). This step is mandatory whenever the
   user asks to "audit çıkar ve raporla" / produce a client report.
4. In chat, give a **tight executive summary**: overall score, top 3–5 priorities
   (business terms), the single highest-leverage next action. Link all outputs.

## Guardrails

- **Read-only.** Never edit code mid-audit. Findings → approval → separate fix pass.
- **Scope: security is OUT of scope.** This is an SEO + content/quality/architecture
  audit — it does NOT cover security (TLS/HTTPS config, secrets management, auth,
  dependency CVEs, security headers). State this exclusion explicitly in the
  report's **Method & caveats** section so the absence of security findings is
  never read as a clean security bill of health.
- **No fabricated metrics.** If you can't measure CWV/traffic locally, say the
  finding is a *risk from code inspection*, not a measured number. (Honesty rule.)
- **Client-facing rule (STRICT — applies to the `Raporlar/` PDF and anything
  shown to the client):** describe work in business terms and value only. NEVER
  name internal systems, hosting/platform, GitHub, AI/Claude/CLI, deploy
  mechanics, agent names, or `file:line` code refs. Translate every technical
  finding into "what it means for your business + what we'll do." The internal MD
  report keeps the raw technical detail; the PDF is the executive translation.
- **Client PDFs are local-only.** `Raporlar/` is a delivery folder, never
  version-controlled — it's `.gitignore`d. Do not commit client reports or the
  logo; they stay on the local machine and are shared with the client directly.
- The detailed per-dimension checklists live in `references/dimensions.md` — load
  it when you need the specifics of what a lane must cover.
