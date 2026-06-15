"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Expandable category description (jmbullion-style "Read more"). Collapsed it
 * clamps to a few lines with a fade; expanded it shows the full ~1000-char copy.
 * The fade matches the cream-100 section background it sits in.
 */
export function CategoryDescription({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      <div className="relative mt-4">
        <div className={cn("text-base leading-relaxed text-muted transition-[max-height] duration-500", open ? "max-h-[60rem]" : "max-h-[6.5rem] overflow-hidden")}>
          <p>{text}</p>
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
