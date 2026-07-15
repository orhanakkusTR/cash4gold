import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { GoogleG } from "@/components/google-rating";
import { TESTIMONIALS, type Testimonial } from "@/data/business";

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-2 flex w-80 shrink-0 flex-col rounded-3xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">“{t.text}”</blockquote>
      <figcaption className="mt-4 flex items-center justify-between gap-3 border-t border-hairline pt-3">
        <span className="min-w-0">
          <span className="block truncate font-semibold text-foreground">{t.name}</span>
          <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-green-600" strokeWidth={2.5} />
            Verified Google review
          </span>
        </span>
        {/* Reviewer's Google profile photo, with a small Google badge */}
        <span className="relative shrink-0">
          <Image
            src={t.avatar}
            alt={t.name}
            width={40}
            height={40}
            quality={75}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-hairline"
          />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-1 ring-hairline">
            <GoogleG className="h-3 w-3" />
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsMarquee() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const row1 = TESTIMONIALS.slice(0, half);
  const row2 = TESTIMONIALS.slice(half);
  return (
    <div className="relative">
      <Marquee pauseOnHover className="[--duration:32s]">
        {row1.map((t) => <ReviewCard key={t.name} t={t} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:36s]">
        {row2.map((t) => <ReviewCard key={t.name} t={t} />)}
      </Marquee>
      {/* Edge fades, match the cream reviews section background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-100 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-100 to-transparent" />
    </div>
  );
}
