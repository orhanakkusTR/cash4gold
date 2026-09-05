"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type RichLink = { text: string; href: string };

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
  "Annandale", "Manassas", "Chantilly", "Vienna/Tysons",
];

type Range = { start: number; end: number; node: React.ReactNode };

/**
 * Splits one long description into readable paragraphs. Honors explicit blank
 * lines when present; otherwise groups whole sentences into ~2–3-sentence
 * blocks so a wall of text becomes scannable. Sentence splitting keys on a
 * period followed by whitespace, so decimals like "1.5 carats" stay intact.
 */
function toParagraphs(text: string): string[] {
  const trimmed = text.trim();
  if (/\n\s*\n/.test(trimmed)) return trimmed.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  const sentences = trimmed.split(/(?<=\.)\s+/);
  const paras: string[] = [];
  let cur = "";
  for (const s of sentences) {
    cur = cur ? `${cur} ${s}` : s;
    if (cur.length >= 260) { paras.push(cur); cur = ""; }
  }
  if (cur) {
    // Fold a short trailing remainder into the previous paragraph.
    if (paras.length && cur.length < 130) paras[paras.length - 1] += ` ${cur}`;
    else paras.push(cur);
  }
  return paras.length ? paras : [trimmed];
}

/**
 * Renders one paragraph with two overlays: internal links (SEO) and bolded
 * emphasis phrases. Links win any overlap. A shared `used` set makes each phrase
 * link/bold only its FIRST occurrence across the whole description, even though
 * paragraphs are rendered independently. Phrases absent from the text are
 * skipped (we never inject words that aren't written).
 */
function renderRichText(text: string, keywords: string[], links: RichLink[], used: Set<string>) {
  const ranges: Range[] = [];
  const claim = (start: number, end: number, node: React.ReactNode) => {
    if (start === -1) return;
    if (ranges.some((r) => start < r.end && end > r.start)) return; // skip overlaps
    ranges.push({ start, end, node });
  };

  // Internal links take priority.
  for (const l of links) {
    if (used.has(`l:${l.text.toLowerCase()}`)) continue;
    const idx = text.toLowerCase().indexOf(l.text.toLowerCase());
    if (idx === -1) continue;
    used.add(`l:${l.text.toLowerCase()}`);
    const end = idx + l.text.length;
    claim(idx, end, (
      <Link href={l.href} className="font-semibold text-gold-700 underline decoration-gold-300 underline-offset-2 transition-colors hover:text-gold-800">
        {text.slice(idx, end)}
      </Link>
    ));
  }

  // Then bold the emphasis/keyword phrases in whatever text is left.
  const phrases = [...new Set([...keywords, ...EMPHASIS_TERMS])].sort((a, b) => b.length - a.length);
  for (const kw of phrases) {
    if (used.has(`k:${kw.toLowerCase()}`)) continue;
    const idx = text.toLowerCase().indexOf(kw.toLowerCase());
    if (idx === -1) continue;
    used.add(`k:${kw.toLowerCase()}`);
    claim(idx, idx + kw.length, <strong className="font-semibold text-foreground">{text.slice(idx, idx + kw.length)}</strong>);
  }

  if (!ranges.length) return text;
  ranges.sort((a, b) => a.start - b.start);
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, i) => {
    if (r.start > cursor) nodes.push(text.slice(cursor, r.start));
    nodes.push(<Fragment key={i}>{r.node}</Fragment>);
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
export function CategoryDescription({ title, text, keywords, links }: { title: string; text: string; keywords?: string[]; links?: RichLink[] }) {
  const [open, setOpen] = useState(false);
  const used = new Set<string>();
  const paragraphs = toParagraphs(text);
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h2>
      <div className="relative mt-4">
        <div className={cn("space-y-4 text-base leading-relaxed text-muted transition-[max-height] duration-500", open ? "max-h-[80rem]" : "max-h-[6.5rem] overflow-hidden")}>
          {paragraphs.map((para, i) => (
            <p key={i}>{renderRichText(para, keywords ?? [], links ?? [], used)}</p>
          ))}
        </div>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-cream-100 to-transparent" />
        )}
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-800"
        aria-expanded={open}
      >
        {open ? "Read less" : "Read more"}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
    </div>
  );
}
