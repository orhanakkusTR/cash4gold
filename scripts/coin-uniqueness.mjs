// Coin-page content uniqueness check (Wave 3).
// Extracts the per-page CONTENT prose (sections + faqs region) from the item
// route and reports any N-word run shared between two pages. Rule: the same fact
// may appear on every page, but never in the same 8+-word sentence.
//   node scripts/coin-uniqueness.mjs [N]        (default N = 8)
import { readFileSync } from "node:fs";

const N = Number(process.argv[2]) || 8;
const FILE = "src/app/[category]/[sub]/[item]/page.tsx";
const src = readFileSync(FILE, "utf8");

// Slice the file into per-page blocks keyed by the ITEM_PAGES slug.
const keys = [...src.matchAll(/"(coins\/[^"]+)":\s*\{/g)];
const pages = {};
for (let i = 0; i < keys.length; i++) {
  const block = src.slice(keys[i].index, i + 1 < keys.length ? keys[i + 1].index : src.length);
  const s = block.indexOf("sections:");
  if (s < 0) continue; // only pages that carry the new content blocks
  const r = block.indexOf("related:");
  const region = block.slice(s, r > s ? r : block.length);
  // prose strings only (>= 40 chars) — skips slugs, class names, image paths.
  const text = [...region.matchAll(/"([^"]{40,})"/g)].map((m) => m[1]).join(" ");
  pages[keys[i][1]] = text;
}

const grams = (t) => {
  const w = t.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const g = new Set();
  for (let i = 0; i + N <= w.length; i++) g.add(w.slice(i, i + N).join(" "));
  return g;
};

const names = Object.keys(pages);
console.log(`Uniqueness check — ${names.length} page(s) with content, ${N}-word runs:\n${names.map((n) => "  · " + n).join("\n")}`);
let total = 0;
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const a = grams(pages[names[i]]);
    const b = grams(pages[names[j]]);
    const shared = [...a].filter((x) => b.has(x));
    if (shared.length) {
      total += shared.length;
      console.log(`\n⚠ ${shared.length} shared ${N}-word run(s): ${names[i].split("/").pop()} ↔ ${names[j].split("/").pop()}`);
      shared.forEach((x) => console.log(`   • "${x}"`));
    }
  }
}
console.log(
  total === 0
    ? `\n✅ PASS — no two coin pages share an ${N}-word sentence.`
    : `\n❌ FAIL — ${total} shared ${N}-word run(s); reword until zero.`,
);
process.exit(total === 0 ? 0 : 1);
