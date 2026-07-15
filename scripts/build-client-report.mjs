#!/usr/bin/env node
/**
 * build-client-report.mjs — render the client-facing audit PDF.
 *
 * Reads a report JSON (see references/client-report-sample.json for the schema),
 * fills references/client-report-template.html deterministically, embeds the logo
 * as a base64 data URI, and prints to A4 via Playwright Chromium. Output lands in
 * Raporlar/ (git-ignored, shared with the client directly).
 *
 *   node scripts/build-client-report.mjs <data.json> [--debug]
 *
 * JSON schema (all strings are BUSINESS LANGUAGE — no tech/tool/file refs):
 *   meta: { reportTitle, clientName, reportDate (YYYY-MM-DD), preparedBy, baseline }
 *   overallScore: number 0-100
 *   scoreInterpretation: string
 *   takeaways: string[]
 *   progress: { baseline, resolved, inProgress, new, baselineNote, summary, deltas:[{dimension,delta,dir}] }
 *   scorecard: [{ dimension, score, barWidth?, note }]        (barWidth defaults to score)
 *   findings: { critical:[{title,meaning,action}], high:[...], polish:[...] }
 *   strengths: string[]
 *   nextSteps: string[]
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, readdirSync, rmSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const TEMPLATE = resolve(REPO, ".claude/skills/seo-audit/references/client-report-template.html");
const LOGO = resolve(REPO, "public/brand/c4g-logo.png");
const OUT_DIR = resolve(REPO, "Raporlar");
const RING_CIRCUMFERENCE = 402.12; // template ring r=64 → 2πr; keep in sync with the SVG stroke-dasharray

// ---------------------------------------------------------------- args + guards
const args = process.argv.slice(2);
const debug = args.includes("--debug");
const jsonArg = args.find((a) => !a.startsWith("--"));
if (!jsonArg) {
  console.error("Usage: node scripts/build-client-report.mjs <data.json> [--debug]");
  process.exit(1);
}
const dataPath = resolve(process.cwd(), jsonArg);
for (const [label, p] of [["Data JSON", dataPath], ["Template", TEMPLATE], ["Logo", LOGO]]) {
  if (!existsSync(p)) { console.error(`✗ ${label} not found: ${p}`); process.exit(1); }
}

const data = JSON.parse(readFileSync(dataPath, "utf8"));
let html = readFileSync(TEMPLATE, "utf8");

// ---------------------------------------------------------------- helpers
const esc = (s) =>
  String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const fillItem = (tpl, obj) =>
  tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => esc(obj[k]));

/** Locate a `<!-- @@BEGIN NAME -->…<!-- @@END NAME -->` region. */
function block(name) {
  const re = new RegExp(`<!--\\s*@@BEGIN ${name}\\s*-->([\\s\\S]*?)<!--\\s*@@END ${name}\\s*-->`);
  const m = html.match(re);
  if (!m) throw new Error(`Template marker block missing: ${name}`);
  return { re, inner: m[1] };
}

/** Replace an inline marker region with its sample filled once per item. */
function expandInline(name, items) {
  const { re, inner } = block(name);
  const filled = items
    .map((it) => fillItem(inner, typeof it === "string" ? { text: it } : it))
    .join("");
  html = html.replace(re, filled);
}

// ---------------------------------------------------------------- repeatable blocks
expandInline("TAKEAWAY", data.takeaways ?? []);
expandInline(
  "SCORECARD_ROW",
  (data.scorecard ?? []).map((r) => ({ ...r, barWidth: r.barWidth ?? r.score }))
);

const baseline = data.progress?.baseline ?? data.meta?.baseline ?? false;
const deltas = baseline ? [] : data.progress?.deltas ?? [];
expandInline("DELTA_ROW", deltas);
// No deltas (baseline / none supplied) → drop the now whitespace-only container
// so no empty box prints (`:empty` won't match a div holding stray whitespace).
if (!deltas.length) html = html.replace(/<div class="deltas">\s*<\/div>/, "");
expandInline("STRENGTH", data.strengths ?? []);
expandInline("NEXT_STEP", data.nextSteps ?? []);

// Findings: extract the shared card template, drop its sample region, fill 3 groups.
{
  const { re, inner } = block("FINDING_CARD");
  const cardTpl = inner;
  html = html.replace(re, "");
  const groups = {
    CRITICAL: data.findings?.critical ?? [],
    HIGH: data.findings?.high ?? [],
    POLISH: data.findings?.polish ?? [],
  };
  for (const [key, arr] of Object.entries(groups)) {
    html = html.replaceAll(`{{${key}_CARDS}}`, arr.map((f) => fillItem(cardTpl, f)).join(""));
    html = html.replaceAll(`{{${key}_COUNT}}`, String(arr.length));
  }
}

// ---------------------------------------------------------------- single tokens
const ringOffset = (RING_CIRCUMFERENCE * (1 - (Number(data.overallScore) || 0) / 100)).toFixed(2);
const progressBody = baseline
  ? data.progress?.baselineNote ??
    "Baseline established — this is the first review; future reports will track progress against these results."
  : data.progress?.summary ?? "";

