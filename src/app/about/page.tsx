import type { Metadata } from "next";
import { SITE, LOCATIONS } from "@/data/business";
import { PageHero, CtaBand, Prose } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/scroll";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About Us, Northern Virginia's Trusted Gold Buyer",
  description: "Cash for Gold VA is a family-run precious-metals buyer serving Northern Virginia with honest appraisals and instant cash since 2010. Learn about our story and values.",
  alternates: { canonical: "/about" },
};

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

      <section className="container-page py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Prose>
              <p>
                For over a decade, Cash for Gold VA has helped thousands of Northern Virginia
                neighbors turn gold, silver, diamonds, jewelry, and coins into instant cash.
                What started as a single storefront has grown into four trusted locations across
                Annandale, Manassas, Chantilly, and Vienna/McLean.
              </p>
              <h2>Why people trust us</h2>
              <p>
                Unlike mail-in services and mall kiosks, we test and weigh every item in front of
                you and base our offers on live market prices. There are no hidden fees, no
                lowball tricks, and never any pressure to sell. If our offer isn&apos;t right for
                you, you walk away with your items, no questions asked.
              </p>
              <h2>Expertise you can rely on</h2>
              <p>
                Our buyers are trained to evaluate everything from scrap gold and sterling silver
                to certified diamonds and rare coins. That expertise means you
                get full value for the things that are genuinely worth more, like a signed piece
                of designer jewelry or a key-date collectible coin.
              </p>
              <p>
                Rated <strong>{SITE.rating.value} stars across {SITE.rating.count}+ Google
                reviews</strong>, we&apos;re proud to be the precious-metals buyer Northern Virginia
                recommends to friends and family.
              </p>
            </Prose>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 rounded-3xl border border-ink-900/8 bg-cream-100 p-8 text-center">
            {[
              { value: 15, suffix: "+", label: "Years in business" },
              { value: LOCATIONS.length, label: "Locations" },
              { value: SITE.rating.count, suffix: "+", label: "5-star reviews" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-gold-gradient sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix ?? ""} />
                </div>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
