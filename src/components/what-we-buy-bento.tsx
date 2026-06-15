import Link from "next/link";
import Image from "next/image";
import { Coins, Sparkles, Gem, CircleDollarSign, ArrowUpRight, ArrowRight, type LucideIcon } from "lucide-react";
import { CATEGORIES } from "@/data/business";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { Coins, Sparkles, Gem, CircleDollarSign };

// Bento spans across a 3-col grid:
// row 1 → precious-metals (2) + jewelry (1); row 2 → precious-stones (1) + coins (2).
const SPAN: Record<string, string> = {
  "precious-metals": "lg:col-span-2",
  jewelry: "lg:col-span-1",
  "precious-stones": "lg:col-span-1",
  coins: "lg:col-span-2",
};

export function WhatWeBuyBento() {
  return (
    <div className="grid auto-rows-[19rem] grid-cols-1 gap-5 sm:auto-rows-[23rem] lg:grid-cols-3">
      {CATEGORIES.map((c) => {
        const Icon = ICONS[c.icon] ?? Gem;
        const span = SPAN[c.slug] ?? "lg:col-span-1";
        return (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className={cn(
              "group relative isolate flex flex-col justify-end overflow-hidden rounded-[1.75rem] ring-1 ring-ink-950/5 transition-all duration-500 ease-out",
              "hover:-translate-y-1.5 hover:ring-2 hover:ring-gold-400/50 hover:shadow-[0_24px_60px_-20px_rgba(163,120,31,0.45)]",
              span,
            )}
          >
            {/* Full-bleed image */}
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes={span.includes("col-span-2") ? "(max-width:1024px) 100vw, 66vw" : "(max-width:1024px) 100vw, 33vw"}
              className="-z-20 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
            />
            {/* Legibility + premium gradients */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950/35 via-transparent to-transparent" />
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-gold-900/30 to-transparent" />
            {/* Diagonal shine sweep on hover */}
            <div className="pointer-events-none absolute inset-0 -z-10 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full" />

            {/* Top-right arrow badge */}
            <span className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cream-50 backdrop-blur-md transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-ink-950">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            </span>

            {/* Content */}
            <div className="relative p-6 sm:p-7">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-300/30 bg-white/10 text-gold-200 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <div className="mb-3 h-px w-10 bg-gold-400/70 transition-all duration-500 group-hover:w-16" />
              <h3 className="font-display text-2xl font-bold leading-tight text-cream-50 sm:text-[1.75rem]">{c.name}</h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream-100/75">{c.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
                Explore {c.name}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
