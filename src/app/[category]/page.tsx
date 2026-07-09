import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, Phone, Navigation } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { CATEGORIES, LOCATIONS, getCategory, SITE, PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryDescription, type RichLink } from "@/components/category-description";
import { JewelryValueProps, JewelryHowWeValue } from "@/components/jewelry-trust";
import { placeholderDescription, metalTone } from "@/lib/utils";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { LinkifyCities } from "@/components/linkify-cities";
import { POSTS, getPost } from "@/data/blog";
import { BlogArticle } from "@/components/blog-article";
import { CITY_LANDINGS, getCityLanding } from "@/data/city-landings";
import { CityLanding } from "@/components/city-landing";
import { NovaLanding } from "@/components/nova-landing";

// Internal links woven into each category's long description for SEO. Phrases
// must appear verbatim in that category's longDescription (business.ts); the
// renderer links the first occurrence and skips any that aren't present.
const DESCRIPTION_LINKS: Record<string, RichLink[]> = {
  "precious-stones": [
    { text: "loose certified diamonds of 1.5 carats and above", href: "/precious-stones/sell-diamonds" },
    { text: "diamond and gemstone jewelry", href: "/jewelry" },
    { text: "gold and precious metals", href: "/precious-metals" },
    { text: "coins", href: "/coins" },
    { text: "luxury watches", href: "/watches" },
    { text: "Get in touch", href: "/contact-us-cash-for-gold-locations" },
    { text: "four Northern Virginia locations", href: "/locations" },
    { text: "find your nearest store", href: "/find-cash-for-gold-store" },
  ],
};

// This single top-level dynamic segment serves BOTH categories and the legacy
// root-level blog permalinks (e.g. /selling-gold-jewelry). When the slug is not
// a category, we dispatch to the blog article so the old URLs are preserved.

