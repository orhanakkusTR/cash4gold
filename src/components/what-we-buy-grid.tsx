import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Curated "items you can sell" showcase: real product photos cropped into large
// square photo tiles arranged in a responsive bento-style grid. Each tile is a
// full-bleed image with a bottom gradient scrim carrying the title and a short
// description, plus a refined gold hover treatment. Edit freely; each item links
// to the page that sells it. Several photos (watches, designer, diamonds, coins)
// are the owner's own brand images pulled from the original cashforgoldva.com site.
type BuyItem = { title: string; desc: string; image: string; href: string };

const ITEMS: BuyItem[] = [
  { title: "Gold", desc: "Jewelry, chains, scrap & more", image: "/products/jewelry/chains.jpg", href: "/precious-metals/sell-gold" },
  { title: "Diamonds", desc: "Certified, 1.5ct & above", image: "/products/diamonds/cfg-diamond.jpg", href: "/precious-stones/sell-diamonds" },
  { title: "Designer Jewelry", desc: "Tiffany, Cartier, Van Cleef & more", image: "/products/jewelry/designer.jpg", href: "/jewelry/sell-designer-jewelry" },
  { title: "Gold Coins", desc: "Eagles, Krugerrands & Maple Leafs", image: "/products/coins/gold-silver-coins.jpg", href: "/coins/sell-gold-coins" },
  { title: "Silver Coins", desc: "Morgans, Eagles & junk silver", image: "/products/silver/coins-jewelry.png", href: "/coins/sell-silver-coins" },
  { title: "Luxury Watches", desc: "Rolex, Omega, Cartier & more", image: "/products/watches/luxury-watches.png", href: "/watches" },
  { title: "Bullion & Bars", desc: "Gold & silver, any mint", image: "/products/gold/pamp.jpg", href: "/precious-metals/sell-gold" },
  { title: "Platinum & Palladium", desc: "Rare metals, real value", image: "/products/platinum/eagle.jpg", href: "/precious-metals/sell-platinum" },
  { title: "Estate & Antique", desc: "Inherited & vintage pieces", image: "/products/jewelry/box.jpg", href: "/jewelry/sell-your-estate-jewelry" },
];

function BuyTile({ item }: { item: BuyItem }) {
  return (
    <Link
      href={item.href}
      className="group relative block aspect-square overflow-hidden rounded-2xl bg-ink-900 shadow-[var(--shadow-card)] ring-1 ring-hairline transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-gold)] hover:ring-2 hover:ring-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
    >
      {/* Full-bleed real product photo, zooms gently on hover */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
      />

      {/* Dark scrim from the bottom so overlaid text stays WCAG AA legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />

      {/* Gold arrow affordance, fades and slides in on hover */}
      <span
        aria-hidden
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-ink-950 opacity-0 shadow-[var(--shadow-gold)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-2"
      >
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
      </span>

      {/* Title + description over the scrim */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-2xl font-bold leading-tight text-cream-50 sm:text-3xl">
          {item.title}
        </h3>
        <span
          aria-hidden
          className="mt-2.5 block h-px w-10 bg-gold-400/60 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-400"
        />
        <p className="mt-2.5 text-sm leading-relaxed text-cream-100/80">{item.desc}</p>
      </div>
    </Link>
  );
}

export function WhatWeBuyGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {ITEMS.map((item) => (
        <BuyTile key={item.title} item={item} />
      ))}
    </div>
  );
}
