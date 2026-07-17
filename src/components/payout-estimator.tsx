"use client";

import { useEffect, useMemo, useState } from "react";
import { Phone, MapPin, TriangleAlert, Star, Check, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCATIONS, SITE } from "@/data/business";

// Payout band as a fraction of melt value (LOW–HIGH). A range, never a single
// number, to stay non-binding and honest. Tune to real store economics.
const PAYOUT: Record<string, { low: number; high: number }> = {
  gold: { low: 0.78, high: 0.92 },
  silver: { low: 0.65, high: 0.85 },
  platinum: { low: 0.7, high: 0.85 },
};

const PURITY: Record<string, { label: string; value: number }[]> = {
  gold: [
    { label: "10K (.417)", value: 0.4167 },
    { label: "14K (.583)", value: 0.5833 },
    { label: "18K (.750)", value: 0.75 },
    { label: "22K (.917)", value: 0.9167 },
    { label: "24K / fine (.999)", value: 0.999 },
  ],
  silver: [
    { label: "Sterling .925", value: 0.925 },
    { label: "Coin .900", value: 0.9 },
    { label: "Fine .999", value: 0.999 },
  ],
  platinum: [
    { label: "Platinum .950", value: 0.95 },
    { label: "Platinum .900", value: 0.9 },
  ],
};

const DEFAULT_PURITY: Record<string, number> = { gold: 0.5833, silver: 0.925, platinum: 0.95 };
const API: Record<string, string> = { gold: "XAU", silver: "XAG", platinum: "XPT" };
const FALLBACK: Record<string, number> = { gold: 4180, silver: 66, platinum: 1730 };
const GRAMS: Record<string, number> = { g: 1, dwt: 1.55517, ozt: 31.1035 };
const TROY_OZ_G = 31.1035;

const METALS = [
  { key: "gold", label: "Gold", dot: "bg-gold-400" },
  { key: "silver", label: "Silver", dot: "bg-zinc-300" },
  { key: "platinum", label: "Platinum", dot: "bg-slate-300" },
];

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const fmt2 = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

