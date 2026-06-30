import type { Metadata } from "next";
import { CATEGORIES, PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SellGrid } from "@/components/sell-grid";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryCard } from "@/components/cards";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "What We Buy: Gold, Silver, Diamonds & Coins",
  description: "We buy gold, silver, diamonds, designer jewelry, and collectible coins for instant payout across Northern Virginia. Free appraisals at 4 locations.",
  alternates: { canonical: "/what-we-buy" },
};

export default function WhatWeBuyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "What We Buy", url: "/what-we-buy" }]} />
      <PageHero
        eyebrow="What We Buy"
        crumbs={[{ name: "Home", href: "/" }, { name: "What We Buy", href: "/what-we-buy" }]}
        title={<>We pay top dollar for your <span className="text-gold-shimmer">valuables</span></>}
        description="From a single gold ring to an entire estate collection, here's everything we buy, all appraised for free, with instant payout offers."
      />
      <section className="container-page py-20">
        <SellGrid />
      </section>

      {/* Category hubs, internal links for SEO + navigation */}
      <section className="bg-cream-100 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Browse by Category"
            title={<span className="font-extrabold">Explore what we buy in detail</span>}
            description="Dive into any category to learn how we appraise it, what we look for, and how much you can expect."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.1}>
                <CategoryCard href={`/${c.slug}`} title={`Sell ${c.name}`} short={c.short} image={c.image} phone={PRIMARY_PHONE} phoneHref={PRIMARY_PHONE_HREF} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
