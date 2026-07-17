import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Navigation,
  Star,
  BadgeCheck,
  Banknote,
  ShieldCheck,
  Eye,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { LOCATIONS, PRIMARY_PHONE, PRIMARY_PHONE_HREF, SITE } from "@/data/business";
import { Reveal } from "@/components/reveal";
import { TrustStats } from "@/components/trust-stats";
import { GoogleG } from "@/components/google-rating";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { CredentialsStrip } from "@/components/credentials-strip";
import { OpenStatus } from "@/components/open-status";
import { HeroVideoBg } from "@/components/hero-video-bg";

// AD LANDING PAGE — a standalone, conversion-focused page used as the
// destination URL in paid ads (OpenAI Ads, etc.). Every "Call" button is a
// tel: link, so it fires the OpenAI Pixel `phone` conversion via the global
// <Analytics> click handler. Kept OUT of the sitemap and noindex'd so it never
// competes with our organic pages or gets discovered outside the ad.
export const metadata: Metadata = {
  title: "Sell Gold, Silver & Jewelry for Instant Payout — Northern Virginia",
  description:
    "Get instant payout for gold, silver, jewelry, diamonds, coins & luxury watches at 4 Northern Virginia locations. Free appraisal, fair spot-price offers, paid the same visit. 4.9★ / 500+ reviews.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/landing-page" },
};

const VALUE_PROPS = [
  { Icon: Banknote, label: "Instant payout, same visit" },
  { Icon: BadgeCheck, label: "Free appraisal, no obligation" },
  { Icon: Eye, label: "Tested in front of you" },
];

const STEPS = [
  {
    Icon: MapPin,
    title: "Bring your items in",
    body: "Walk into any of our 4 Northern Virginia stores with gold, silver, diamonds, coins or watches — no appointment needed.",
  },
  {
    Icon: Eye,
    title: "Watch the free appraisal",
    body: "We test and weigh everything in front of you on a calibrated scale, priced against the live market — every number explained.",
  },
  {
    Icon: Banknote,
    title: "Get paid on the spot",
    body: "Like the offer? Walk out with instant payout the same visit. Don't like it? Keep your items — there's never any pressure.",
  },
];

// "What Can You Sell?" tiles — custom-designed square images (each carries its
// own baked-in "SELL X" badge, so no title/caption is added below). The gold
// tile leads as a wide banner on mobile, then a 2×2 of the rest; all five sit
// in one row on desktop. Whole tile scrolls to the locations/call section.
const SELL_ITEMS = [
  // Every tile is a full, un-cropped square (source images are 1:1). On the
  // 6-col desktop grid these six lay out 3 on top, 3 below; mobile is a clean
  // 2×3.
  { img: "/landing/sell/gold.webp", alt: "Sell gold jewelry, chains, rings and coins for instant payout", cls: "aspect-square lg:col-span-2" },
  { img: "/landing/sell/silver.webp", alt: "Sell silver jewelry, flatware and coins", cls: "aspect-square lg:col-span-2" },
  { img: "/landing/sell/scrap-gold.webp", alt: "Sell scrap gold — broken, bent and mismatched pieces", cls: "aspect-square lg:col-span-2" },
  { img: "/landing/sell/coins.webp", alt: "Sell gold and silver coins and bullion", cls: "aspect-square lg:col-span-2" },
  { img: "/landing/sell/sterling-silver-sets.webp", alt: "Sell sterling silver sets, tea sets and flatware", cls: "aspect-square lg:col-span-2" },
  { img: "/landing/sell/bullion.webp", alt: "Sell gold and silver bullion bars", cls: "aspect-square lg:col-span-2" },
];

// Instagram-style feed above the footer — custom-designed square IG posts,
// shown as a static near-full-width grid (no links, no hover, no icons).
const IG_IMAGES = ["9", "1", "2", "7", "16", "24", "36", "12", "15", "19"].map(
  (n) => `/landing/ig/${n}.webp`,
);

