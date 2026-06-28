import Link from "next/link";
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
    <div className="group relative">
      {/* Round "Sell" badge, partially overhanging the top-left corner */}
      <span
        aria-hidden
        className="absolute -left-2 -top-2 z-20 flex h-12 w-12 -rotate-6 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-[0.72rem] font-extrabold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(220,38,38,0.6)] ring-2 ring-white transition-transform duration-300 group-hover:rotate-0"
      >
        Sell
      </span>

      <Link
        href={item.href}
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-[var(--shadow-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 sm:p-7"
      >
        {/* top hairline accent that grows on hover */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] w-0 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full"
        />

        <div className="flex items-start justify-between gap-4">
          <h3 className="pl-9 font-display text-xl font-extrabold leading-tight text-foreground sm:text-2xl">
            {item.title}
          </h3>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200/70 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-ink-950"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </span>
        </div>

        <span
          aria-hidden
          className="mt-4 block h-px w-10 bg-gold-400/50 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-400"
        />
        <p className="mt-4 text-sm leading-relaxed text-muted">{item.desc}</p>
      </Link>
    </div>
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
