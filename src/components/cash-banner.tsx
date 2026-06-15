"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { buttonClass } from "@/components/ui/button";
import { PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";

/** Cinematic mid-page banner: a gold coin morphs into a stack of cash. */
export function CashBanner() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        {reduce ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/videos/gold-to-cash-poster.jpg" alt="" className="h-full w-full object-cover" />
        ) : (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none" poster="/videos/gold-to-cash-poster.jpg">
            <source src="/videos/gold-to-cash.mp4" type="video/mp4" />
          </video>
        )}
        {/* Left-weighted scrim so copy stays readable while the coin/cash shows on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-ink-950/40" />
      </div>

      <div className="container-page relative py-24 sm:py-32 lg:py-40">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="h-px w-7 bg-gold-400" /> From Gold to Cash
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-cream-50 sm:text-4xl md:text-[2.9rem]">
            Walk in with gold.
            <br />
            Walk out with <span className="text-cash-shimmer">cash.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream-100/75">
            Free appraisal, a fair spot-price offer, and instant payment, the same day you visit.
            No mailing, no waiting, no gimmicks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${PRIMARY_PHONE_HREF}`} className={buttonClass("gold", "lg")}>
              <span className="relative z-10 inline-flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call {PRIMARY_PHONE}
              </span>
            </a>
            <Link
              href="/gold-calculator"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-cream-50/25 px-8 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-200"
            >
              What&apos;s It Worth? <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
