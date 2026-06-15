import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { TrustStats } from "@/components/trust-stats";
import { SectionHeading } from "@/components/section-heading";
import { WhatWeBuyBento } from "@/components/what-we-buy-bento";
import { ProcessBeam } from "@/components/process-beam";
import { CashBanner } from "@/components/cash-banner";
import { ScrollVideo } from "@/components/scroll-video";
import { OwnerVideo } from "@/components/owner-video";
import { GoogleRatingSummary } from "@/components/google-rating";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { OpenStatus } from "@/components/open-status";
import { QuoteForm } from "@/components/quote-form";
import { CtaBand } from "@/components/page-parts";
import { FaqJsonLd } from "@/components/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { LOCATIONS } from "@/data/business";

const FAQS = [
  { q: "How much can I get for my gold?", a: "We pay based on the live gold spot price, your item's weight, and its karat purity, tested in front of you. This is consistently more than mall kiosks or mail-in services offer." },
  { q: "Do I need an appointment?", a: "No. Walk into any of our four Northern Virginia locations during business hours and we'll appraise your items on the spot." },
  { q: "What do I need to bring?", a: "Just your items and a valid government-issued photo ID. We buy gold, silver, diamonds, jewelry, and collectible coins." },
  { q: "Do you buy broken or scrap jewelry?", a: "Yes. Broken chains, single earrings, dental gold, and scrap pieces all have value based on their metal content. Bring them in." },
];

export default function Home() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <Hero />

      {/* Trust stats */}
      <TrustStats />

      {/* What we buy, bento */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Buy"
            title="We pay top dollar for precious things"
            description={<>From a single gold ring to an entire estate collection, bring it in for a free, <span className="whitespace-nowrap">no-obligation appraisal</span>.</>}
          />
          <div className="mt-14">
            <WhatWeBuyBento />
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/what-we-buy" variant="outline" size="lg">
              See everything we buy <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* How it works, the visit process, before the deeper valuation cinematic */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Cash in hand in four simple steps"
            description="The whole process usually takes less than 15 minutes from walk-in to walk-out."
          />
          <div className="mt-16">
            <ProcessBeam />
          </div>
        </div>
      </section>

      {/* Scroll-scrubbed cinematic, embedded in a contained anatomy section */}
      <ScrollVideo
        eyebrow="The Anatomy of a Fair Offer"
        title={<>Every gram, <span className="text-silver-shimmer">honestly valued</span></>}
        basePath="/scroll"
        count={145}
        scrollLengthVh={260}
        steps={[
          { title: "Live Spot Price", desc: "We start from the real-time market price of gold, silver, or platinum — never an outdated rate." },
          { title: "Purity Test", desc: "Non-destructive acid or XRF testing confirms the exact karat, in front of you." },
          { title: "Precise Weighing", desc: "Your item is weighed on a state-certified, calibrated scale to the gram." },
          { title: "Instant Cash Offer", desc: "Spot price × purity × weight — a transparent figure, paid in cash the same day." },
        ]}
      />

      {/* Cinematic gold → cash banner */}
      <CashBanner />

      {/* Reviews, branded testimonials with a Google rating anchor */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reviews"
            title="Trusted by thousands of neighbors"
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

      {/* Owner / team video, lite YouTube embed for trust + E-E-A-T */}
      <OwnerVideo />

      {/* Locations, local-SEO anchor with real storefront photos */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visit Us"
            title="Four locations across Northern Virginia"
            description="Walk in during business hours, no appointment needed, for a free appraisal and instant cash."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-ink-900/8 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-gold)] sm:aspect-[2/1]"
                >
                  <Image
                    src={l.image}
                    alt={`Cash for Gold VA storefront in ${l.city}, VA`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/92 via-ink-950/35 to-transparent" />
                  <div className="relative p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold text-cream-50">{l.city}</h3>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 backdrop-blur transition-colors group-hover:bg-gold-500 group-hover:text-ink-950">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-cream-100/80">
                      <MapPin className="h-4 w-4 shrink-0 text-gold-400" /> {l.street}, {l.city}, {l.region}
                    </p>
                    <OpenStatus hours={l.hours} tone="light" className="mt-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/locations" variant="outline" size="lg">
              See all locations <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="scroll-mt-24 bg-cream-100 py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Free Quote
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              Find out what your valuables are <span className="text-gold-gradient">worth today</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Tell us what you have and we&apos;ll get back to you with a no-obligation quote.
              Prefer to talk now? Call your nearest location for an instant answer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <a key={l.slug} href={`tel:${l.phoneHref}`} className="rounded-xl border border-hairline bg-white px-4 py-3 transition-colors hover:border-gold-400">
                  <span className="block text-sm font-semibold text-foreground">{l.city}</span>
                  <span className="text-sm text-gold-700">{l.phone}</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-foreground">
                  {f.q}
                  <span className="text-gold-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/contact-us-cash-for-gold-locations" variant="dark" size="lg">
            Still have questions? Contact us <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBand />
    </>
  );
}
