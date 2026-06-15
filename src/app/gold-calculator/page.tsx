import type { Metadata } from "next";
import { Gauge, ScrollText, ShieldCheck } from "lucide-react";
import { PayoutEstimator } from "@/components/payout-estimator";
import { PageHero, CtaBand, Prose } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

const PATH = "/gold-calculator";

export const metadata: Metadata = {
  title: "What's My Gold Worth? Instant Value Estimator",
  description:
    "Find out what your gold, silver, or platinum could be worth based on today's live market price. Free, instant, no obligation. Final price set in store after a free appraisal.",
  alternates: { canonical: PATH },
};

const FAQS = [
  { q: "How accurate is the estimate?", a: "It's a realistic range based on the live market spot price and your item's metal, purity, and weight, minus standard refining and processing. It's a guide, not a binding quote. Your exact offer is determined in store after testing." },
  { q: "How do you calculate it?", a: "We take the pure-metal weight (weight × purity), multiply by today's live spot price per gram, then apply our payout range for that metal. Designer, collectible, or numismatic value can raise the offer beyond melt." },
  { q: "Is this a binding offer?", a: "No. The estimator is for guidance only. Your real, no-obligation offer is made in person after our experts test and weigh each item." },
  { q: "What do I need to sell?", a: "A valid government-issued photo ID. Under Virginia law you must be 18+ and the rightful owner of the items." },
];

export default function WhatIsItWorthPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "What's It Worth?", url: PATH }]} />
      <FaqJsonLd faqs={FAQS} />

      <PageHero
        eyebrow="Free Instant Estimate"
        crumbs={[{ name: "Home", href: "/" }, { name: "What's It Worth?", href: PATH }]}
        title={<>What&apos;s it worth? <span className="text-gold-shimmer">Get an instant estimate.</span></>}
        description="Enter your item and we'll estimate a cash range based on today's live market price. Free, instant, and no obligation. Your final offer is set in store after a free, no-pressure appraisal."
      />

      {/* Estimator + supporting copy */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <Reveal direction="right" className="lg:sticky lg:top-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Why use it</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Know your number before you walk in
          </h2>
          <p className="mt-4 text-muted">
            No pressure and no guesswork. Our estimator uses the same live price engine as our in-store
            appraisals, so you get a realistic range in seconds, then come in for your exact, no-obligation offer.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              { icon: Gauge, title: "Live market pricing", desc: "Pulls real-time gold, silver & platinum spot prices, refreshed continuously." },
              { icon: ScrollText, title: "Transparent method", desc: "Pure-metal weight × today's spot, less standard refining. No hidden math." },
              { icon: ShieldCheck, title: "Honest & non-binding", desc: "Always a range, never a lowball single number. Your real offer can go higher." },
            ].map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-muted">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <PayoutEstimator />
        </Reveal>
      </section>

      {/* Methodology */}
      <section className="bg-cream-100 py-16">
        <div className="container-page mx-auto max-w-3xl">
          <SectionHeading align="left" eyebrow="Methodology" title="How we estimate" />
          <div className="mt-6">
            <Prose>
              <p>
                Our estimate is calculated from your item&apos;s pure-metal weight (weight × purity) multiplied by
                today&apos;s live market spot price, less standard refining and processing costs. We always show a
                <strong> range</strong> rather than a single figure to stay honest and non-binding.
              </p>
              <p>
                Estimates are illustrative and do not account for designer, collectible, numismatic, or gemstone
                value, which can raise your offer. This is not financial advice. Cash for Gold VA is a licensed
                precious-metals dealer; all purchases follow Virginia Code §54.1-4100 et seq. (valid ID required,
                sellers must be 18+ and the rightful owner).
              </p>
            </Prose>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="FAQ" title="Estimator questions" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline">
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
      </section>

      <CtaBand title="Ready for your exact offer?" description="Bring your items to any of our four Northern Virginia locations for a free, no-obligation appraisal and instant payout." />
    </>
  );
}
