import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CATEGORIES, LOCATIONS, getCategory, SITE } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryDescription } from "@/components/category-description";
import { JewelryValueProps, JewelryHowWeValue } from "@/components/jewelry-trust";
import { placeholderDescription, metalTone } from "@/lib/utils";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { POSTS, getPost, coverImage } from "@/data/blog";
import { BlogArticle } from "@/components/blog-article";

// This single top-level dynamic segment serves BOTH categories and the legacy
// root-level blog permalinks (e.g. /selling-gold-jewelry). When the slug is not
// a category, we dispatch to the blog article so the old URLs are preserved.

export function generateStaticParams() {
  return [
    ...CATEGORIES.map((c) => ({ category: c.slug })),
    ...POSTS.map((p) => ({ category: p.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    const post = getPost(category);
    if (post) {
      return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/${post.slug}` },
        openGraph: { title: post.title, description: post.excerpt, type: "article", images: [coverImage(post)] },
      };
    }
    return {};
  }
  const title = `Buy & Sell ${cat.name} in Northern Virginia`;
  return {
    title,
    description: `${cat.short} Buy and sell at 4 Northern Virginia locations with free appraisals and instant cash. ${SITE.rating.value}★ rated.`,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: { title, description: cat.short, images: [cat.image] },
  };
}

const catFaqs = (cat: { name: string }) => [
  { q: `How do I buy or sell ${cat.name.toLowerCase()} near me?`, a: `Visit any of our four Northern Virginia locations, Annandale, Manassas, Chantilly, or Vienna/McLean. We both buy and sell, appraise on the spot, and pay instant cash, no appointment needed.` },
  { q: `How are my items valued?`, a: `Our trained buyers test and evaluate everything in front of you using professional equipment, and base offers on current market prices with a clear explanation.` },
  { q: `Do I need an appointment?`, a: `No, just walk in during business hours. To sell, bring your items and a valid photo ID.` },
];

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
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
        title={<>Buy &amp; Sell <span className={tone.shimmer}>{cat.name}</span></>}
        description={cat.intro}
        glowClass={tone.glow}
      />

      {isJewelry && <JewelryValueProps />}

      {/* Subcategories */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={cat.name}
          title={`What we buy & sell in ${cat.name.toLowerCase()}`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cat.subcategories.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/${cat.slug}/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
                  <Image src={s.cardImage ?? cat.image} alt={s.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category description (expandable) */}
      <section className="bg-cream-100 py-16">
        <div className="container-page">
          <CategoryDescription title={`Buying & Selling ${cat.name}`} text={cat.longDescription ?? placeholderDescription(cat.name)} keywords={cat.keywords} />
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
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="container-page py-16">
        <h2 className="font-display text-xl font-semibold text-foreground">We also buy</h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {others.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700 transition-colors hover:bg-gold-50">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Ready to buy or sell ${cat.name.toLowerCase()}?`} />
    </>
  );
}
