import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, LayoutGrid, Zap, Sparkles, Landmark, Star, MapPin, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { SITE, LOCATIONS, PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { CredentialsStrip } from "@/components/credentials-strip";
import { GoogleG } from "@/components/google-rating";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/scroll";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { BorderBeam } from "@/components/ui/border-beam";

export const metadata: Metadata = {
  title: "About Us, Northern Virginia's Trusted Gold Buyer",
  description: "Cash for Gold VA is a family-run precious-metals buyer serving Northern Virginia with honest appraisals and instant payout since 2010. Learn about our story and values.",
  alternates: { canonical: "/about" },
};

const WHY = [
  { icon: ThumbsUp, title: "Best Value", text: "We track live gold, silver, platinum, and diamond prices all day, so your offer reflects the real market, never a lowball guess." },
  { icon: LayoutGrid, title: "Accept Many Items", text: "Far more than gold: we buy silver, diamonds, fine jewelry, luxury watches, coins, and more, all under one roof." },
  { icon: Zap, title: "Instant Payout", text: "You leave with cash in hand the same visit. No mail-in delays, no waiting on a check, we pay on the spot once you accept." },
  { icon: Sparkles, title: "Professional yet Simple", text: "Expert appraisals without the runaround: every item is tested, weighed, and explained in plain terms before you decide." },
  { icon: ShieldCheck, title: "Honest Company Values", text: "Integrity comes first, transparent offers, zero pressure, and a fair price explained out loud on every single deal." },
  { icon: Landmark, title: "Licensed & Insured", text: "Every Northern Virginia store is fully licensed and insured under Virginia state law, so you sell with total peace of mind." },
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
        actions={
          <>
            <Link
              href="/contact-us-cash-for-gold-locations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> Ask Us a Question
            </Link>
            <a
              href={`tel:${PRIMARY_PHONE_HREF}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/25 px-6 py-3 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-gold-300/60 hover:text-gold-200"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} /> {PRIMARY_PHONE}
            </a>
          </>
        }
      />

      {/* Story + storefront image */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-400" /> Our story
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A family-run buyer <span className="font-extrabold">Northern Virginia</span> trusts
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
            {/* Find-a-store banner — desktop: under the Google badge (left column) */}
            <Link href="/find-cash-for-gold-store" className="mt-6 hidden max-w-xs transition-transform hover:-translate-y-0.5 lg:block">
              <Image src="/brand/find-store-white.png" alt="Find a Cash for Gold store near you" width={700} height={184} sizes="320px" className="h-auto w-full" />
            </Link>
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
              {/* Always-on gold beam circling the storefront — a touch faster
                  and more prominent than the hover beams on the coin cards. */}
              <BorderBeam size={150} duration={3.5} borderWidth={2.5} colorFrom="#e0bd66" colorTo="#7e5d18" />
            </div>
            {/* Find-a-store banner — mobile: centered under the storefront image */}
            <Link href="/find-cash-for-gold-store" className="mx-auto mt-6 block max-w-xs transition-transform hover:-translate-y-0.5 lg:hidden">
              <Image src="/brand/find-store-white.png" alt="Find a Cash for Gold store near you" width={700} height={184} sizes="320px" className="h-auto w-full" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us, centered icon grid */}
      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Satisfaction Guaranteed"
            title={<span className="font-extrabold">Why Choose Us</span>}
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
              <div className="font-display text-3xl font-extrabold text-gold-gradient sm:text-5xl">
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
          <SectionHeading eyebrow="Visit Us" title={<>Four locations across <span className="font-extrabold">Northern Virginia</span></>} description="Walk in during business hours, no appointment needed, for a free appraisal and instant payout." />
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
