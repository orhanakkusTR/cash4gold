import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Check, ArrowRight, ChevronRight, Award, ShieldCheck, Zap, Star,
} from "lucide-react";
import { SITE, LOCATIONS, CATEGORIES } from "@/data/business";
import { CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ShipKitForm } from "@/components/ship-kit-form";
import { GoogleRatingSummary } from "@/components/google-rating";
import { FedExLogo, USPSLogo } from "@/components/carrier-logos";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "How It Works, Sell Gold from Home or In Store",
  description:
    "How selling gold works at Cash for Gold VA. Request a free, insured appraisal kit by FedEx or USPS, ship it prepaid, and get a fast certified offer, or walk into any of 4 Northern Virginia stores for instant payout. No obligation.",
  alternates: { canonical: "/how-it-works" },
};

const TRUST = [
  "Free shipping both ways",
  "Fully insured shipments",
  `${SITE.rating.value}★ · ${SITE.rating.count}+ Google reviews`,
  "No obligation to sell",
];

const STEPS = [
  {
    n: 1,
    title: "Submit your info & get a free kit",
    desc: "Pick FedEx or USPS and tell us where to send it. We mail you a free, fully insured, prepaid appraisal kit, or you can print a shipping label at home in seconds.",
    image: "/categories/jewelry-ring.jpg",
  },
  {
    n: 2,
    title: "Ship it free, get a certified offer",
    desc: "Seal your items in the kit and drop it off, every shipment is tracked and insured. Our experts appraise everything with the latest technology and send you a clear, fair offer, fast.",
    image: "/photos/step-appraisal.jpg",
  },
  {
    n: 3,
    title: "Accept and get paid",
    desc: "Love the offer? We rush your payment. Not for you? We return everything free of charge, fully insured. There's never any obligation to sell.",
    image: "/photos/step-payment.jpg",
  },
];

const PILLARS: { icon: typeof Award; title: string; points: string[] }[] = [
  { icon: Award, title: "Expertise", points: ["Trained buyers for gold, diamonds, watches & coins", "Offers based on the live precious-metal market", "Acid, electronic & XRF testing"] },
  { icon: ShieldCheck, title: "Safety", points: ["Every shipment fully insured", "Tracked, prepaid FedEx & USPS", "Free returns if you decline"] },
  { icon: Zap, title: "Efficiency", points: ["Fast appraisal turnaround", "Payment rushed on acceptance", "Or instant payout, same day, in store"] },
];

const BUYS = [
  "Gold jewelry (8K–24K)", "Sterling & fine silver", "Platinum & palladium", "Diamonds & gemstones",
  "Designer & estate jewelry", "Luxury watches", "Gold & silver coins & bullion", "Dental gold & scrap",
];

