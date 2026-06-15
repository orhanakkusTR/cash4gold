import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { ALL_SUBCATEGORIES, LOCATIONS, getCategory, getSubcategory, SITE } from "@/data/business";
import { placeholderDescription, metalTone } from "@/lib/utils";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryDescription } from "@/components/category-description";
import { ProductGallery } from "@/components/product-gallery";
import { JewelryValueProps, JewelryHowWeValue } from "@/components/jewelry-trust";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

// Cross-links so each item FORM has one home: coins live under Coins, jewelry
// under Jewelry. Metal pages (bars/bullion) point to those for other forms.
const RELATED: Record<string, { label: string; href: string; image: string }[]> = {
  "sell-gold": [
    { label: "Gold Coins", href: "/coins/sell-gold-coins", image: "/products/gold/eagle.jpg" },
    { label: "Gold Jewelry", href: "/jewelry", image: "/products/jewelry/ring.jpg" },
  ],
  "sell-silver": [
    { label: "Silver Coins", href: "/coins/sell-silver-coins", image: "/products/silver/ase.jpg" },
    { label: "Jewelry", href: "/jewelry", image: "/products/jewelry/necklace.jpg" },
  ],
};

export function generateStaticParams() {
  return ALL_SUBCATEGORIES.map(({ category, sub }) => ({ category: category.slug, sub: sub.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; sub: string }> }): Promise<Metadata> {
  const { category, sub } = await params;
  const cat = getCategory(category);
  const s = getSubcategory(category, sub);
  if (!cat || !s) return {};
  const title = `Buy & Sell ${s.name} in Northern Virginia`;
  return {
    title,
    description: `Looking to buy or sell ${s.name.toLowerCase()}? ${s.short} Free appraisals, instant cash, and a fair price at 4 Northern Virginia locations, ${SITE.rating.value}★ rated.`,
    alternates: { canonical: `/${cat.slug}/${s.slug}` },
    openGraph: { title, description: s.short, images: [cat.image] },
  };
}

const subFaqs = (name: string) => [
  { q: `Where can I buy or sell ${name.toLowerCase()} near me?`, a: `At any of our four Northern Virginia locations, Annandale, Manassas, Chantilly, and Vienna/McLean. We both buy and sell, appraise on the spot, and pay instant cash, no appointment required.` },
  { q: `How is my ${name.toLowerCase()} valued?`, a: `We test and evaluate everything in front of you using professional equipment, basing offers on current market prices with a clear, no-pressure explanation.` },
  { q: `What do I need to bring to sell?`, a: `Just your items and a valid government-issued photo ID.` },
];

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; sub: string }> }) {
  const { category, sub } = await params;
  const cat = getCategory(category);
  const s = getSubcategory(category, sub);
  if (!cat || !s) notFound();

  const faqs = subFaqs(s.name);
  const siblings = cat.subcategories.filter((x) => x.slug !== s.slug);
  const isJewelry = cat.slug === "jewelry";
  const tone = metalTone(s.name);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: cat.name, url: `/${cat.slug}` },
        { name: s.name, url: `/${cat.slug}/${s.slug}` },
      ]} />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        eyebrow={cat.name}
        crumbs={[
          { name: "Home", href: "/" },
          { name: cat.name, href: `/${cat.slug}` },
          { name: s.name, href: `/${cat.slug}/${s.slug}` },
        ]}
        title={<>Buy &amp; Sell <span className={tone.shimmer}>{s.name}</span></>}
        description={s.intro}
        glowClass={tone.glow}
      />

      {isJewelry && <JewelryValueProps />}

      {/* Types we buy and sell, illustrative gallery (or fallback items+image) */}
      {s.gallery ? (
        <section className="container-page py-20">
          <SectionHeading
            eyebrow="What we buy & sell"
            title={`The ${s.name.toLowerCase()} we buy and sell`}
            description={`Coins, bullion bars and more, here are the kinds of ${s.name.toLowerCase()} we deal in every day. Whether you are buying or selling, stop by for a fair, transparent price.`}
          />
          <div className="mt-12">
            <ProductGallery items={s.gallery} cover={cat.slug === "precious-stones" || cat.slug === "jewelry" || s.slug === "sell-collectible-coins" || s.slug === "sell-antique-coins"} />
          </div>
          {RELATED[s.slug] && (
            <div className="mt-14">
              <p className="mb-5 text-center text-sm font-medium text-muted">
                Looking for {s.name.toLowerCase()} in another form? We deal in those too.
              </p>
              <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
                {RELATED[s.slug].map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex items-center gap-4 rounded-2xl border border-hairline bg-white p-3 pr-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]"
                  >
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-cream-100 to-white">
                      <Image src={r.image} alt="" fill sizes="64px" className="object-cover" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base font-semibold text-foreground">{r.label}</span>
                      <span className="text-sm text-muted">See what we deal in</span>
                    </span>
                    <ArrowRight className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">We buy &amp; sell</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              All types of {s.name.toLowerCase()}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-foreground/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-900 shadow-[var(--shadow-card)]">
              <Image src={s.cardImage ?? cat.image} alt={`Buy and sell ${s.name.toLowerCase()}`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
            </div>
          </Reveal>
        </section>
      )}

      {isJewelry && <JewelryHowWeValue itemLabel={s.name.toLowerCase()} />}

      {/* Category description (expandable) */}
      <section className="bg-cream-100 py-16">
        <div className="container-page">
          <CategoryDescription title={`Buying & Selling ${s.name}`} text={s.longDescription ?? placeholderDescription(s.name)} keywords={s.keywords} />
        </div>
      </section>

      {/* Locations */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="Near you" title={`Buy or sell ${s.name.toLowerCase()} at a location near you`} description="Four convenient Northern Virginia locations, ready to make you an offer today." />
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
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title={`${s.name}: common questions`} />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline">
            {faqs.map((f, i) => (
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
        </div>
      </section>

      {/* Siblings */}
      {siblings.length > 0 && (
        <section className="container-page py-16">
          <h2 className="font-display text-xl font-semibold text-foreground">More in {cat.name}</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {siblings.map((x) => (
              <Link key={x.slug} href={`/${cat.slug}/${x.slug}`} className="inline-flex items-center gap-1 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50">
                {x.name} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand title={`Ready to buy or sell ${s.name.toLowerCase()}?`} />
    </>
  );
}
