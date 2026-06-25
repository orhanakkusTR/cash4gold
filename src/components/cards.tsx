import Link from "next/link";
import Image from "next/image";
import {
  Star, MapPin, Phone, ArrowUpRight, Clock,
  BadgeDollarSign, PackageOpen, Banknote, ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Location, Testimonial } from "@/data/business";
import { formatHours } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  BadgeDollarSign, PackageOpen, Banknote, ShieldCheck,
};

export function ValuePropCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const Icon = ICONS[icon] ?? ShieldCheck;
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-cream-50 p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  );
}

export function CategoryCard({
  href,
  title,
  short,
  image,
  phone,
  phoneHref,
}: {
  href: string;
  title: string;
  short: string;
  image: string;
  phone?: string;
  phoneHref?: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-ink-900">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
        {phoneHref && (
          <a
            href={`tel:${phoneHref}`}
            aria-label={`Call ${phone ?? "us"} about ${title}`}
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-[var(--shadow-gold)] ring-1 ring-white/40 transition-all duration-300 hover:scale-110 hover:bg-gold-400"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
          </a>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-extrabold text-foreground">{title}</h3>
          <ArrowUpRight className="h-5 w-5 text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{short}</p>
      </div>
      {/* Full-card click target, sits below the phone button (z-20) */}
      <Link href={href} aria-label={title} className="absolute inset-0 z-10" />
    </div>
  );
}

export function LocationCard({ location }: { location: Location }) {
  const today = location.hours[(new Date(2026, 5, 12).getDay() + 6) % 7]; // stable placeholder day
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-ink-900/8 bg-cream-50 p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
      <h3 className="font-display text-xl font-semibold text-foreground">{location.city}</h3>
      <p className="mt-3 flex items-start gap-2 text-sm text-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
        {location.street}, {location.city}, {location.region} {location.postalCode}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-muted">
        <Clock className="h-4 w-4 shrink-0 text-gold-500" />
        Mon–Fri {formatHours(today.open || "10:00", "18:00")}
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a
          href={`tel:${location.phoneHref}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" /> {location.phone}
        </a>
        <Link
          href={`/locations/${location.slug}`}
          className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-50"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-ink-900/8 bg-cream-50 p-7 shadow-[var(--shadow-card)]">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-5 border-t border-ink-900/8 pt-4">
        <span className="font-semibold text-foreground">{t.name}</span>
        <span className="block text-xs text-muted">{t.location}</span>
      </figcaption>
    </figure>
  );
}