const FAQS = [
  { q: "Is the appraisal kit really free?", a: "Yes. The kit, the shipping to you, and the insured return shipping are all free, with zero obligation. If you don't love the offer, we send everything back at no cost." },
  { q: "Are my items insured in transit?", a: "Yes. Every shipment is fully tracked and insured from the moment it leaves your hands until it reaches us." },
  { q: "Do I have to ship, or can I come in?", a: "Either works. Prefer in person? Walk into any of our four Northern Virginia stores, Annandale, Manassas, Chantilly, or Vienna/McLean, for a free appraisal and instant payout, no appointment needed." },
  { q: "How are my items valued?", a: "We test purity and weigh your items using professional equipment, then base the offer on the current market price plus any designer or collectible premium, with a clear explanation." },
  { q: "How fast do I get paid?", a: "Once you accept, payment is rushed to you. In store, you walk out with cash the same visit." },
  { q: "What if I don't like the offer?", a: "No problem. There's no obligation. We return your items free of charge, fully insured." },
  { q: "Do you buy broken or scrap jewelry?", a: "Yes. Broken chains, single earrings, bent rings, dental gold, and scrap all hold value based on their metal content and karat." },
  { q: "What do you buy?", a: "Gold (8K–24K), sterling and fine silver, platinum, palladium, diamonds and gemstones, designer and estate jewelry, luxury watches, and gold and silver coins and bullion." },
];

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "How It Works", url: "/how-it-works" }]} />
      <FaqJsonLd faqs={FAQS} />

      {/* Form-led hero, light */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gold-50/60 to-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold-200/40 blur-[120px]" />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li><Link href="/" className="transition-colors hover:text-gold-700">Home</Link></li>
              <li className="flex items-center gap-1.5"><ChevronRight className="h-3.5 w-3.5" /><span className="text-foreground/80">How It Works</span></li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                <span className="h-px w-6 bg-gold-400" /> How selling gold works
              </span>
              <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">
                Our simple, hassle-free way to <span className="text-gold-gradient">sell your gold</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Send your valuables to us from home with a free, insured kit, or walk into any of our
                four Northern Virginia stores. Whichever you prefer, you get a fair, certified offer and fast payment.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm font-medium text-muted">Ship free with</span>
                <FedExLogo className="h-5 w-auto" />
                <USPSLogo className="h-6 w-auto" />
              </div>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                {TRUST.map((t) => (
                  <li key={t} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <Check className="h-4 w-4 text-gold-500" /> {t}
                  </li>
                ))}
              </ul>
              <Link href="/locations" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600">
                <MapPin className="h-4 w-4" /> Prefer in person? Find a location <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <ShipKitForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-hairline bg-ink-950">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm">
          {TRUST.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 font-medium text-cream-100/85">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* Value proposition */}
      <section className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <Reveal direction="right">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            <span className="h-px w-6 bg-gold-400" /> The simplest way to sell
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            We make it simple to sell gold, silver &amp; diamonds
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            No driving around for quotes, no pressure, no guesswork. Register, ship your items free and
            fully insured, and our certified experts appraise everything and send you a fair offer. Accept
            and get paid fast, or we return your items free of charge. Prefer to keep it local? Walk into
            any of our stores and skip straight to instant payout.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Free, insured shipping", "Certified expert appraisal", "Fast payment on acceptance", "Free returns, no obligation"].map((p) => (
              <span key={p} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/85">
                <Check className="h-4 w-4 text-gold-500" /> {p}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline shadow-[var(--shadow-card)]">
            <Image src="/photos/step-appraisal.jpg" alt="Expert appraising gold at Cash for Gold VA" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Photo-driven 3-step process, alternating rows */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The process"
            title="Three simple steps to get paid"
            description="From your front door to cash in hand, here's exactly how it works."
          />
          <div className="mt-16 space-y-16">
            {STEPS.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={step.n}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div className={`relative aspect-[3/2] overflow-hidden rounded-3xl border border-hairline shadow-[var(--shadow-card)] ${flip ? "lg:order-2" : ""}`}>
                      <Image src={step.image} alt={step.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div>
                      <span className="font-display text-6xl font-bold leading-none text-gold-200">{String(step.n).padStart(2, "0")}</span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">{step.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="container-page py-20 text-center sm:py-28">
        <Reveal>
          <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Trusted by thousands of <span className="text-gold-gradient">Northern Virginia neighbors</span>
          </p>
          <p className="mx-auto mt-3 max-w-xl text-muted">Real customers, real reviews, and real stores you can walk into today.</p>
        </Reveal>
        <Reveal className="mt-10">
          <GoogleRatingSummary />
        </Reveal>
      </section>

      {/* Why choose us */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why us" title="Why choose Cash for Gold VA?" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-ink-900/8 bg-white p-8 shadow-[var(--shadow-card)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="What we buy" title="Bring in anything precious" description="If it's gold, silver, platinum, diamonds, or collectible, we'll appraise it." />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {BUYS.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm">
              <Check className="h-3.5 w-3.5 text-gold-500" /> {b}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="inline-flex items-center gap-1 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50">
              {c.name} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream-100 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Near you" title="Prefer to visit in person?" description="Walk into any of our four Northern Virginia stores for a free appraisal and instant payout." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.08}>
                <Link href={`/locations/${l.slug}`} className="group flex items-center justify-between gap-2 rounded-2xl border border-hairline bg-white px-5 py-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                  <span className="flex items-center gap-1.5 font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-gold-500" /> {l.city}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow="FAQ" title="Selling gold: common questions" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
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

      <CtaBand />
    </>
  );
}
