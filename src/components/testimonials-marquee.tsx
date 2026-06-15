import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
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
      <figcaption className="mt-4 border-t border-hairline pt-3">
        <span className="font-semibold text-foreground">{t.name}</span>
        <span className="block text-xs text-muted">{t.location}</span>
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
