"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const METALS = [
  { key: "gold", sym: "XAU", nm: "Gold", fallback: 4180 },
  { key: "silver", sym: "XAG", nm: "Silver", fallback: 66 },
  { key: "platinum", sym: "XPT", nm: "Platinum", fallback: 1730 },
  { key: "palladium", sym: "XPD", nm: "Palladium", fallback: 1310 },
] as const;

const TROY_OZ_G = 31.1035;
const REFRESH_MS = 60000;

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

type Prices = Record<string, number>;

export function LivePriceTicker() {
  const [unit, setUnit] = useState<"ozt" | "g">("ozt");
  const [data, setData] = useState<{ prices: Prices; prev: Prices }>(() => ({
    prices: Object.fromEntries(METALS.map((m) => [m.key, m.fallback])),
    prev: {},
  }));
  const [live, setLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<number | null>(null);
  const [ago, setAgo] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await Promise.all(
          METALS.map((m) =>
            fetch(`https://api.gold-api.com/price/${m.sym}`).then((r) => {
              if (!r.ok) throw new Error("bad");
              return r.json();
            }),
          ),
        );
        if (!active) return;
        setData((d) => {
          const prices = { ...d.prices };
          const prev: Prices = {};
          METALS.forEach((m, i) => {
            const px = res[i]?.price;
            if (px > 0) {
              prev[m.key] = d.prices[m.key];
              prices[m.key] = px;
            }
          });
          return { prices, prev };
        });
        setLive(true);
      } catch {
        if (active) setLive(false);
      }
      if (active) setUpdatedAt(Date.now());
    }
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (!updatedAt) return;
    const t = setInterval(() => {
      const s = Math.round((Date.now() - updatedAt) / 1000);
      setAgo(live ? (s < 5 ? "updated just now" : `updated ${s}s ago`) : "reference (feed offline)");
    }, 1000);
    return () => clearInterval(t);
  }, [updatedAt, live]);

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
            {renderQuotes("b")}
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
          <span className="hidden whitespace-nowrap text-[11px] text-cream-100/35 lg:inline">{ago || "spot · in-store offer varies"}</span>
        </div>
      </div>
    </div>
  );
}
