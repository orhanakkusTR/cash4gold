import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, LayoutGrid, Zap, Sparkles, Landmark, Star, MapPin, ArrowUpRight } from "lucide-react";
import { SITE, LOCATIONS } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { CredentialsStrip } from "@/components/credentials-strip";
import { GoogleG } from "@/components/google-rating";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/scroll";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About Us, Northern Virginia's Trusted Gold Buyer",
  description: "Cash for Gold VA is a family-run precious-metals buyer serving Northern Virginia with honest appraisals and instant payout since 2010. Learn about our story and values.",
  alternates: { canonical: "/about" },
};

const WHY = [
  { icon: ThumbsUp, title: "Best Value", text: "We keep up with the market rates and have a lot of knowledge about gold prices, silver prices, jewelry prices, and branded watch prices." },
  { icon: LayoutGrid, title: "Accept Many Items", text: "Gold items are not the only thing we accept; there are also many other items you can trade for cash!" },
  { icon: Zap, title: "Instant Cash", text: "We do instant cash! Many of our counterparts in the industry stretch the process by not providing instant cash solutions." },
  { icon: Sparkles, title: "Professional yet Simple Service", text: "We ensure the service you receive with us is fully professional but also simple, convenient, and straightforward." },
  { icon: ShieldCheck, title: "Company Values", text: "Our foremost value is integrity, reflecting our honest service, whereas our company values include discipline and timely work." },
  { icon: Landmark, title: "Licensed & Insured", text: "Our stores are duly licensed and insured according to the requirements of the state of Virginia." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <PageHero
        eyebrow="About Us"
        crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]}
        title={<>Honest valuations from a team that <span className="text-gold-shimmer">knows precious metals</span></>}
        description="We built Cash for Gold VA on a simple idea: people deserve a fair, transparent price for their valuables, explained in plain terms, paid in cash, on the spot."
      />

      {/* Story + storefront image */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Our story
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A family-run buyer Northern Virginia trusts
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                For over a decade, Cash for Gold VA has helped thousands of Northern Virginia
                neighbors turn gold, silver, diamonds, jewelry, and coins into instant payout.
                What started as a single storefront has grown into four trusted locations across{" "}
                <Link href="/locations/annandale" className="font-bold text-gold-700 underline decoration-gold-400/40 underline-offset-2 transition-colors hover:text-gold-600">Annandale</Link>,{" "}
                <Link href="/locations/manassas" className="font-bold text-gold-700 underline decoration-gold-400/40 underline-offset-2 transition-colors hover:text-gold-600">Manassas</Link>,{" "}
                <Link href="/locations/chantilly" className="font-bold text-gold-700 underline decoration-gold-400/40 underline-offset-2 transition-colors hover:text-gold-600">Chantilly</Link>, and{" "}
                <Link href="/locations/vienna" className="font-bold text-gold-700 underline decoration-gold-400/40 underline-offset-2 transition-colors hover:text-gold-600">Vienna/McLean</Link>.
              </p>
              <p>
                Unlike mail-in services and mall kiosks, we test and weigh every item in front of
                you and base our offers on live market prices, with the whole calculation explained
                out loud before you decide.
              </p>
            </div>
            <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-3.5 shadow-[var(--shadow-card)]">
              <GoogleG className="h-9 w-9 shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold leading-none text-foreground">{SITE.rating.value}</span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{SITE.rating.count}+ verified Google reviews</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline shadow-[var(--shadow-card)]">
              <Image
                src="/photos/storefront-chantilly.jpg"
                alt="Cash for Gold VA storefront in Chantilly, VA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us, centered icon grid */}
      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Satisfaction Guaranteed"
            title="Why Choose Us"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-[var(--shadow-gold)]">
                    <v.icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 rounded-3xl border border-ink-900/8 bg-gradient-to-br from-white to-gold-50/50 p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
          {[
            { value: 15, suffix: "+", label: "Years in business" },
            { value: LOCATIONS.length, label: "Locations" },
            { value: SITE.rating.count, suffix: "+", label: "5-star reviews" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-gold-gradient sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix ?? ""} />
              </div>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Accreditations */}
        <div className="mt-16">
          <CredentialsStrip />
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Visit Us" title="Four locations across Northern Virginia" description="Walk in during business hours, no appointment needed, for a free appraisal and instant payout." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.08}>
                <Link href={`/locations/${l.slug}`} className="group flex items-center justify-between gap-2 rounded-2xl border border-hairline bg-white px-5 py-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                  <span className="flex items-center gap-1.5 font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-gold-500" /> {l.city}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
