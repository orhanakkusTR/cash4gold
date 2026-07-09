import Image from "next/image";
import Link from "next/link";
import { Phone, Navigation, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";
import type { GalleryItem } from "@/data/business";

/**
 * Illustrative "what we buy" product showcase - e-commerce style category
 * tiles (image + name + note, never prices). Groups by `item.group` when set.
 * When an item has `href`, its photo + name link to a dedicated detail page
 * and the action row becomes a "View all" link; items with both `href` and
 * `count` also surface a "N products" badge as a listing cue. Items without
 * `href` keep a full-width call-to-sell action.
 */
function Tile({ p, i, cover, dualCta }: { p: GalleryItem; i: number; cover?: boolean; dualCta?: boolean }) {
  const isListing = Boolean(p.href && p.count);

  const imageEl = (
    <Image
      src={p.image}
      alt={p.name}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
      className={
        cover
          ? "object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          : "object-contain p-5 transition-transform duration-500 group-hover:scale-[1.06]"
      }
    />
  );

  const countBadge = isListing ? (
    <span className="pointer-events-none absolute left-2.5 top-2.5 z-10 inline-flex items-center rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-bold leading-none text-ink-950 shadow-[var(--shadow-card)] ring-1 ring-gold-600/20">
      {`${p.count} coins`}
    </span>
  ) : null;

  return (
    <Reveal delay={(i % 4) * 0.06}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
        {/* Image — full-bleed top, e-commerce category style */}
        {p.href ? (
          <Link
            href={p.href}
            aria-label={`View ${p.name}`}
            className="relative block aspect-square overflow-hidden bg-gradient-to-b from-cream-100 to-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400"
          >
            {countBadge}
            {imageEl}
          </Link>
        ) : (
          <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-cream-100 to-white">
            {imageEl}
          </div>
        )}

        {/* Body — roomy title + note */}
        <div className="flex flex-1 flex-col gap-3 border-t border-hairline p-3.5 sm:p-4">
          <div className="flex-1">
            <h3 className="font-display text-[15px] font-extrabold leading-snug text-foreground sm:text-base">
              {p.href ? (
                <Link href={p.href} className="transition-colors hover:text-gold-700">
                  {p.name}
                </Link>
              ) : (
                p.name
              )}
            </h3>
            {p.note && <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{p.note}</p>}
          </div>

          {/* Action row — full-width, 44px tap target */}
          {p.href ? (
            <Link
              href={p.href}
              aria-label={`View all ${p.name}`}
              className="flex min-h-11 w-full items-center justify-between rounded-xl bg-gold-50 px-3.5 text-sm font-semibold text-gold-700 ring-1 ring-gold-200/70 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950 hover:ring-gold-500"
            >
              <span>{isListing ? `View ${p.count} Coins` : "View all"}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          ) : dualCta ? (
            // Two buttons — Call & Directions — that both route to our on-site
            // locations page (keeps traffic internal). Stack on mobile, side by
            // side once the tile is wide enough.
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/locations"
                aria-label={`Call about ${p.name}`}
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold-500 px-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                <span>Call</span>
              </Link>
              <Link
                href="/locations"
                aria-label={`Get directions for ${p.name}`}
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold-50 px-2.5 text-sm font-semibold text-gold-700 ring-1 ring-gold-200/70 transition-all duration-300 hover:bg-gold-100 hover:ring-gold-300"
              >
                <Navigation className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                <span>Directions</span>
              </Link>
            </div>
          ) : (
            <a
              href={`tel:${PRIMARY_PHONE_HREF}`}
              aria-label={`Call ${PRIMARY_PHONE} about ${p.name}`}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gold-50 px-3.5 text-sm font-semibold text-gold-700 ring-1 ring-gold-200/70 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950 hover:ring-gold-500"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} />
              <span>Call to sell</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function ProductGallery({ items, cover, dualCta }: { items: GalleryItem[]; cover?: boolean; dualCta?: boolean }) {
  // Preserve first-seen group order.
  const groups: string[] = [];
  for (const it of items) {
    const g = it.group ?? "";
    if (!groups.includes(g)) groups.push(g);
  }
  const grouped = groups.length > 1 || (groups.length === 1 && groups[0] !== "");

  if (!grouped) {
    return (
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3">
        {items.map((p, i) => <Tile key={p.name} p={p} i={i} cover={cover} dualCta={dualCta} />)}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g}>
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-display text-lg font-semibold text-foreground">{g}</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3">
            {items.filter((p) => (p.group ?? "") === g).map((p, i) => <Tile key={p.name} p={p} i={i} cover={cover} dualCta={dualCta} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
