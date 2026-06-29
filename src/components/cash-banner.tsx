"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { buttonClass } from "@/components/ui/button";
import { PRIMARY_PHONE, PRIMARY_PHONE_HREF, SHOW_CALCULATOR } from "@/data/business";

/** Cinematic mid-page banner: a gold coin morphs into a stack of cash. */
export function CashBanner() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // The background video is ~4.8MB. It sits below the fold, so don't fetch it
  // on first load (kills mobile LCP). Only mount the <video> once the banner
  // is about to enter the viewport; show the lightweight poster until then.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const showVideo = !reduce && inView;

  // iOS Safari won't autoplay a <video> that JS inserts after load unless we
  // (a) set the muted *property* (the React attr alone is unreliable) and
  // (b) explicitly call play(). Low Power Mode still blocks it — nothing we
  // can do there; the poster stays visible as the fallback.
  useEffect(() => {
    const v = videoRef.current;
    if (!showVideo || !v) return;
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => {});
  }, [showVideo]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-ink-950">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        {!showVideo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/videos/gold-to-cash-poster.jpg" alt="" className="h-full w-full object-cover" />
        ) : (
          <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/videos/gold-to-cash-poster.jpg">
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
            Walk out <span className="text-cash-shimmer">paid.</span>
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
              href={SHOW_CALCULATOR ? "/gold-calculator" : "/what-we-buy"}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-cream-50/25 px-8 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-200"
            >
              {SHOW_CALCULATOR ? "What's It Worth?" : "What We Buy"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
