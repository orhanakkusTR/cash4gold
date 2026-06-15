import type { Metadata } from "next";
import { CATEGORIES } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { CategoryCard } from "@/components/cards";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "What We Buy, Gold, Silver, Diamonds, Jewelry & Coins",
  description: "We buy gold, silver, diamonds, designer jewelry, and collectible coins for instant cash across Northern Virginia. Free appraisals at 4 locations.",
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
        description="From a single gold ring to an entire estate collection, here's everything we buy, all appraised for free, with instant cash offers."
      />
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.1}>
              <CategoryCard href={`/${c.slug}`} title={c.name} short={c.short} image={c.image} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
