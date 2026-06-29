"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { buttonClass } from "@/components/ui/button";
import { HeroVideoPlaylist } from "@/components/hero-video";
import { SITE, PRIMARY_PHONE, PRIMARY_PHONE_HREF, CATEGORIES } from "@/data/business";

const TRUST = ["Northern Virginia's #1 gold buyer", "15 years in business", "Paid before you leave"];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.26-2.09 3.58-5.17 3.58-8.87z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.27a12 12 0 0 0 0 10.78l4-3.1z" />
      <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.43-3.42C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.27 6.61l4 3.1C6.22 6.86 8.87 4.77 12 4.77z" />
    </svg>
  );
}

function TrustSeal({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
      animate={{ opacity: 1, scale: 1, rotate: -12 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-28 w-28 rounded-full border border-gold-400/40 bg-ink-950/35 backdrop-blur-md shadow-[0_8px_40px_rgba(212,169,66,0.25)]"
      >
        {/* rotating curved text ring */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full text-gold-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <path id="sealCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-current font-display text-[10.5px] font-semibold uppercase tracking-[0.18em]">
            <textPath href="#sealCircle" startOffset="0%">
              100% Trust Guarantee · Honest Offers ·
            </textPath>
          </text>
        </motion.svg>

        {/* center mark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <ShieldCheck className="h-6 w-6 text-gold-300" strokeWidth={1.75} />
          <span className="mt-0.5 font-display text-xl font-extrabold leading-none text-cream-50">100%</span>
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-cream-100/70">Trust</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Background playlist: logo reveal, store tour, in-store service, looped */}
      <div aria-hidden className="absolute inset-0">
        <HeroVideoPlaylist />
        {/* Cinematic dark grade (lighter - lets the footage show through) */}
        <div className="absolute inset-0 bg-ink-950/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/25" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent,rgba(10,8,7,0.20))]" />
        {/* subtle warm gold glow */}
        <div className="absolute left-1/2 top-[42%] h-[34rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,169,66,0.12),transparent_62%)] blur-2xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Rating badge */}
          <div style={{ animationDelay: "0.05s" }}
            className="hero-rise mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-cream-100/90 shadow-sm backdrop-blur-md">
            <GoogleG className="h-4 w-4" />
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />)}
            </span>
            <span className="font-semibold text-cream-50">{SITE.rating.value}</span>
            <span className="text-cream-100/50">·</span>
            {SITE.rating.count}+ Google reviews
          </div>

          {/* Headline - CSS fade-up so it paints immediately (good for LCP) */}
          <h1 className="mx-auto mt-7 max-w-5xl font-display text-[2.7rem] font-bold leading-[1.05] tracking-[-0.025em] text-cream-50 sm:text-5xl md:text-[3.6rem] [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
            <span className="hero-rise block md:whitespace-nowrap" style={{ animationDelay: "0.1s" }}>
              Gold, Silver, Diamonds &amp; More
            </span>
            <span className="hero-rise block font-extrabold text-gold-300 md:whitespace-nowrap" style={{ animationDelay: "0.18s" }}>
              You Get Paid Before You Leave
            </span>
          </h1>

          <p style={{ animationDelay: "0.26s" }}
            className="hero-rise mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-cream-100/80 [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
            Visit any of our 4 Northern Virginia locations. No appointment needed.
            <br />
            Walk in, get your offer, get paid on the spot.
          </p>

          <div style={{ animationDelay: "0.34s" }}
            className="hero-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${PRIMARY_PHONE_HREF}`} className={buttonClass("gold", "lg")}>
              <span className="relative z-10 inline-flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call {PRIMARY_PHONE}
              </span>
            </a>
            <a
              href="#quote"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-cream-50/25 px-8 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-white/5 hover:text-gold-200"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Trust line with dot separators */}
          <div style={{ animationDelay: "0.42s" }}
            className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-cream-100/70">
            {TRUST.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-4">
                {i > 0 && <span aria-hidden className="hidden h-1 w-1 rounded-full bg-gold-400/70 sm:inline-block" />}
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-gold-400/80 text-gold-400" /> {t}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Find a location CTA */}
        <div className="relative mt-12 flex justify-center">
          <div className="hero-rise" style={{ animationDelay: "0.5s" }}>
            <Link
              href="/locations"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-cream-50/25 px-8 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-white/5 hover:text-gold-200"
            >
              📍 Find a Location
            </Link>
          </div>
          <TrustSeal className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:block lg:right-4 xl:right-12" />
        </div>

        {/* Category quick-links */}
        <div className="hero-rise mt-8" style={{ animationDelay: "0.58s" }}>
          <div className="mx-auto mb-6 flex max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream-100/55">What We Buy</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}`}
                className="group flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white/10"
              >
                <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-inset ring-white/20 transition-all duration-300 group-hover:ring-gold-400/60">
                  <Image src={c.image} alt="" fill sizes="36px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </span>
                <span className="text-sm font-semibold text-cream-100/85 transition-colors group-hover:text-cream-50">{c.name}</span>
                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 text-cream-100/30 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
