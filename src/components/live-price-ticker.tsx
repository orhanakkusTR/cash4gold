"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const METALS = [
  { key: "gold", nm: "Gold", fallback: 4180 },
  { key: "silver", nm: "Silver", fallback: 66 },
  { key: "platinum", nm: "Platinum", fallback: 1730 },
  { key: "palladium", nm: "Palladium", fallback: 1310 },
] as const;

const TROY_OZ_G = 31.1035;
const REFRESH_MS = 60000;
// First fetch is deferred to browser idle so it never competes with LCP.
const IDLE_FALLBACK_MS = 2500;

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

type Prices = Record<string, number>;

type PricesResponse = {
  prices?: Prices;
  live?: boolean;
};

export function LivePriceTicker() {
  const [unit, setUnit] = useState<"ozt" | "g">("ozt");
  const [data, setData] = useState<{ prices: Prices; prev: Prices }>(() => ({
    prices: Object.fromEntries(METALS.map((m) => [m.key, m.fallback])),
    prev: {},
  }));
  const [live, setLive] = useState(false);

  useEffect(() => {
    let active = true;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    // One same-origin call to our cached /api/prices route — not 4
    // cross-origin fetches per visitor (audit P1-13b).
    async function load() {
      try {
        const res = await fetch("/api/prices");
        if (!res.ok) throw new Error("bad");
        const json = (await res.json()) as PricesResponse;
        if (!active) return;
        const next = json.prices;
        if (next) {
          setData((d) => {
            const prices = { ...d.prices };
            const prev: Prices = {};
            METALS.forEach((m) => {
              const px = next[m.key];
              if (typeof px === "number" && px > 0) {
                prev[m.key] = d.prices[m.key];
                prices[m.key] = px;
              }
            });
            return { prices, prev };
          });
        }
        setLive(json.live === true);
      } catch {
        if (active) setLive(false);
      }
    }

    function start() {
      if (!active) return;
      load();
      intervalId = setInterval(load, REFRESH_MS);
    }

    // Defer the first fetch to idle time (fallback timer for Safari).
    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: IDLE_FALLBACK_MS });
    } else {
      timerId = setTimeout(start, IDLE_FALLBACK_MS);
    }

    return () => {
      active = false;
      if (intervalId) clearInterval(intervalId);
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  const quotes = METALS.map((m) => {
    const px = data.prices[m.key];
    const shown = unit === "g" ? px / TROY_OZ_G : px;
    const prev = data.prev[m.key];
    let dir: "up" | "down" | "flat" = "flat";
    let pct = 0;
    if (prev != null && prev !== px) {
      dir = px > prev ? "up" : "down";
      pct = (Math.abs(px - prev) / prev) * 100;
    }
    return { key: m.key, nm: m.nm, shown, dir, pct };
  });

  const renderQuotes = (copy: string) =>
    quotes.map((q) => (
      <span key={`${copy}-${q.key}`} className="flex items-center gap-2 whitespace-nowrap tabular-nums">
        <span className="text-[13px] font-semibold text-cream-100/55">{q.nm}</span>
        <span className="text-[14px] font-extrabold text-gold-200">{money(q.shown)}</span>
        <span className="text-[11px] text-cream-100/35">/{unit === "g" ? "g" : "oz"}</span>
        {q.dir === "flat" ? (
          <span className="text-[11px] text-cream-100/30">●</span>
        ) : (
          <span className={cn("inline-flex items-center gap-0.5 text-[11px] font-bold", q.dir === "up" ? "text-emerald-400" : "text-red-400")}>
            {q.dir === "up" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {q.pct.toFixed(2)}%
          </span>
        )}
      </span>
    ));

  return (
    <div className="fixed inset-x-0 top-0 z-[55] h-10 border-b border-white/10 bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950" role="region" aria-label="Live precious metal prices">
      <div className="container-page flex h-10 items-center gap-3">
        <div className="flex shrink-0 items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-gold-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="hidden sm:inline">Live Prices</span>
        </div>

        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
          <div className="flex w-max items-center gap-8 animate-[pxticker_38s_linear_infinite] group-hover:[animation-play-state:paused]">
            {renderQuotes("a")}
            {/* Visual duplicate for the seamless marquee loop — hidden from AT
                so screen readers don't hear every price twice. */}
            <span aria-hidden className="contents">{renderQuotes("b")}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex overflow-hidden rounded-md border border-white/15 text-[11px] font-bold">
            {(["ozt", "g"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                aria-pressed={unit === u}
                className={cn("px-2 py-1 transition-colors", unit === u ? "bg-gold-500/20 text-gold-200" : "text-cream-100/50 hover:text-cream-100")}
              >
                {u === "ozt" ? "oz" : "gram"}
              </button>
            ))}
          </div>
          {/* Static label — the old per-second "updated Ns ago" interval forced
              a full re-render every second forever (audit P1-13b). */}
          <span className="hidden whitespace-nowrap text-[11px] text-cream-100/35 lg:inline">
            {live ? "live spot · in-store offer varies" : "reference · in-store offer varies"}
          </span>
        </div>
      </div>
    </div>
  );
}
