"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Item = { slug: string; city: string; region: string };

/**
 * "Areas we also serve" chip list. As the number of city landing pages grows the
 * list gets long, so we cap it and reveal the rest behind a "Show N more" toggle
 * — with SEPARATE caps per breakpoint: `initialMobile` on phones (the stack gets
 * tall fast) and `initialDesktop` on sm+. Pass both = items.length to show all
 * with no toggle (e.g. the NoVA hub).
 */
export function CityChips({
  items,
  initialMobile = 5,
  initialDesktop = 13,
}: {
  items: Item[];
  initialMobile?: number;
  initialDesktop?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const total = items.length;
  const mobileHidden = Math.max(0, total - initialMobile);
  const desktopHidden = Math.max(0, total - initialDesktop);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((c, i) => {
          // When collapsed: hide past the desktop cap on all sizes, and hide the
          // mobile-cap..desktop-cap range on phones only.
          let vis = "";
          if (!expanded) {
            if (i >= initialDesktop) vis = "hidden";
            else if (i >= initialMobile) vis = "hidden sm:inline-flex";
          }
          return (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className={`rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50 ${vis}`}
            >
              Cash for gold in {c.city}, {c.region}
            </Link>
          );
        })}
      </div>
      {mobileHidden > 0 && (
        <div className={`mt-4 flex ${desktopHidden > 0 ? "" : "sm:hidden"}`}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-50/60 px-5 py-2.5 text-sm font-semibold text-gold-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-100 active:translate-y-0"
          >
            {expanded ? (
              "Show fewer areas"
            ) : (
              <>
                <span className="sm:hidden">Show {mobileHidden} more areas</span>
                <span className="hidden sm:inline">Show {desktopHidden} more areas</span>
              </>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}
