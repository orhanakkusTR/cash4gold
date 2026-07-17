import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight, ArrowUpRight, Phone, Navigation, AlertTriangle } from "lucide-react";
import { ALL_SUBCATEGORIES, LOCATIONS, getCategory, getSubcategory, SITE, PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";
import { getBrief, getFaqs } from "@/data/category-briefs";
import { BrushUnderline } from "@/components/brush-underline";
import { LinkifyCities } from "@/components/linkify-cities";
import { placeholderDescription, metalTone } from "@/lib/utils";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryDescription, type RichLink } from "@/components/category-description";
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

// Internal links woven into a subcategory's long description for SEO. Phrases
// must appear verbatim in that page's longDescription (business.ts); the first
// occurrence is linked and any phrase not present is skipped.
const DESCRIPTION_LINKS: Record<string, RichLink[]> = {
  "precious-stones/sell-diamonds": [
    { text: "diamond engagement rings and fine jewelry", href: "/jewelry" },
    { text: "gold or platinum setting", href: "/precious-metals" },
    { text: "Get in touch", href: "/contact-us-cash-for-gold-locations" },
    { text: "coins", href: "/coins" },
    { text: "luxury watches", href: "/watches" },
    { text: "four Northern Virginia locations", href: "/locations" },
    { text: "find your nearest store", href: "/find-cash-for-gold-store" },
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
  const title = `We Buy ${s.name} in Northern Virginia`;
  return {
    // `absolute` drops the " | Cash for Gold VA" suffix: long item names (e.g.
    // "Austrian Platinum Philharmonic") otherwise push the title past 70 chars,
    // and the brand suffix was being truncated in SERPs anyway.
    title: { absolute: title },
    description: `Looking to sell your ${s.name.toLowerCase()}? ${s.short} Free appraisals, instant payout, and a fair price at 4 Northern Virginia locations, ${SITE.rating.value}★ rated.`,
    alternates: { canonical: `/${cat.slug}/${s.slug}` },
    openGraph: { title, description: s.short, images: ["/og/og-image.jpg"] },
  };
}

const subFaqs = (name: string) => [
  { q: `Where can I sell my ${name.toLowerCase()} near me?`, a: `At any of our four Northern Virginia locations, Annandale, Manassas, Chantilly, and Vienna/McLean. We buy, appraise on the spot, and pay instant payout, no appointment required.` },
  { q: `How is my ${name.toLowerCase()} valued?`, a: `We test and evaluate everything in front of you using professional equipment, basing offers on current market prices with a clear, no-pressure explanation.` },
  { q: `What do I need to bring to sell?`, a: `Just your items and a valid government-issued photo ID.` },
];

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; sub: string }> }) {
  const { category, sub } = await params;
  const cat = getCategory(category);
  const s = getSubcategory(category, sub);
  if (!cat || !s) notFound();

  const faqs = getFaqs(`${cat.slug}/${s.slug}`) ?? subFaqs(s.name);
  const siblings = cat.subcategories.filter((x) => x.slug !== s.slug);
  const isJewelry = cat.slug === "jewelry";
  const tone = metalTone(s.name);
  const brief = getBrief(`${cat.slug}/${s.slug}`);

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
        title={<>We Buy <span className={tone.shimmer}>{s.name}</span></>}
        headline={brief?.headline}
        description={brief ? undefined : s.intro}
        glowClass={tone.glow}
      />

      {/* Page-specific notice: we don't buy individual gold-filled/plated items */}
      {cat.slug === "precious-metals" && s.slug === "sell-gold-filled-plated" && (
        <section className="container-page pt-12 pb-2 sm:pt-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-red-50/70 px-6 py-7 shadow-[var(--shadow-card)] sm:px-9 sm:py-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-red-300 via-red-500 to-red-300" />
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <AlertTriangle className="h-6 w-6" />
                </span>
                <div className="space-y-3 text-[15px] leading-relaxed text-red-950/80 sm:text-base">
                  <p className="text-lg font-extrabold tracking-tight text-red-700 sm:text-xl">Notice</p>
                  <p>
                    We are not currently purchasing individual Gold Filled or Gold Plated items
                    through our standard buying process.
                  </p>
                  <p>
                    If you have a bulk quantity of <strong className="font-semibold text-red-900">5 lbs or more</strong>,
                    we&apos;d be happy to review your material. Please contact us directly at{" "}
                    <a
                      href={`tel:${PRIMARY_PHONE_HREF}`}
                      className="font-semibold text-red-700 underline decoration-red-300 underline-offset-2 transition-colors hover:text-red-800"
                    >
                      +1 {PRIMARY_PHONE}
                    </a>{" "}
                    to discuss your inventory.
                  </p>
                  <p>
                    <strong className="font-semibold text-red-900">Please note:</strong> Payment is not made
                    immediately. All materials must first be refined and evaluated, and payment will be issued
                    based on the confirmed precious metal content.
                  </p>
                  <p className="text-red-950/70">Thank you for your understanding.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Business brief: description lead-in */}
      {brief && (
        <section className="container-page pt-12 pb-6 sm:pt-14 sm:pb-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-white to-cream-100/60 px-7 py-10 shadow-[var(--shadow-card)] sm:px-12 sm:py-14">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                <span className="h-px w-6 bg-gold-400" /> Why sell to us
              </span>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-foreground/80 sm:text-xl">
                {brief.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {isJewelry && <JewelryValueProps />}

      {/* Types we buy, illustrative gallery (or fallback items+image) */}
      {s.gallery ? (
        <section className="container-page py-12 sm:py-16">
          <SectionHeading
            eyebrow="What we buy"
            title={`The ${s.name.toLowerCase()} we buy`}
            description={brief?.whatWeBuy ?? `Coins, bullion bars and more, here are the kinds of ${s.name.toLowerCase()} we buy every day. Stop by for a fair, transparent price and instant payout.`}
          />
          <div className="mt-12">
            <ProductGallery items={s.gallery} cover={cat.slug === "precious-stones" || cat.slug === "jewelry" || cat.slug === "watches" || s.slug === "sell-collectible-coins" || s.slug === "sell-antique-coins" || s.slug === "sell-sterling-silver-sets" || s.slug === "sell-dental-gold" || s.slug === "sell-gold-filled-plated"} dualCta={cat.slug === "precious-stones"} />
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
                      <Image src={r.image} alt={r.label} fill sizes="64px" className="object-cover" />
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
        <section className="container-page grid gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">We buy</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              All types of {s.name.toLowerCase()}
            </h2>
            {brief?.whatWeBuy && <p className="mt-4 text-lg leading-relaxed text-muted">{brief.whatWeBuy}</p>}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-foreground/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PRIMARY_PHONE_HREF}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} /> Call {PRIMARY_PHONE}
              </a>
              <a
                href={(LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0]).mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold-500/50 px-6 py-3 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-900 shadow-[var(--shadow-card)]">
              <Image src={s.cardImage ?? cat.image} alt={`We buy ${s.name.toLowerCase()}`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Pricing methodology from the business brief */}
      {brief?.pricing && (
        <section className="bg-cream-100 py-12 sm:py-16">
          <div className="container-page">
            <Reveal className="mx-auto max-w-3xl rounded-3xl border border-hairline bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                <span className="h-px w-6 bg-gold-400" /> How we price it
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Our pricing methodology
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{brief.pricing}</p>
            </Reveal>
          </div>
        </section>
      )}

      {isJewelry && <JewelryHowWeValue itemLabel={s.name.toLowerCase()} />}

      {/* Category description (expandable) */}
      <section className="bg-cream-100 py-12 sm:py-14">
        <div className="container-page">
          <CategoryDescription title={`Buying ${s.name}`} text={s.longDescription ?? placeholderDescription(s.name)} keywords={s.keywords} links={DESCRIPTION_LINKS[`${cat.slug}/${s.slug}`]} />
        </div>
      </section>

      {/* Locations */}
      <section className="container-page py-12 sm:py-16">
        <SectionHeading eyebrow="Near you" title={<><BrushUnderline>Sell your {s.name.toLowerCase()}</BrushUnderline> at a location near you</>} description="Four convenient Northern Virginia locations, ready to make you an offer today." />
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
      <section className="bg-cream-100 py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title={<><span className="font-extrabold">Sell {s.name}:</span> common questions</>} />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-foreground">
                    {f.q}
                    <span className="text-gold-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted"><LinkifyCities text={f.a} /></p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Siblings */}
      {siblings.length > 0 && (
        <section className="container-page py-10 sm:py-12">
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

      <CtaBand title={<>Ready to <span className="font-extrabold">sell your {s.name.toLowerCase()}?</span></>} />
    </>
  );
}
