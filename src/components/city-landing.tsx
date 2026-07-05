import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Navigation,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Star,
  BadgeCheck,
  Banknote,
  PackageOpen,
  Eye,
  HandCoins,
  Mailbox,
} from "lucide-react";
import { LOCATIONS } from "@/data/business";
import { getPost } from "@/data/blog";
import type { CityLanding as CityLandingData } from "@/data/city-landings";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustStats } from "@/components/trust-stats";
import { WhatWeBuyGrid } from "@/components/what-we-buy-grid";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { GoogleRatingSummary } from "@/components/google-rating";
import { CredentialsStrip } from "@/components/credentials-strip";
import { OpenStatus } from "@/components/open-status";
import { CtaBand, Prose } from "@/components/page-parts";
import { ButtonLink } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

const paras = (text: string) => text.split("\n\n").filter(Boolean);

// Render inline **bold** markers in body copy as <strong> (Prose styles it dark).
function withBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
    seg.startsWith("**") && seg.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">{seg.slice(2, -2)}</strong>
    ) : (
      seg
    ),
  );
}

const VALUE_PROPS = [
  { icon: BadgeCheck, label: "Best value, tied to the live price" },
  { icon: Banknote, label: "Instant cash, paid the same visit" },
  { icon: PackageOpen, label: "We buy gold, silver, diamonds, watches & coins" },
  { icon: Star, label: "4.9★ across 500+ Google reviews" },
];

const WHY_LOCAL = [
  { icon: Eye, title: "You watch every step", body: "Your items are tested and weighed in front of you on a calibrated scale — never in a back room." },
  { icon: HandCoins, title: "Keep it until you agree", body: "You hold your gold until you accept a number, then walk out with cash the same visit. No obligation." },
  { icon: Mailbox, title: "No mailing valuables away", body: "Mail-in buyers quote you only after your gold has shipped. In person, nothing leaves your sight." },
];

