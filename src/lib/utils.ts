import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. Required by Aceternity / Magic UI components. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Map a category/subcategory name to a metal-appropriate accent so the hero
 * glow and title shimmer match the material (gold pages glow gold, silver pages
 * glow cool steel, etc.) instead of every page reading as gold. `glow` is a
 * Tailwind bg color for the ambient hero blur; `shimmer` is a text utility from
 * globals.css. Falls back to gold for mixed/unmatched pages.
 */
export function metalTone(name: string): { glow: string; shimmer: string } {
  const n = name.toLowerCase();
  if (n.includes("silver")) return { glow: "bg-slate-300/15", shimmer: "text-silver-shimmer" };
  if (n.includes("platinum") || n.includes("palladium")) return { glow: "bg-zinc-300/14", shimmer: "text-silver-shimmer" };
  if (n.includes("diamond") || n.includes("stone") || n.includes("gem")) return { glow: "bg-violet-300/14", shimmer: "text-diamond-shimmer" };
  return { glow: "bg-gold-500/12", shimmer: "text-gold-shimmer" };
}

/**
 * Placeholder ~1000-char category description until real SEO copy is written
 * (use the data's longDescription when present). Name-templated so it reads
 * naturally and doubles as a first draft.
 */
export function placeholderDescription(name: string): string {
  const n = name.toLowerCase();
  return `Whether you are buying or selling ${n}, Cash for Gold VA makes it simple, transparent, and built around getting you a fair price the same day you visit. ${name} comes in many forms, conditions, and qualities, and our trained specialists evaluate each item on its own merits, testing purity, confirming weight on calibrated scales, and recognizing any collectible, designer, or numismatic premium right in front of you. Every offer is based on the live market price, so you always understand exactly how we reached the number, with no mail-in delays, hidden deductions, or high-pressure sales tactics. Whether you are parting with a single piece, selling an entire inherited collection, or looking to add to your own, the process is the same: visit any of our four Northern Virginia locations in Annandale, Manassas, Chantilly, or Vienna/McLean, let our experts help you on the spot, and walk out with instant payout or exactly what you came for. Not sure what you have or what it might be worth? That is exactly what our free, no-obligation appraisals are for, so stop by any location and our team will be happy to take a look and answer your questions.`;
}

/** Format an ISO date (YYYY-MM-DD) as e.g. "June 8, 2025". */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Rough reading time in minutes from a body string (~200 wpm, min 1). */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatHours(open: string, close: string | null): string {
  if (!close) return "Closed";
  const to12 = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hr = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${hr}${period}` : `${hr}:${String(m).padStart(2, "0")}${period}`;
  };
  return `${to12(open)} – ${to12(close)}`;
}
