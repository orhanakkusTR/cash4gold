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
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

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
expandInline("DELTA_ROW", baseline ? [] : data.progress?.deltas ?? []);
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

const { chromium } = await import("playwright");
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: outPath,
    printBackground: true,
    preferCSSPageSize: true, // honor the template's @page size + margins
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