const single = {
  REPORT_TITLE: data.meta?.reportTitle ?? "SEO & Site Health Report",
  CLIENT_NAME: data.meta?.clientName ?? "",
  REPORT_DATE: data.meta?.reportDate ?? "",
  PREPARED_BY: data.meta?.preparedBy ?? "",
  OVERALL_SCORE: data.overallScore ?? "",
  SCORE_INTERPRETATION: data.scoreInterpretation ?? "",
  OVERALL_RING_OFFSET: ringOffset,
  RESOLVED_COUNT: data.progress?.resolved ?? 0,
  INPROGRESS_COUNT: data.progress?.inProgress ?? 0,
  NEW_COUNT: data.progress?.new ?? 0,
  PROGRESS_BODY: progressBody,
};
for (const [k, v] of Object.entries(single)) html = html.replaceAll(`{{${k}}}`, esc(v));

// Logo data URI — appears on cover AND footer, so replace globally, raw (no escaping).
const logoDataUri = `data:image/png;base64,${readFileSync(LOGO).toString("base64")}`;
html = html.replaceAll("{{LOGO_DATA_URI}}", logoDataUri);

// Fail loud if any placeholder survived (a schema/template drift).
const leftover = [...html.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
if (leftover.length) {
  console.error(`✗ Unfilled placeholders remain: ${[...new Set(leftover)].join(", ")}`);
  process.exit(1);
}

if (debug) {
  const dbg = join(REPO, "Raporlar", "_debug-filled.html");
  mkdirSync(dirname(dbg), { recursive: true });
  writeFileSync(dbg, html);
  console.log(`· debug HTML → ${dbg}`);
}

// ---------------------------------------------------------------- render PDF
const date = (data.meta?.reportDate ?? "").match(/^\d{4}-\d{2}-\d{2}$/)
  ? data.meta.reportDate
  : new Date().toISOString().slice(0, 10);

mkdirSync(OUT_DIR, { recursive: true });
let outPath = join(OUT_DIR, `Cash-For-Gold-Audit-Raporu-${date}.pdf`);
for (let v = 2; existsSync(outPath); v++) {
  outPath = join(OUT_DIR, `Cash-For-Gold-Audit-Raporu-${date}-v${v}.pdf`);
}

// Page margins — MUST stay in sync with the template's @page note. The bottom
// margin reserves space for the running footer (below), so it never collides
// with body content; the top margin gives the body breathing room (no header).
const MARGIN = { top: "16mm", bottom: "18mm", left: "15mm", right: "15mm" };

// Running footer via Chromium's native mechanism (reliable, reserves space) —
// NOT a position:fixed element (that one printed over the content). Chromium
// zeroes footer font-size by default, so every style is inline.
const footerTemplate = `
  <div style="width:100%;box-sizing:border-box;padding:0 15mm;font-size:8px;
              font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif;
              color:#6a675f;display:flex;align-items:center;justify-content:space-between;">
    <span style="display:flex;align-items:center;gap:5px;">
      <img src="${logoDataUri}" style="height:9px;width:auto;opacity:.9;">
      <span>Confidential &mdash; prepared for Cash for Gold VA</span>
    </span>
    <span>${esc(single.REPORT_DATE)} &nbsp;&#9670;&nbsp; Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>`;

const { chromium } = await import("playwright");
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: MARGIN,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>", // empty header; top margin above reserves space
    footerTemplate,
  });
} finally {
  await browser.close();
}

const kb = (statSync(outPath).size / 1024).toFixed(0);
if (statSync(outPath).size < 5000) {
  console.error(`✗ PDF looks empty (${kb} KB): ${outPath}`);
  process.exit(1);
}
console.log(`✓ Client report → ${outPath} (${kb} KB)`);

// ---------------------------------------------------------------- visual QA (mandatory)
// Rasterize EVERY page to PNG so the operator can visually inspect each one.
// The PDF is NOT "done" until every page passes: no header/footer collisions,
// no orphaned headings, no overflow, no near-empty pages, no broken cards.
const qaDir = join(OUT_DIR, `.qa-${date}`);
rmSync(qaDir, { recursive: true, force: true });
mkdirSync(qaDir, { recursive: true });
try {
  execFileSync("pdftoppm", ["-png", "-r", "110", outPath, join(qaDir, "page")], { stdio: "pipe" });
  const imgs = readdirSync(qaDir).filter((f) => f.endsWith(".png")).sort();
  console.log(`\n· QA — rasterized ${imgs.length} page(s) for inspection → ${qaDir}`);
  for (const f of imgs) console.log(`    ${join(qaDir, f)}`);
  console.log(
    "\n  ⚠ MANDATORY: open and visually inspect EVERY page image above before delivering.\n" +
    "    Check each for: header/footer collisions, orphaned headings, overflowing text,\n" +
    "    near-empty pages, and broken/split cards. Do NOT hand over an uninspected PDF."
  );
} catch {
  console.warn(
    "\n  ⚠ QA rasterization skipped — `pdftoppm` (poppler) not found.\n" +
    "    Install it (`brew install poppler`) or screenshot each page with Playwright.\n" +
    "    Do NOT deliver the PDF without inspecting every page."
  );
}