export function generateStaticParams() {
  return [
    ...CATEGORIES.map((c) => ({ category: c.slug })),
    ...CITY_LANDINGS.map((c) => ({ category: c.slug })),
    ...POSTS.map((p) => ({ category: p.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    const city = getCityLanding(category);
    if (city) {
      return {
        title: { absolute: city.seoTitle },
        description: city.metaDescription,
        alternates: { canonical: `/${city.slug}` },
        openGraph: { title: city.heroTitle, description: city.metaDescription, url: `/${city.slug}`, images: ["/og/og-image.jpg"] },
      };
    }
    const post = getPost(category);
    if (post) {
      return {
        // `absolute` drops the global " | Cash for Gold VA" suffix. We use a
        // dedicated `seoTitle` (distinct from the H1 `post.title`, ≤70 chars) so
        // the <title> is not a duplicate of the H1 and is not truncated in SERPs.
        title: { absolute: post.seoTitle ?? post.title },
        description: post.excerpt,
        alternates: { canonical: `/${post.slug}` },
        openGraph: { title: post.title, description: post.excerpt, type: "article", images: ["/og/og-image.jpg"] },
      };
    }
    return {};
  }
  const title = `We Buy ${cat.name} in Northern Virginia`;
  return {
    title,
    description: `${cat.short} We buy at 4 Northern Virginia locations with free appraisals and instant payout. ${SITE.rating.value}★ rated.`,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: { title, description: cat.short, images: ["/og/og-image.jpg"] },
  };
}

const catFaqs = (cat: { name: string }) => [
  { q: `How do I sell my ${cat.name.toLowerCase()} near me?`, a: `Visit any of our four Northern Virginia locations, Annandale, Manassas, Chantilly, or Vienna/McLean. We buy, appraise on the spot, and pay instant payout, no appointment needed.` },
  { q: `How are my items valued?`, a: `Our trained buyers test and evaluate everything in front of you using professional equipment, and base offers on current market prices with a clear explanation.` },
  { q: `Do I need an appointment?`, a: `No, just walk in during business hours. To sell, bring your items and a valid photo ID.` },
];

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    const city = getCityLanding(category);
    if (city) return city.variant === "region" ? <NovaLanding landing={city} /> : <CityLanding landing={city} />;
    const post = getPost(category);
    if (post) return <BlogArticle post={post} />;
    notFound();
  }

  const faqs = catFaqs(cat);
  const others = CATEGORIES.filter((c) => c.slug !== cat.slug);
  const isJewelry = cat.slug === "jewelry";
  const tone = metalTone(cat.name);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: cat.name, url: `/${cat.slug}` }]} />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        eyebrow="What We Buy"
        crumbs={[{ name: "Home", href: "/" }, { name: cat.name, href: `/${cat.slug}` }]}
        title={<>We Buy <span className={tone.shimmer}>{cat.name}</span></>}
        description={cat.intro}
        glowClass={tone.glow}
      />

      {isJewelry && <JewelryValueProps />}

      {/* Subcategories */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={`Sell ${cat.name}`}
          title={`What we buy in ${cat.name.toLowerCase()}`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cat.subcategories.map((s, i) => {
            // Gold & Silver coins have a full "All … Coins" listing — surface it
            // as a polite button so shoppers know the tiles are browsable.
            const allListing = s.gallery?.find((g) => g.href?.includes("/all-") && g.count);
            return (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
                <div className={`relative aspect-square overflow-hidden ${cat.slug === "coins" ? "bg-white" : "bg-ink-900"}`}>
                  <Image
                    src={s.cardImage ?? cat.image}
                    alt={s.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className={
                      cat.slug === "coins"
                        ? "object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                        : "object-cover transition-transform duration-700 group-hover:scale-110"
                    }
                  />
                  {cat.slug !== "coins" && <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />}
                  {/* Corner phone stays on cards without a listing button below */}
                  {!allListing && (
                    <a
                      href={`tel:${PRIMARY_PHONE_HREF}`}
                      aria-label={`Call ${PRIMARY_PHONE} about ${s.name}`}
                      className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-[var(--shadow-gold)] ring-1 ring-white/40 transition-all duration-300 hover:scale-110 hover:bg-gold-400"
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.5} />
                    </a>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-extrabold text-foreground">{s.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
                  {allListing && (
                    <div className="relative z-20 mt-5 flex items-center gap-2.5">
                      <Link
                        href={allListing.href!}
                        className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center gap-1.5 rounded-full bg-gold-500 px-4 text-sm font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
                      >
                        View all {allListing.count} coins
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                      </Link>
                      <a
                        href={`tel:${PRIMARY_PHONE_HREF}`}
                        aria-label={`Call ${PRIMARY_PHONE} about ${s.name}`}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-300 bg-white text-gold-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-50"
                      >
                        <Phone className="h-4 w-4" strokeWidth={2.5} />
                      </a>
                    </div>
                  )}
                  {/* Cards without a listing (coins Collectible/Antique, diamonds) still get a CTA */}
                  {(cat.slug === "coins" || cat.slug === "precious-stones") && !allListing && (
                    <div className="relative z-20 mt-5 flex flex-1 flex-col justify-end">
                      <Link
                        href="/contact-us-cash-for-gold-locations"
                        className="inline-flex min-h-[2.75rem] items-center justify-center gap-1.5 rounded-full bg-gold-500 px-4 text-sm font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
                      >
                        <Phone className="h-4 w-4" strokeWidth={2.5} /> Get in touch
                      </Link>
                    </div>
                  )}
                </div>
                <Link href={`/${cat.slug}/${s.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Sell {s.name} in Northern Virginia</span>
                </Link>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <BorderBeam size={110} duration={5} colorFrom="#e0bd66" colorTo="#7e5d18" />
                </div>
              </div>
            </Reveal>
            );
          })}

          {/* A store card inviting customers to the Chantilly store */}
          {(cat.slug === "watches" || cat.slug === "precious-stones" || cat.slug === "coins") && (() => {
            const ch = LOCATIONS.find((l) => l.slug === "chantilly");
            if (!ch) return null;
            return (
              <Reveal delay={(cat.subcategories.length % 3) * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
                  <Link href={`/locations/${ch.slug}`} className="relative block aspect-square overflow-hidden bg-ink-900">
                    <Image src={ch.image} alt={`Cash for Gold VA storefront in ${ch.city}, VA`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink-950 shadow-[var(--shadow-gold)]">
                      <MapPin className="h-3.5 w-3.5" /> Visit Us
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-2xl font-extrabold text-cream-50">{ch.city} Store</h3>
                      <p className="mt-1 text-sm text-cream-100/80">{ch.street}, {ch.city}, {ch.region}</p>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-extrabold text-foreground">Bring your {cat.name.toLowerCase()} in</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">Free, no-obligation appraisal on the spot — walk out with instant payout the same day if you decide to sell.</p>
                    <div className="mt-4 flex flex-1 flex-col justify-end gap-2.5 sm:flex-row">
                      <a
                        href={`tel:${ch.phoneHref}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                      >
                        <Phone className="h-4 w-4" strokeWidth={2.5} /> {ch.phone}
                      </a>
                      <a
                        href={ch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                      >
                        <Navigation className="h-4 w-4" /> Get Directions
                      </a>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <BorderBeam size={110} duration={5} colorFrom="#e0bd66" colorTo="#7e5d18" />
                  </div>
                </div>
              </Reveal>
            );
          })()}

          {/* Find-a-store card — points to the store locator */}
          {(cat.slug === "coins" || cat.slug === "precious-stones") && (
            <Reveal delay={((cat.subcategories.length + 1) % 3) * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
                <Link href="/find-cash-for-gold-store" className="relative block aspect-square overflow-hidden bg-ink-900">
                  <Image src="/find/find-store-card.jpg" alt="Find a Cash for Gold VA store near you" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink-950 shadow-[var(--shadow-gold)]">
                    <MapPin className="h-3.5 w-3.5" /> Find Us
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl font-extrabold text-cream-50">Find your nearest store</h3>
                    <p className="mt-1 text-sm text-cream-100/80">Four Northern Virginia locations, open near you</p>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-extrabold text-foreground">Not sure which store?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">Use our store finder to see hours, directions, and the closest location to you.</p>
                  <div className="mt-4 flex flex-1 flex-col justify-end">
                    <Link
                      href="/find-cash-for-gold-store"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                    >
                      <MapPin className="h-4 w-4" strokeWidth={2.5} /> Find a store near you
                    </Link>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <BorderBeam size={110} duration={5} colorFrom="#e0bd66" colorTo="#7e5d18" />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Category description (expandable) */}
      <section className="bg-cream-100 py-16">
        <div className="container-page">
          <CategoryDescription title={`Buying ${cat.name}`} text={cat.longDescription ?? placeholderDescription(cat.name)} keywords={cat.keywords} links={DESCRIPTION_LINKS[cat.slug]} />
        </div>
      </section>

      {isJewelry && <JewelryHowWeValue itemLabel="jewelry" />}

      {/* Locations */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="Near you" title="Visit a location near you" description="Four convenient Northern Virginia locations, ready to make you an offer today." />
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
          <SectionHeading eyebrow="FAQ" title={`${cat.name}: common questions`} />
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

      {/* Other categories */}
      <section className="container-page py-16">
        <h2 className="font-display text-2xl font-extrabold text-foreground">We also buy</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">Coins are just the start — we make instant-payout offers across every category below.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                <Image src={c.image} alt={`Sell ${c.name.toLowerCase()} in Northern Virginia`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              </div>
              <div className="flex flex-1 items-start justify-between gap-2 p-4">
                <div className="min-w-0">
                  <h3 className="font-display text-base font-extrabold text-foreground">{c.name}</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted">{c.short}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <BorderBeam size={90} duration={5} colorFrom="#e0bd66" colorTo="#7e5d18" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Ready to sell your ${cat.name.toLowerCase()}?`} />
    </>
  );
}
