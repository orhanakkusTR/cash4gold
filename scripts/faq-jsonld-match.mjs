// Rendered-output check (Wave 3 / P1-14): for every category & subcategory page,
// confirm the FAQPage JSON-LD "name" values match, one-for-one, the visible FAQ
// questions rendered in the <summary> accordion. Run against a live `next start`.
//   node scripts/faq-jsonld-match.mjs [baseUrl]
const BASE = process.argv[2] || "http://localhost:4173";

const PATHS = [
  "jewelry", "precious-metals", "precious-stones", "coins", "watches",
  "jewelry/sell-gold-jewelry", "jewelry/sell-silver-jewelry", "jewelry/sell-your-scrap-gold-jewelry",
  "jewelry/sell-designer-jewelry", "jewelry/sell-your-estate-jewelry", "jewelry/sell-your-antique-jewelry",
  "precious-metals/sell-gold", "precious-metals/sell-silver", "precious-metals/sell-platinum",
  "precious-metals/sell-your-palladium", "precious-metals/sell-sterling-silver-sets",
  "precious-metals/sell-dental-gold", "precious-metals/sell-gold-filled-plated",
  "precious-stones/sell-diamonds",
  "coins/sell-gold-coins", "coins/sell-silver-coins", "coins/sell-collectible-coins", "coins/sell-antique-coins",
  "watches/sell-rolex", "watches/sell-luxury-watches",
];

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"')
    .replace(/&ldquo;|&rdquo;|&#x201[cd];/g, "“").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/[“”]/g, '"').replace(/’/g, "'").replace(/\s+/g, " ").trim();

const norm = (s) => decode(s).toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();

let fail = 0;
for (const p of PATHS) {
  const res = await fetch(`${BASE}/${p}`);
  const html = await res.text();

  // JSON-LD FAQPage question names
  const jsonldNames = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(m[1]); } catch { continue; }
    if (data && data["@type"] === "FAQPage" && Array.isArray(data.mainEntity)) {
      data.mainEntity.forEach((q) => jsonldNames.push(q.name));
    }
  }
  // Visible accordion questions: <summary ...>...<span...>Q?</span>... — grab summary text
  const visible = [];
  for (const m of html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)) {
    // drop the "+" toggle span, then strip remaining tags
    const inner = m[1].replace(/<span[\s\S]*?<\/span>/g, " ").replace(/<[^>]+>/g, " ");
    const txt = decode(inner);
    if (txt.includes("?")) visible.push(txt);
  }

  const js = jsonldNames.map(norm).sort();
  const vs = visible.map(norm).sort();
  const same = js.length > 0 && js.length === vs.length && js.every((x, i) => x === vs[i]);
  if (same) {
    console.log(`✅ /${p}  — ${js.length} Q, JSON-LD == visible`);
  } else {
    fail++;
    console.log(`❌ /${p}  — JSON-LD(${js.length}) vs visible(${vs.length}) MISMATCH`);
    const onlyJs = js.filter((x) => !vs.includes(x));
    const onlyVs = vs.filter((x) => !js.includes(x));
    onlyJs.forEach((x) => console.log(`     only in JSON-LD: "${x}"`));
    onlyVs.forEach((x) => console.log(`     only visible   : "${x}"`));
  }
}
console.log(fail === 0
  ? `\n✅ PASS — all ${PATHS.length} pages: FAQPage JSON-LD matches visible questions.`
  : `\n❌ FAIL — ${fail} page(s) mismatched.`);
process.exit(fail === 0 ? 0 : 1);