export function CityLanding({ landing }: { landing: CityLandingData }) {
  const stores = landing.nearest
    .map((n) => {
      const store = LOCATIONS.find((l) => l.slug === n.slug);
      return store ? { ...n, store } : null;
    })
    .filter(Boolean) as { slug: string; drive: string; store: (typeof LOCATIONS)[number] }[];

  const primary = stores[0];
  const secondary = stores[1];
  const relatedPosts = landing.relatedPosts.map(getPost).filter(Boolean);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: `${landing.city}, ${landing.region}`, href: `/${landing.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FaqJsonLd faqs={landing.faqs} />

      {/* 1 · Hero — bespoke, clones PageHero DNA + a conversion action */}
      <section className="relative overflow-hidden bg-ink-950 pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-gold-500/12 blur-[120px]" />
        </div>
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream-100/50">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-gold-200">{c.name}</Link>
                  ) : (
                    <span className="text-cream-100/80">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: headline + primary CTA */}
            <Reveal>
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                <span className="h-px w-6 bg-gold-400" /> Serving {landing.city}, {landing.region}
              </span>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-5xl">
                {landing.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-cream-100/75">
                {landing.heroSubtitle}
              </p>

              {primary && (
                <>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${primary.store.phoneHref}`}
                      className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
                    >
                      <Phone className="h-5 w-5" /> Call {primary.store.phone}
                    </a>
                    <a
                      href={primary.store.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-cream-50/25 px-8 font-semibold text-cream-50 transition-colors hover:border-gold-400/60 hover:bg-white/5"
                    >
                      <Navigation className="h-4 w-4" /> Get Directions
                    </a>
                  </div>
                  <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-cream-100/60">
                    <OpenStatus hours={primary.store.hours} tone="light" compact />
                    <span aria-hidden>·</span>
                    <span>{primary.store.city} — closest to {landing.city}</span>
                  </p>
                </>
              )}
            </Reveal>

            {/* Right: nearest-store teaser card */}
            {primary && (
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-gold-500/25 backdrop-blur">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                    <MapPin className="h-4 w-4" /> Nearest store
                  </span>
                  <p className="mt-3 font-display text-2xl font-semibold text-cream-50">{primary.store.city}</p>
                  <p className="mt-1 text-sm text-cream-100/70">
                    {primary.store.street}, {primary.store.city}, {primary.store.region} {primary.store.postalCode}
                  </p>
                  <div className="mt-4">
                    <OpenStatus hours={primary.store.hours} tone="light" />
                  </div>
                  <a
                    href="#nearest"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                  >
                    See full details <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 2 · Intro + value props, then TrustStats */}
      <section className="pt-12 pb-6 sm:pt-14">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <Prose>
                {paras(landing.intro).map((p, i) => (
                  <p key={i}>{withBold(p)}</p>
                ))}
              </Prose>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-4 rounded-2xl border border-hairline bg-cream-50 p-6 shadow-[var(--shadow-card)]">
                {VALUE_PROPS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-700 ring-1 ring-gold-200/70">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pt-1 text-sm font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-10">
          <TrustStats />
        </div>
      </section>

      {/* 3 · Nearest locations — conversion centerpiece */}
      <section id="nearest" className="scroll-mt-24 bg-cream-100 py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your Closest Stores"
            title={<>Two locations minutes from <span className="font-extrabold">{landing.city}</span></>}
            description={landing.nearestIntro}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* Primary (closest) — hero card */}
            {primary && (
              <Reveal>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)] ring-1 ring-hairline sm:flex-row">
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:w-1/2">
                    <Image
                      src={primary.store.image}
                      alt={`Cash for Gold VA storefront in ${primary.store.city}, VA`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink-950 shadow-[var(--shadow-gold)]">
                      <MapPin className="h-3.5 w-3.5" /> Closest
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">{primary.store.city}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {primary.store.street}, {primary.store.city}, {primary.store.region} {primary.store.postalCode}
                      </p>
                      <p className="mt-1 text-sm text-muted">Drive: {primary.drive}.</p>
                    </div>
                    <OpenStatus hours={primary.store.hours} tone="dark" />
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 ring-1 ring-gold-200/70">
                        <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> 4.9 · 500+ reviews
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 ring-1 ring-gold-200/70">
                        <Banknote className="h-3.5 w-3.5" /> Instant cash payout
                      </span>
                    </div>
                    <div className="mt-auto grid gap-3 sm:grid-cols-2">
                      <a
                        href={`tel:${primary.store.phoneHref}`}
                        className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
                      >
                        <Phone className="h-4 w-4" strokeWidth={2.5} /> {primary.store.phone}
                      </a>
                      <a
                        href={primary.store.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-gold-500/50 px-4 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                      >
                        <Navigation className="h-4 w-4" /> Directions
                      </a>
                    </div>
                    <Link href={`/locations/${primary.store.slug}`} className="text-sm font-semibold text-gold-700 underline underline-offset-2 hover:text-gold-800">
                      View the {primary.store.city} location page
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Secondary store — quieter card */}
            {secondary && (
              <Reveal delay={0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)] ring-1 ring-hairline">
                  <div className="relative h-36">
                    <Image
                      src={secondary.store.image}
                      alt={`Cash for Gold VA storefront in ${secondary.store.city}, VA`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Also nearby</span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-foreground">{secondary.store.city}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {secondary.store.street}, {secondary.store.city}, {secondary.store.region} {secondary.store.postalCode}
                      </p>
                      <p className="mt-1 text-sm text-muted">Drive: {secondary.drive}.</p>
                    </div>
                    <OpenStatus hours={secondary.store.hours} tone="dark" compact />
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 ring-1 ring-gold-200/70">
                      <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> 4.9 · 500+ reviews
                    </span>
                    <div className="mt-auto flex flex-col gap-2.5 pt-2 sm:flex-row">
                      <a
                        href={`tel:${secondary.store.phoneHref}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                      >
                        <Phone className="h-4 w-4" strokeWidth={2.5} /> {secondary.store.phone}
                      </a>
                      <a
                        href={secondary.store.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-gold-700"
                      >
                        Directions <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <Link
                      href={`/locations/${secondary.store.slug}`}
                      className="text-sm font-semibold text-gold-700 underline underline-offset-2 hover:text-gold-800"
                    >
                      View the {secondary.store.city} location page
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 4 · Why sell locally */}
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Sell Locally"
            title={landing.whyLocalTitle}
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <Prose>
              {paras(landing.whyLocal).map((p, i) => (
                <p key={i}>{withBold(p)}</p>
              ))}
            </Prose>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHY_LOCAL.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700 ring-1 ring-gold-200/70">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · What we buy */}
      <section className="bg-cream-100 py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Buy"
            title={<>Brought in by <span className="font-extrabold">{landing.city}</span> neighbors every week</>}
            description="From a single gold ring to an entire estate collection, bring it in for a free, no-obligation appraisal."
          />
          <div className="mt-14">
            <WhatWeBuyGrid />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/what-we-buy" variant="outline" size="lg">
              See everything we buy <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 6 · Neighborhoods */}
      <section className="py-10 sm:py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Neighborhoods We Serve"
            title={<>Serving every corner of <span className="font-extrabold">{landing.city}</span></>}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {landing.neighborhoods.map((n, i) => (
              <Reveal key={n.name} delay={(i % 2) * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:ring-1 hover:ring-gold-400/50">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-700 ring-1 ring-gold-200/70">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{n.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{n.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Reviews */}
      <section className="bg-cream-100 py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reviews"
            title={<span className="font-extrabold">Trusted by thousands of neighbors</span>}
            description="Real reviews from real customers across Northern Virginia, rated 4.9 out of 5 on Google."
          />
          <Reveal className="mt-12">
            <GoogleRatingSummary />
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <TestimonialsMarquee />
        </Reveal>
      </section>

      {/* 8 · FAQ */}
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title={<>Selling gold in <span className="font-extrabold">{landing.city}</span> — answered</>} />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {landing.faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 0.05}>
                <details className="group rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-foreground">
                    {f.q}
                    <span className="text-gold-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 · Related blog — differentiation */}
      {relatedPosts.length > 0 && (
        <section className="bg-cream-100 py-12 sm:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Learn Before You Sell" title={<span className="font-extrabold">Guides from our buyers</span>} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p!.slug} post={p!} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10 · Closing CTA — calls the nearest store */}
      <section className="py-4">
        <CredentialsStrip />
      </section>
      <CtaBand
        title={<>{landing.city}&apos;s nearest gold buyer is in {primary?.store.city ?? "Northern Virginia"}</>}
        description={landing.closingCta}
        phone={primary?.store.phone}
        phoneHref={primary?.store.phoneHref}
      />
    </>
  );
}
