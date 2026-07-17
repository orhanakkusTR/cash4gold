// FAQ uniqueness check (Wave 3 / P1-14). Imports PAGE_FAQS and reports any
// N-word run shared between two pages across their combined question+answer
// prose. Rule: the same fact may appear on many pages, but never inside the
// same 8+-word sentence.
//   node scripts/faq-uniqueness.mjs [N]        (default N = 8)
//
// Reads the TS source directly (no build) via a tiny regex extractor so it can
// run as a pre-commit gate. PAGE_FAQS entries are { q, a } string literals.
import { readFileSync } from "node:fs";

const N = Number(process.argv[2]) || 8;
const FILE = "src/data/category-briefs.ts";
const src = readFileSync(FILE, "utf8");

// Isolate the PAGE_FAQS object literal.
const start = src.indexOf("export const PAGE_FAQS");
const end = src.indexOf("export const getFaqs");
const region = src.slice(start, end > start ? end : src.length);

// Split into per-page blocks keyed by the route path.
const keys = [...region.matchAll(/^  "?([a-z][a-z0-9/-]+)"?:\s*\[/gm)];
const pages = {};
for (let i = 0; i < keys.length; i++) {
  const block = region.slice(keys[i].index, i + 1 < keys.length ? keys[i + 1].index : region.length);
  // grab q: and a: string values (>= 8 chars) — the visible FAQ prose.
  const text = [...block.matchAll(/[qa]:\s*"([^"]{8,})"/g)].map((m) => m[1]).join(" ");
  pages[keys[i][1]] = text;
}

const grams = (t) => {
  const w = t.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const g = new Set();
  for (let i = 0; i + N <= w.length; i++) g.add(w.slice(i, i + N).join(" "));
  return g;
};

const names = Object.keys(pages);
console.log(`FAQ uniqueness — ${names.length} page(s), ${N}-word runs`);
let total = 0;
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const a = grams(pages[names[i]]);
    const b = grams(pages[names[j]]);
    const shared = [...a].filter((x) => b.has(x));
    if (shared.length) {
      total += shared.length;
      console.log(`\n⚠ ${shared.length} shared: ${names[i]} ↔ ${names[j]}`);
      shared.forEach((x) => console.log(`   • "${x}"`));
    }
  }
}
console.log(
  total === 0
    ? `\n✅ PASS — no two pages share an ${N}-word FAQ run (${names.length} pages).`
    : `\n❌ FAIL — ${total} shared ${N}-word run(s); reword until zero.`,
);
process.exit(total === 0 ? 0 : 1);
