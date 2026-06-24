import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

// Curated "items you can sell" showcase: real product photos cropped to circles,
// flowing side by side in a single full-width marquee. Each image is matched to
// the category it represents. Edit freely; each item links to the page that sells it.
// Several photos (watches, designer, diamonds, coins) are the owner's own brand
// images pulled from the original cashforgoldva.com site.
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

function BuyCircle({ item }: { item: BuyItem }) {
  return (
    <Link href={item.href} className="group flex w-56 shrink-0 flex-col items-center text-center sm:w-64 lg:w-72">
      {/* Circular real-photo crop with animated double gold ring */}
      <div className="relative w-full">
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1.5 rounded-full border border-gold-300/0 transition-all duration-500 group-hover:-inset-3 group-hover:border-gold-300/60"
        />
        <div className="relative aspect-square overflow-hidden rounded-full bg-ink-900 shadow-[var(--shadow-card)] ring-1 ring-hairline transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-gold)] group-hover:ring-2 group-hover:ring-gold-400/70">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.1]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-gold-700 sm:text-2xl">
        {item.title}
      </h3>
      <span
        aria-hidden
        className="mt-2 block h-px w-8 bg-gold-400/40 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500"
      />
      <p className="mt-2.5 max-w-[15rem] text-sm leading-relaxed text-muted">{item.desc}</p>
    </Link>
  );
}

export function WhatWeBuyGrid() {
  return (
    <div className="relative">
      <Marquee pauseOnHover repeat={3} className="[--duration:60s] [--gap:3.5rem] py-6">
        {ITEMS.map((item) => (
          <BuyCircle key={item.title} item={item} />
        ))}
      </Marquee>
      {/* Edge fades, match the cream What We Buy section background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-100 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-100 to-transparent sm:w-32" />
    </div>
  );
}
