"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PRESETS = [
  { key: "today", label: "Today" },
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "90d", label: "90 days" },
  { key: "all", label: "All time" },
] as const;

// Date filter for the dashboard. Presets are resolved server-side (in Eastern
// store time) by passing ?range=…; a custom span passes ?from=&to=. We never
// compute dates on the client to avoid the visitor's timezone skewing results.
export function RangeFilter() {
  const router = useRouter();
  const sp = useSearchParams();

  const from = sp.get("from") ?? "";
  const to = sp.get("to") ?? "";
  const isCustom = Boolean(from && to);
  const activeRange = isCustom ? "" : (sp.get("range") ?? "30d");

  const [cFrom, setCFrom] = useState(from);
  const [cTo, setCTo] = useState(to);

  function go(params: Record<string, string>) {
    const q = new URLSearchParams(params).toString();
    router.push(`/admin-adam${q ? `?${q}` : ""}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex flex-wrap gap-1 rounded-full border border-cream-50/10 bg-ink-900/50 p-1">
        {PRESETS.map((p) => (
          <button
            key={p.key}
            onClick={() => go({ range: p.key })}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              activeRange === p.key
                ? "bg-gold-500 text-ink-950"
                : "text-cream-100/70 hover:text-cream-50"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div
        className={`flex items-center gap-1.5 rounded-full border bg-ink-900/50 px-2 py-1 ${
          isCustom ? "border-gold-500/60" : "border-cream-50/10"
        }`}
      >
        <input
          type="date"
          value={cFrom}
          max={cTo || undefined}
          onChange={(e) => setCFrom(e.target.value)}
          className="rounded-md bg-transparent px-1.5 py-1 text-sm text-cream-50 [color-scheme:dark] outline-none"
        />
        <span className="text-cream-100/40">→</span>
        <input
          type="date"
          value={cTo}
          min={cFrom || undefined}
          onChange={(e) => setCTo(e.target.value)}
          className="rounded-md bg-transparent px-1.5 py-1 text-sm text-cream-50 [color-scheme:dark] outline-none"
        />
        <button
          onClick={() => cFrom && cTo && go({ from: cFrom, to: cTo })}
          disabled={!cFrom || !cTo}
          className="rounded-full bg-cream-50/10 px-3 py-1 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50/20 disabled:opacity-40"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
