import { NextResponse } from "next/server";

/**
 * Same-origin spot-price proxy for the LivePriceTicker (audit P1-13b).
 *
 * Before: every visitor fired 4 cross-origin fetches to api.gold-api.com at
 * hydration on every page. Now the browser makes ONE same-origin call here,
 * and the server's `fetch(..., { next: { revalidate: 60 } })` data cache means
 * the upstream is hit at most ~once per minute per metal for the whole site,
 * regardless of traffic.
 *
 * Contract: { prices: { gold, silver, platinum, palladium }, updatedAt, live }
 * - prices are USD per troy ounce
 * - live:false means every value is a fallback/last-good (client shows a
 *   "reference" label instead of implying a live feed)
 */

const METALS = [
  { key: "gold", sym: "XAU", fallback: 4180 },
  { key: "silver", sym: "XAG", fallback: 66 },
  { key: "platinum", sym: "XPT", fallback: 1730 },
  { key: "palladium", sym: "XPD", fallback: 1310 },
] as const;

type MetalKey = (typeof METALS)[number]["key"];
type Prices = Record<MetalKey, number>;

// Last successful upstream read (per server instance). Lets us degrade to
// recent real prices instead of static fallbacks when the upstream blips.
let lastGood: { prices: Prices; updatedAt: string } | null = null;

async function fetchMetal(sym: string): Promise<number> {
  const res = await fetch(`https://api.gold-api.com/price/${sym}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`upstream ${sym}: HTTP ${res.status}`);
  const json = (await res.json()) as { price?: number };
  if (typeof json.price !== "number" || !(json.price > 0)) {
    throw new Error(`upstream ${sym}: bad payload`);
  }
  return json.price;
}

export async function GET() {
  const results = await Promise.allSettled(METALS.map((m) => fetchMetal(m.sym)));

  let liveCount = 0;
  const prices = {} as Prices;
  METALS.forEach((m, i) => {
    const r = results[i];
    if (r.status === "fulfilled") {
      prices[m.key] = r.value;
      liveCount += 1;
    } else {
      // Per-metal degrade: last-good if we have it, else static fallback.
      prices[m.key] = lastGood?.prices[m.key] ?? m.fallback;
      console.error(`[api/prices] ${m.key} fetch failed:`, r.reason);
    }
  });

  const live = liveCount > 0;
  const updatedAt = live ? new Date().toISOString() : (lastGood?.updatedAt ?? null);
  if (liveCount === METALS.length) {
    lastGood = { prices, updatedAt: updatedAt as string };
  }

  return NextResponse.json(
    { prices, updatedAt, live },
    {
      headers: {
        // Browser 30s, CDN 60s, serve stale while refreshing — matches the
        // client's 60s poll cadence.
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}
