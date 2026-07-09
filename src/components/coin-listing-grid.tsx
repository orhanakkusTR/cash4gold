"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Search, X } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";

// Generic coin catalog grid — roomy horizontal cards (coin image left, text
// right) so long product names can breathe. Used by every coin detail page
// (American Gold Eagle, American Gold Buffalo, …). Because a listing can hold
// hundreds of cards, we render an initial batch and reveal more on demand. A
// filter bar above the grid narrows by weight, finish and free-text search.
// Each card is a BUY prompt: it links to /locations and surfaces the phone.
export type CoinItem = { name: string; image: string };

const BATCH = 48;
const WEIGHT_ORDER = ["1/20 oz", "1/10 oz", "1/4 oz", "1/2 oz", "1 oz", "2 oz", "5 oz", "10 oz"];

// Derive a weight label from a product name, or null when it doesn't parse.
// Fractions and longer numbers are matched first so "1/10 oz" and "10 oz" don't
// collide with a bare "1".
function coinWeight(name: string): string | null {
  const m = name.match(/\b(1\/20|1\/10|1\/4|1\/2|10|5|2|1)\s?oz\b/i);
  return m ? `${m[1]} oz` : null;
}

// Derive a finish label. Proof/Burnished take priority; everything else is BU.
function coinFinish(name: string): "Proof" | "Burnished" | "BU" {
  if (/\bproof\b/i.test(name)) return "Proof";
  if (/\bburnished\b/i.test(name)) return "Burnished";
  return "BU";
}

// Small structural chips shown on each card.
function coinChips(name: string): string[] {
  const chips: string[] = [];
  const w = coinWeight(name);
  if (w) chips.push(w);
  const f = coinFinish(name);
  if (f !== "BU") chips.push(f);
  else if (/\bBU\b/.test(name)) chips.push("BU");
  return chips;
}

function CoinCard({ coin }: { coin: CoinItem }) {
  const chips = coinChips(coin.name);
  return (
    <div className="group relative flex items-stretch gap-4 rounded-2xl border border-hairline bg-white p-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-gold)] sm:p-4">
      <Link
        href="/locations"
        aria-label={`Sell your ${coin.name} — find a location`}
        className="relative aspect-square w-32 shrink-0 self-center overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 sm:w-36"
      >
        <Image
          src={coin.image}
          alt={coin.name}
          fill
          quality={70}
          sizes="(min-width: 640px) 144px, 128px"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
        {chips.length > 0 && (
          <div className="mb-1.5 flex flex-wrap gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-gold-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-gold-700 ring-1 ring-gold-200/70"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-display text-sm font-bold leading-snug text-foreground sm:text-[0.9375rem]">
          {coin.name}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-3">
          <a
            href={PRIMARY_PHONE_HREF}
            className="inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2.25} />
            {PRIMARY_PHONE}
          </a>
          <Link
            href="/locations"
            aria-label={`Find a location to sell ${coin.name}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200/70 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950 group-hover:ring-gold-300"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// A single-select pill row. `value === null` means "All".
function PillRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  if (options.length < 2) return null;
  const base =
    "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400";
  const active = "bg-gold-500 text-ink-950 shadow-[var(--shadow-gold)]";
  const idle = "text-muted hover:bg-gold-50 hover:text-gold-700";
  return (
    // Full width on mobile (scrolls internally), auto on desktop — so a long
    // option set (e.g. many weights on the All-Silver page) never overflows the
    // screen. Horizontal scroll keeps the segmented look without wrapping.
    <div className="flex w-full min-w-0 flex-nowrap items-center gap-0.5 overflow-x-auto rounded-full border border-hairline bg-white p-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:w-auto sm:max-w-full">
      <span className="shrink-0 pl-2.5 pr-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-muted/80">
        {label}
      </span>
      <button type="button" onClick={() => onChange(null)} className={`${base} ${value === null ? active : idle}`}>
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`${base} ${value === opt ? active : idle}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function CoinListingGrid({ coins, label }: { coins: CoinItem[]; label: string }) {
  const [count, setCount] = useState(BATCH);
  const [query, setQuery] = useState("");
  const [weight, setWeight] = useState<string | null>(null);
  const [finish, setFinish] = useState<string | null>(null);

  // Filter options that actually exist in this listing.
  const weightOptions = useMemo(() => {
    const present = new Set(coins.map((c) => coinWeight(c.name)).filter(Boolean) as string[]);
    return WEIGHT_ORDER.filter((w) => present.has(w));
  }, [coins]);
  const finishOptions = useMemo(() => {
    const present = new Set(coins.map((c) => coinFinish(c.name)));
    return ["BU", "Proof", "Burnished"].filter((f) => present.has(f as "BU" | "Proof" | "Burnished"));
  }, [coins]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return coins.filter((c) => {
      if (weight && coinWeight(c.name) !== weight) return false;
      if (finish && coinFinish(c.name) !== finish) return false;
      if (q && !c.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [coins, query, weight, finish]);

  // Reset the reveal window whenever the filters change, without an effect:
  // detect the change during render (React re-renders immediately, no flicker).
  const filterKey = `${query}|${weight}|${finish}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (prevFilterKey !== filterKey) {
    setPrevFilterKey(filterKey);
    setCount(BATCH);
  }

  const shown = filtered.slice(0, count);
  const remaining = filtered.length - count;
  const hasFilter = query.trim() !== "" || weight !== null || finish !== null;

  return (
    <>
      {/* Filter toolbar — a slim single row that wraps on narrow screens */}
      <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-hairline pb-4">
        <div className="relative w-full sm:w-auto">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" strokeWidth={2.25} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${label}…`}
            aria-label={`Search ${label}`}
            className="h-8 w-full rounded-full border border-hairline bg-white pl-8.5 pr-3 text-xs text-foreground placeholder:text-muted focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40 sm:w-52 sm:focus:w-64 sm:transition-[width] sm:duration-200"
          />
        </div>
        <PillRow label="Weight" options={weightOptions} value={weight} onChange={setWeight} />
        <PillRow label="Finish" options={finishOptions} value={finish} onChange={setFinish} />
        <div className="flex w-full items-center justify-between gap-3 whitespace-nowrap pt-1 sm:ml-auto sm:w-auto sm:justify-end sm:pt-0">
          {hasFilter && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setWeight(null);
                setFinish(null);
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 transition-colors hover:text-gold-600"
            >
              <X className="h-3 w-3" strokeWidth={2.5} /> Clear
            </button>
          )}
          <p className="text-xs font-medium text-muted">
            <span className="font-bold text-foreground">{shown.length}</span> of{" "}
            <span className="font-bold text-foreground">{filtered.length}</span> {label} products
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-hairline bg-white/60 py-16 text-center text-muted">
          No {label} coins match your filters. <button type="button" onClick={() => { setQuery(""); setWeight(null); setFinish(null); }} className="font-semibold text-gold-700 underline-offset-2 hover:underline">Clear filters</button> to see all {coins.length}.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {shown.map((coin) => (
            <CoinCard key={coin.image} coin={coin} />
          ))}
        </div>
      )}

      {remaining > 0 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + BATCH * 2)}
            className="rounded-full border border-gold-300 bg-white px-8 py-3 font-display text-sm font-bold text-gold-700 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-[var(--shadow-gold)]"
          >
            Load more ({remaining} left)
          </button>
        </div>
      )}
    </>
  );
}
