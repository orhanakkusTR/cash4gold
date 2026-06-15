"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Important phrases bolded across every description in addition to each page's
 * own keyword: the local-SEO signals (Northern Virginia + the four cities) and
 * the trust/value terms (spot price, free appraisal, instant payout). Metal-specific
 * spot-price variants are listed first so they win over the bare "spot price".
 */
const EMPHASIS_TERMS = [
  "Northern Virginia",
  "gold spot price", "silver spot price", "platinum spot price", "palladium spot price",
  "live spot price", "current spot price", "spot price",
  "free appraisal", "instant payout", "no obligation",
  "Annandale", "Manassas", "Chantilly", "Vienna/McLean",
];

/**
 * Bolds the first verbatim occurrence of each target phrase in the copy. Phrases
 * that don't appear in the text are skipped (we never inject them), and longer
 * phrases are matched first so they win over overlapping shorter ones.
 */
function emphasizeKeywords(text: string, keywords: string[] = []) {
  const ranges: { start: number; end: number }[] = [];
  const phrases = [...new Set([...keywords, ...EMPHASIS_TERMS])];
  for (const kw of phrases.sort((a, b) => b.length - a.length)) {
    const idx = text.toLowerCase().indexOf(kw.toLowerCase());
    if (idx === -1) continue;
    const end = idx + kw.length;
    if (ranges.some((r) => idx < r.end && end > r.start)) continue; // skip overlaps
    ranges.push({ start: idx, end });
  }
  if (!ranges.length) return text;
  ranges.sort((a, b) => a.start - b.start);
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, i) => {
    if (r.start > cursor) nodes.push(text.slice(cursor, r.start));
    nodes.push(<strong key={i} className="font-semibold text-foreground">{text.slice(r.start, r.end)}</strong>);
    cursor = r.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

/**
 * Expandable category description (jmbullion-style "Read more"). Collapsed it
 * clamps to a few lines with a fade; expanded it shows the full ~1000-char copy.
 * The fade matches the cream-100 section background it sits in.
 */
export function CategoryDescription({ title, text, keywords }: { title: string; text: string; keywords?: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      <div className="relative mt-4">
        <div className={cn("text-base leading-relaxed text-muted transition-[max-height] duration-500", open ? "max-h-[60rem]" : "max-h-[6.5rem] overflow-hidden")}>
          <p>{emphasizeKeywords(text, keywords)}</p>
        </div>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-cream-100 to-transparent" />
        )}
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
        aria-expanded={open}
      >
        {open ? "Read less" : "Read more"}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
    </div>
  );
}
