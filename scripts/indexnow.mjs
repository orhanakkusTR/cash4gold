#!/usr/bin/env node
// IndexNow submitter — pings Bing/Yandex that URLs changed so they re-crawl fast.
//
// Usage:
//   node scripts/indexnow.mjs                       # submit every URL in the live sitemap
//   node scripts/indexnow.mjs /selling-gold-jewelry # submit one or more specific paths/URLs
//
// The verification key file must be live at:
//   https://cashforgoldva.com/<KEY>.txt   (content === KEY)

const KEY = "8a7a49a0f06f5279bb2e29e477ff87d7";
const HOST = "cashforgoldva.com";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP = `${ORIGIN}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const toUrl = (s) => (s.startsWith("http") ? s : `${ORIGIN}${s.startsWith("/") ? "" : "/"}${s}`);

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP, { headers: { "user-agent": "indexnow-script" } });
  if (!res.ok) throw new Error(`Could not fetch sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length ? args.map(toUrl) : await urlsFromSitemap();
  if (!urlList.length) throw new Error("No URLs to submit.");

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow…`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const body = await res.text();
  // 200 = accepted, 202 = accepted/validating key. Both are success.
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ Accepted (HTTP ${res.status}). Bing will re-crawl these soon.`);
  } else {
    console.error(`❌ HTTP ${res.status}: ${body || "(no body)"}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
