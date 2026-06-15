import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, User, ArrowLeft, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { BLOG_AUTHOR, relatedPosts, coverImage } from "@/data/blog";
import { PageHero, CtaBand } from "@/components/page-parts";
import { Markdown } from "@/components/markdown";
import { BlogCard } from "@/components/blog-card";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/json-ld";
import { formatDate, readingTime } from "@/lib/utils";

// Interim body shown until the real article is migrated. Reads as a short,
// on-brand draft so the page design is reviewable; replaced by `post.body`.
function placeholderBody(post: BlogPost): string {
  const t = post.title;
  return `${post.excerpt}

## What you should know

At Cash for Gold VA, we believe selling and buying precious items should be simple and transparent. This guide on **${t.toLowerCase()}** walks you through what matters most, so you can make a confident decision and get a fair, market-based price the same day you visit.

Our trained specialists evaluate every item in front of you, testing purity, confirming weight on calibrated scales, and recognizing any collectible, designer, or numismatic premium. Every offer is based on the live market price, with a clear explanation and no high-pressure tactics.

## Why it matters locally

With four convenient Northern Virginia locations in Annandale, Manassas, Chantilly, and Vienna/McLean, getting a professional, no-obligation appraisal has never been easier. Whether you are downsizing a collection, selling an inherited piece, or simply curious what your items are worth, our team is happy to help.

> This article is being updated with fresh, expanded content. The information above is a brief overview while the full guide is finalized.

Have questions, or want an appraisal? Stop by any location or [get in touch](/contact-us-cash-for-gold-locations) and we will take care of the rest.`;
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const body = post.body ?? placeholderBody(post);
  const related = relatedPosts(post.slug, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/${post.slug}` },
      ]} />
      <BlogPostingJsonLd title={post.title} description={post.excerpt} slug={post.slug} date={post.date} image={coverImage(post)} />

      <PageHero
        eyebrow={post.category}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/${post.slug}` },
        ]}
        title={post.title}
      />

      <article className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          {/* Cover image */}
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-3xl border border-hairline shadow-[var(--shadow-card)]">
            <Image
              src={coverImage(post)}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-hairline pb-6 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold-500" /> {BLOG_AUTHOR}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-gold-500" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold-500" /> {readingTime(body)} min read
            </span>
          </div>

          {/* Body */}
          <div className="mt-8">
            <Markdown>{body}</Markdown>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-hairline pt-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream-100 py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">Related articles</h2>
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700 hover:text-gold-600">
                All articles <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} delay={(i % 3) * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Ready to turn your valuables into cash?" />
    </>
  );
}