const fieldCls =
  "w-full appearance-none rounded-xl border border-hairline bg-cream-50 px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export function PayoutEstimator() {
  const [metal, setMetal] = useState("gold");
  const [purity, setPurity] = useState(DEFAULT_PURITY.gold);
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"g" | "dwt" | "ozt">("g");
  const [spot, setSpot] = useState<Record<string, number>>({ ...FALLBACK });
  const [live, setLive] = useState(false);
  const [locSlug, setLocSlug] = useState(LOCATIONS[0].slug);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const keys = Object.keys(API);
        const res = await Promise.all(
          keys.map((m) =>
            fetch(`https://api.gold-api.com/price/${API[m]}`).then((r) => {
              if (!r.ok) throw new Error("bad");
              return r.json();
            }),
          ),
        );
        if (!active) return;
        const next = { ...FALLBACK };
        keys.forEach((m, i) => {
          if (res[i]?.price > 0) next[m] = res[i].price;
        });
        setSpot(next);
        setLive(true);
      } catch {
        if (active) setLive(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  function selectMetal(m: string) {
    setMetal(m);
    setPurity(DEFAULT_PURITY[m]);
  }

  const result = useMemo(() => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return null;
    if (w > 100000) return { error: "Please enter a realistic weight." as const };
    const grams = w * GRAMS[unit];
    const pricePerGram = spot[metal] / TROY_OZ_G;
    const melt = pricePerGram * grams * purity;
    const band = PAYOUT[metal];
    return { low: melt * band.low, high: melt * band.high, melt };
  }, [weight, unit, spot, metal, purity]);

  const loc = LOCATIONS.find((l) => l.slug === locSlug)!;

  return (
    <div className="grid gap-5">
      <div className="relative overflow-hidden rounded-3xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        {/* live status */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">What are you selling?</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className={cn("absolute inline-flex h-full w-full rounded-full", live ? "animate-ping bg-emerald-400/60" : "bg-amber-400/50")} />
              <span className={cn("relative inline-flex h-2 w-2 rounded-full", live ? "bg-emerald-500" : "bg-amber-500")} />
            </span>
            {live ? `Live gold ${fmt2(spot.gold)}/oz` : "Reference price"}
          </span>
        </div>

        {/* metal pills */}
        <div className="flex flex-wrap gap-2">
          {METALS.map((m) => (
            <button
              key={m.key}
              onClick={() => selectMetal(m.key)}
              aria-pressed={metal === m.key}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors",
                metal === m.key ? "border-gold-500 bg-gold-50 text-gold-700" : "border-hairline bg-cream-50 text-foreground/80 hover:border-gold-300",
              )}
            >
              <span className={cn("h-3 w-3 rounded-full", m.dot)} /> {m.label}
            </button>
          ))}
        </div>

        {/* purity + weight */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-muted">Purity</span>
            <select value={purity} onChange={(e) => setPurity(parseFloat(e.target.value))} className={fieldCls}>
              {PURITY[metal].map((o) => (
                <option key={o.label} value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-muted">Weight</span>
            <input
              type="number"
              min={0}
              step={0.1}
              inputMode="decimal"
              placeholder="e.g. 12.5"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={fieldCls}
            />
          </label>
        </div>

        {/* unit */}
        <div className="mt-4">
          <span className="mb-1.5 block text-sm font-medium text-muted">Weight unit</span>
          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-hairline">
            {([["g", "Grams"], ["dwt", "Pennyweight"], ["ozt", "Troy oz"]] as const).map(([u, label]) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                aria-pressed={unit === u}
                className={cn("border-r border-hairline py-3 text-sm font-semibold transition-colors last:border-r-0", unit === u ? "bg-gold-50 text-gold-700" : "bg-cream-50 text-muted hover:text-foreground")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* result */}
        <div className="mt-5 rounded-2xl bg-gradient-to-br from-ink-950 to-ink-900 p-6 text-center">
          {!result ? (
            <p className="py-3 text-sm text-cream-100/60">Enter a weight above to see your estimated range.</p>
          ) : "error" in result ? (
            <p className="py-3 text-sm text-red-400">{result.error}</p>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.15em] text-cream-100/50">Estimated payout range</p>
              <p className="mt-1.5 font-display text-4xl font-extrabold text-gold-300 sm:text-5xl">
                {fmt(result.low)} <span className="text-cream-100/40">–</span> {fmt(result.high)}
              </p>
              <p className="mt-2 text-[13px] text-cream-100/55">
                Based on ~{fmt(result.melt)} melt value · {live ? "live" : "reference"} {metal} price {fmt2(spot[metal])}/oz
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-amber-400">
                <TriangleAlert className="h-3.5 w-3.5" /> Estimate only, not a binding offer. Final price set in store.
              </p>
            </>
          )}
        </div>

        {/* legal */}
        <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-50/60 p-4 text-[12.5px] leading-relaxed text-amber-900/90">
          <b className="text-amber-700">This is an estimate, not an offer.</b> It is calculated from the live market metal
          price minus standard refining and processing, and is not a binding quote. Your actual price is determined in
          store after our experts test and weigh each item; value can be higher (designer, collectible, or numismatic
          pieces) or lower. To sell, Virginia law requires you to be 18+, present valid ID, and be the rightful owner.
        </div>
      </div>

      {/* CTA card */}
      <div className="rounded-3xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <h3 className="font-display text-xl font-semibold text-foreground">Get your real offer, free &amp; on the spot</h3>
        <p className="mt-1 text-sm text-muted">Pick your nearest location for an exact, no-obligation appraisal. Walk out paid the same day.</p>
        <select value={locSlug} onChange={(e) => setLocSlug(e.target.value)} className={cn(fieldCls, "mt-4")} aria-label="Choose a location">
          {LOCATIONS.map((l) => (
            <option key={l.slug} value={l.slug}>{l.city} · {l.phone}</option>
          ))}
        </select>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <a href={`tel:${loc.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3.5 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            <Phone className="h-4 w-4" /> Call {loc.city}
          </a>
          <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold-500/50 px-5 py-3.5 font-semibold text-gold-700 transition-colors hover:bg-gold-50">
            <MapPin className="h-4 w-4" /> Directions
          </a>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold-400 text-gold-400" /> {SITE.rating.value} / {SITE.rating.count}+ reviews</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-gold-500" /> Tested in front of you</span>
          <span className="inline-flex items-center gap-1.5"><Banknote className="h-4 w-4 text-gold-500" /> Instant payout</span>
        </div>
      </div>
    </div>
  );
}
