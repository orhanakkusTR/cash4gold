import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { HeroVideoPlaylist } from "@/components/hero-video";
import { TrustSeal } from "@/components/hero-trust-seal";
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
              className="group relative inline-flex h-14 w-56 items-center justify-center gap-2 rounded-full text-base font-semibold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-gold-200"
            >
              {/* Outline drawn as an SVG with a real gap at the top-center, so the
                  border line is literally interrupted by the "+4 Locations" label
                  and continues on both sides. */}
              <svg
                viewBox="0 0 288 56"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <path
                  d="M206 1 L260 1 A27 27 0 0 1 260 55 L28 55 A27 27 0 0 1 28 1 L82 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="stroke-[#ffffff40] transition-colors duration-300 group-hover:stroke-[#e9bd3c]"
                />
              </svg>
              <span className="relative inline-flex items-center gap-2">📍 Find a Location</span>
              {/* the label that fills the gap in the outline */}
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-cream-50/75">
                +4 Locations
              </span>
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
                  <Image src={c.image} alt={`Sell ${c.name} in Northern Virginia`} fill sizes="36px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
