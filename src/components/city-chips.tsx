"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Item = { slug: string; city: string; region: string };

/**
 * "Areas we also serve" chip list. As the number of city landing pages grows,
 * the vertical stack gets long on mobile — so on small screens we show the first
 * `initial` chips and collapse the rest behind a "Show N more" toggle. On sm+
 * the chips wrap horizontally and all are shown (no toggle needed).
 */
export function CityChips({ items, initial = 5 }: { items: Item[]; initial?: number }) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - initial;

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((c, i) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className={`rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50 ${
              !expanded && i >= initial ? "hidden sm:inline-flex" : ""
            }`}
          >
            Cash for gold in {c.city}, {c.region}
          </Link>
        ))}
      </div>
      {hiddenCount > 0 && (
        <div className="mt-4 flex sm:hidden">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-50/60 px-5 py-2.5 text-sm font-semibold text-gold-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-100 active:translate-y-0"
            aria-expanded={expanded}
          >
            {expanded ? "Show fewer areas" : `Show ${hiddenCount} more areas`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}
