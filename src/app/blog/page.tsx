import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { POSTS_BY_DATE, BLOG_CATEGORIES, coverImage } from "@/data/blog";
import { SITE } from "@/data/business";
import { PageHero, CtaBand } from "@/components/page-parts";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog: Gold, Silver, Coins & Jewelry Insights",
  description: `Tips, guides, and local news on selling and buying gold, silver, diamonds, coins, and jewelry in Northern Virginia from ${SITE.name}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS_BY_DATE;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />

      <PageHero
        eyebrow="Blog"
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]}
        title={<>Gold, Coins &amp; Jewelry <span className="text-gold-shimmer">Insights</span></>}
        description="Guides, market notes, and local know-how on buying and selling precious metals, diamonds, coins, and jewelry across Northern Virginia."
      />

      {/* Category legend */}
      <section className="border-b border-hairline bg-cream-100">
        <div className="container-page flex flex-wrap items-center gap-2.5 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Topics</span>
          {BLOG_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-gold-500/30 bg-white px-3.5 py-1.5 text-sm font-medium text-gold-700">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Featured (most recent) */}
      {featured && (
        <section className="container-page pt-14">
          <Reveal>
            <Link
              href={`/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)] lg:grid-cols-2"
            >
              <div className="relative flex min-h-56 items-end overflow-hidden p-8">
                <Image
                  src={coverImage(featured)}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/25 to-transparent" />
                <span className="relative inline-flex items-center rounded-full bg-ink-950/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream-50">
                  Latest · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                  <CalendarDays className="h-3.5 w-3.5 text-gold-500" /> {formatDate(featured.date)}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-gold-700 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-gold-700">
                  Read article
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Grid */}
      <section className="container-page py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </section>

      <CtaBand title="Have something to sell?" />
    </>
  );
}
