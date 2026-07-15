# Report skeleton — `docs/audits/audit-YYYY-MM-DD.md`

Fill this in during Phase 3. Keep it evidence-first and scannable. Delete
guidance-in-brackets before writing.

---

```markdown
# Cash for Gold VA — Site & System Audit
**Date:** YYYY-MM-DD · **Scope:** [Full SEO + System | SEO-only | Quick] ·
**Commit:** <short sha> · **Pages audited:** <n> ([x] static, [y] coin matrix, [z] locations, [w] city landings, [v] blog)

## Executive summary
[3–5 sentences. Overall health, the single biggest problem, the single
highest-leverage fix. No fluff.]

**Overall score: NN / 100**

## Site Health Snapshot
[The whole-site x-ray. Fill this EVERY run whether or not problems were found, so
runs are comparable over time. All values come from Phase 0 discovery — no extra
scanning. Show the delta vs the previous audit where one exists (↑/↓/=).]

**Page inventory (by surface)**

| Surface | Pages | Δ vs last |
|---|---:|---|
| Coin matrix (`[category]/[sub]/[item]`) | N | … |
| Locations | N | … |
| City landings | N | … |
| Blog | N | … |
| Static | N | … |
| **Total** | **N** | … |

**Coverage & integrity**
- Sitemap URLs: **N** vs actual routes: **N** — [match / MISMATCH: <detail>]
- Metadata (title+desc): **X of Y pages** (NN%)
- Canonical set: **X of Y pages** (NN%)
- JSON-LD present & valid: **X of Y pages** (NN%)
- Redirect map: **N** rules
- Rendered-output spot-checks: [homepage ✓ · coin item ✓ · location ✓ · city landing ✓ / issues]

**Stack & build**
- Framework: Next.js <ver> · key deps: <tailwind ver, motion ver, …>
- Build: <N routes> generated · largest first-load JS: <route> <NN kB>, <route> <NN kB>

**Scorecard**

| Dimension | Score | Δ | Worst finding |
|---|---:|:--:|---|
| Technical SEO | NN | ↑/↓/= | … |
| Metadata | NN | | … |
| Keywords/Semantic | NN | | … |
| Cannibalization | NN | | … |
| Local SEO / NAP | NN | | … |
| E-E-A-T | NN | | … |
| Content quality | NN | | … |
| Accessibility | NN | | … |
| Core Web Vitals | NN | | … |
| Analytics | NN | | … |
| Code health | NN | | … |

*Dimensions not run this pass: [list, or "none"].*

## Progress since last audit
[If a prior audit exists in docs/audits/: NEW / STILL OPEN / RESOLVED counts and
the notable resolved items + regressions. If this is the first run: "Baseline
audit — no prior run to compare against."]

## P0 — Fix now (hurting rankings / indexing / UX today)
### P0-1 · <title>
- **Dimension:** …
- **Evidence:** `path/to/file.tsx:42` — "<exact value>"
- **Impact:** …
- **Fix:** …
- **Effort:** S/M/L

[repeat per P0]

## P1 — High-value (clear opportunity or latent risk)
[same structure]

## P2 — Polish
[same structure, terser]

## What's healthy (don't touch)
[Short list of things verified GOOD — so a future run doesn't "re-discover"
non-problems, and so the owner knows what's working.]

## Suggested fix order (the plan)
1. …  (P0-x, P0-y — batch, ~effort)
2. …
[Group fixes into sensible batches / PRs. This is the actionable close.]

## Method & caveats
[Which agents ran, what was inspected vs measured. Any finding that is a
code-inspection *risk* rather than a measured metric is labeled as such.]
```

---

## Scorecard rubric (keep consistent across quarterly runs)

Score each dimension 0–100:

- **90–100** — no material issues; best-practice.
- **70–89** — minor gaps (P2s), no ranking/UX risk.
- **50–69** — real gaps (P1s), opportunity being left on the table.
- **30–49** — serious problems (a P0 or several P1s) actively costing traffic/UX.
- **0–29** — broken or absent; urgent.

**Overall** = weighted mean. Weight higher for this site: Technical SEO, Local
SEO/NAP, Metadata, E-E-A-T, Accessibility (launch gate). Weight lower: pure
polish dimensions. State the weighting in the report if it affects the headline.
