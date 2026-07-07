import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { coverImage } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * Blog post card for the index grid: a topical cover image carries the category
 * badge, the body the title + excerpt + date. Hover lifts with a gold ring,
 * matching the category cards.
 */
export function BlogCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]"
      >
        <div className="relative flex aspect-[16/9] items-end overflow-hidden p-5">
          <Image
            src={coverImage(post)}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/20 to-transparent" />
          <span className="relative inline-flex items-center rounded-full bg-ink-950/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-gold-700">
            {post.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
              <CalendarDays className="h-3.5 w-3.5 text-gold-500" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
              Read
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