export default function AdLandingPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-ink-950 pt-32 pb-14 sm:pt-40 sm:pb-16">
        <HeroVideoBg
          src="/videos/gold-to-cash.mp4"
          poster="/videos/gold-to-cash-poster.jpg"
          alt="Gold jewelry and coins being appraised and paid out"
        />
        {/* darkening + gold glow over the video for text legibility */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/92" />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/15 blur-[130px]" />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" /> 4 stores across Northern Virginia
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-6xl">
                Turn gold, silver &amp; jewelry into{" "}
                <span className="text-gold-shimmer pb-[0.12em]">instant payout</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/80">
                Free, honest appraisals at the live market price — paid the same
                visit. Bring one ring or an entire estate. You only sell if you
                love the offer.
              </p>
            </Reveal>

            {/* Primary CTAs — the phone link fires the pixel `phone` conversion */}
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${PRIMARY_PHONE_HREF}`}
                  className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 text-base font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Phone className="h-5 w-5" /> Call {PRIMARY_PHONE}
                </a>
                <Link
                  href="#locations"
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-cream-50/25 px-8 text-base font-semibold text-cream-50 transition-colors hover:border-gold-400/60 hover:bg-white/5 sm:w-auto"
                >
                  Find nearest store
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            {/* Compact Google-branded rating pill — the credibility anchor */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex justify-center">
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.rating.value} stars from ${SITE.rating.count}+ Google reviews — read them on Google`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/15"
                >
                  <GoogleG className="h-5 w-5 shrink-0" />
                  <span className="font-display text-base font-bold leading-none text-cream-50">
                    {SITE.rating.value}
                  </span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </span>
                  <span className="text-sm text-cream-100/70">{SITE.rating.count}+ reviews</span>
                </a>
              </div>
            </Reveal>

            {/* Value-prop chips */}
            <Reveal delay={0.25}>
              <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
                {VALUE_PROPS.map(({ Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/85">
                    <Icon className="h-4 w-4 text-gold-400" /> {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STATS ---------- */}
      <TrustStats />

      {/* ---------- WHAT CAN YOU SELL (square catalog grid) ---------- */}
      <section className="bg-white">
        <div className="container-page py-12 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Top dollar, paid on the spot
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              What Can You Sell?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-muted">
              From a single gold ring to an entire estate — bring it in for a
              free, no-obligation appraisal.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {SELL_ITEMS.map((it) => (
              <Link
                key={it.img}
                href="#locations"
                className={`group relative block overflow-hidden rounded-2xl ring-1 ring-hairline shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:ring-gold-300 hover:shadow-[var(--shadow-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 ${it.cls}`}
              >
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  quality={75}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold text-cream-50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  Sell yours <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-gradient-to-b from-white to-gold-50/40">
        <div className="container-page pt-12 pb-12 sm:pt-16 sm:pb-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> No appointment needed
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Paid in 3 simple steps
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-muted">
              No mailing valuables away, no waiting for a check. Everything
              happens in person, in front of you.
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
            {STEPS.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <li className="relative h-full rounded-3xl border border-hairline bg-white p-7 shadow-[var(--shadow-card)]">
                  <span className="absolute -top-4 right-6 font-display text-7xl font-extrabold text-gold-shimmer">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/70">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- SOCIAL PROOF ---------- */}
      <section className="bg-white pt-10 pb-10 sm:pt-12 sm:pb-12">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Real customer reviews
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Northern Virginia&apos;s trusted buyer since 2010
            </h2>
          </div>
        </div>
      </section>
      <TestimonialsMarquee />

      {/* ---------- LOCATIONS ---------- */}
      <section id="locations" className="scroll-mt-24 bg-gradient-to-b from-white to-gold-50/40">
        <div className="container-page py-12 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Open 7 days a week
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Call your nearest store
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-muted">
              Four convenient locations across Northern Virginia. Tap to call and
              get a free quote in minutes.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-foreground">{l.city}</h3>
                    <OpenStatus hours={l.hours} compact className="shrink-0" />
                  </div>
                  <p className="mt-2 flex items-start gap-1.5 text-sm text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <span>
                      {l.street}, {l.city}, {l.region} {l.postalCode}
                    </span>
                  </p>

                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={`tel:${l.phoneHref}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.5} /> Call {l.phone}
                    </a>
                    <a
                      href={l.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                    >
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Reassurance line */}
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
            <ShieldCheck className="mr-1.5 inline-block h-4 w-4 -translate-y-px text-gold-500" aria-hidden />
            Bring a valid photo ID — Virginia law requires it for every purchase.
            Must be 18+.
          </p>
        </div>
      </section>

      {/* ---------- CREDENTIALS ---------- */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <CredentialsStrip />
        </div>
      </section>

      {/* ---------- FINAL CTA (bespoke, phone-forward) ---------- */}
      <section className="container-page py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-ink-950 px-6 py-12 shadow-[var(--shadow-card)] ring-1 ring-gold-500/25 sm:px-12 sm:py-14">
          {/* ambient gold glow + hairline accents */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold-600/15 blur-[100px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* Left — the message */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                <span className="h-px w-6 bg-gold-400" /> Free appraisal · No obligation
              </span>
              <h2 className="mx-auto mt-4 max-w-md text-balance font-display text-3xl font-extrabold leading-tight text-cream-50 sm:text-4xl lg:mx-0">
                Find out what your valuables are worth
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty text-cream-100/70 lg:mx-0">
                It&apos;s free to check and takes minutes. You only sell if you love
                the offer — no pressure, ever.
              </p>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                <li className="inline-flex items-center gap-1.5 text-sm font-medium text-cream-100/85">
                  <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> 4.9★ · 500+ reviews
                </li>
                <li className="inline-flex items-center gap-1.5 text-sm font-medium text-cream-100/85">
                  <Banknote className="h-4 w-4 text-gold-400" /> Paid the same visit
                </li>
              </ul>
            </div>

            {/* Right — the call card */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                Call now — talk to a real buyer
              </p>
              <a
                href={`tel:${PRIMARY_PHONE_HREF}`}
                className="mt-3 block font-display text-4xl font-extrabold tracking-tight text-gold-shimmer sm:text-5xl"
              >
                {PRIMARY_PHONE}
              </a>
              <a
                href={`tel:${PRIMARY_PHONE_HREF}`}
                className="group relative mt-6 inline-flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 text-base font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/45 before:to-transparent before:transition-transform before:duration-[900ms] before:ease-out hover:before:translate-x-[130%]"
              >
                <span className="relative z-10 inline-flex items-center gap-2.5">
                  <Phone className="h-5 w-5" strokeWidth={2.5} /> Call Chantilly now
                </span>
              </a>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-cream-100/60">
                <Clock className="h-3.5 w-3.5 text-gold-400" />
                Open 7 days a week · 3 more NoVA locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INSTAGRAM GALLERY (static; edge-to-edge on mobile, slight
           inset on desktop; flush with footer) ---------- */}
      <section className="bg-white pt-2 sm:px-3 sm:pt-4 sm:pb-3">
        <div className="grid grid-cols-2 gap-0 sm:gap-1.5 lg:grid-cols-5">
          {IG_IMAGES.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden sm:rounded-sm">
              <Image
                src={src}
                alt=""
                fill
                quality={75}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
