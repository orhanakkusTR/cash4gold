import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Compact "What can you sell?" catalog grid. Each card shows a small square
// thumbnail (top-left), a bold title, and a short qualifier line. A few cards
// carry a "NEW" tag; the final card is a disabled "coming soon" placeholder.
//
// IMAGES: drop square images into /public/sell/ and set `image` on each item
// (e.g. image: "/sell/gold-jewelry.webp"). While `image` is unset we render the
// `emoji` placeholder so the grid still looks right.
type SellItem = {
  title: string;
  desc: string;
  emoji: string;
  image?: string;
  tag?: string;
  comingSoon?: boolean;
};

const ITEMS: SellItem[] = [
  { title: "Gold Jewelry", desc: "All karats, any condition", emoji: "💍", image: "/sell/gold-jewelry.webp" },
  { title: "Scrap Gold", desc: "Broken, bent, tangled", emoji: "🔧", image: "/sell/scrap-gold.webp" },
  { title: "Silver Jewelry", desc: "Sterling .925 & above", emoji: "✨", image: "/sell/silver-jewelry.webp" },
  { title: "Gold Coins", desc: "90% of spot", emoji: "🪙", image: "/sell/gold-coins.webp" },
  { title: "Silver Coins", desc: "Junk silver & collectibles", emoji: "🥇", image: "/sell/silver-coins.webp" },
  { title: "Bullion Bars", desc: "Gold 90% · Silver 85%", emoji: "🟨", image: "/sell/bullion-bars.webp" },
  { title: "Diamonds", desc: "Certified, 1.5ct & above", emoji: "💎", image: "/sell/diamonds.webp" },
  { title: "Rolex & Watches", desc: "Rolex, Omega, Cartier…", emoji: "⌚", image: "/sell/watches.webp" },
  { title: "Platinum Jewelry", desc: "PT950, PT900 & above", emoji: "⬡", image: "/sell/platinum-jewelry.webp" },
  { title: "Sterling Silver Sets", desc: "Flatware, tea sets & more", emoji: "🍴", image: "/sell/sterling-silver-sets.webp" },
  { title: "Name Brand Jewelry", desc: "Tiffany, Cartier, Yurman…", emoji: "🏷️", image: "/sell/name-brand-jewelry.webp" },
  { title: "Palladium", desc: "Rare metal, real value", emoji: "⚛️", tag: "NEW", image: "/sell/palladium.webp" },
  { title: "Estate & Antique", desc: "Inherited & vintage pieces", emoji: "⏳", image: "/sell/estate-antique.webp" },
  { title: "Dental Gold", desc: "Crowns, bridges, fillings", emoji: "🦷", tag: "NEW", image: "/sell/dental-gold.webp" },
  { title: "Gold Filled / Plated", desc: "Know the difference", emoji: "🔍", tag: "NEW", image: "/sell/gold-filled-plated.webp" },
  { title: "Sell Online", desc: "Coming soon", emoji: "📦", image: "/sell/sell-online.webp", comingSoon: true },
];

function Thumb({ item }: { item: SellItem }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gold-50">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          quality={65}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${item.comingSoon ? "opacity-60" : ""}`}
        />
      ) : (
        <span aria-hidden className="flex h-full w-full items-center justify-center text-5xl">
          {item.emoji}
        </span>
      )}
    </div>
  );
}

function SellCard({ item }: { item: SellItem }) {
  return (
    <div
      className={
        item.comingSoon
          ? "relative flex flex-col gap-3 rounded-2xl border border-dashed border-hairline bg-cream-50/40 p-3"
          : "group relative flex flex-col gap-3 rounded-2xl border border-hairline bg-white p-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-gold)]"
      }
    >
      {item.tag && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-green-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-green-700">
          {item.tag}
        </span>
      )}
      <Thumb item={item} />
      <div className="flex items-center justify-between gap-2 px-1 pb-1">
        <div>
          <h3 className={`font-display text-base font-extrabold ${item.comingSoon ? "text-muted" : "text-foreground"}`}>
            {item.title.startsWith("Sell") ? item.title : `Sell ${item.title}`}
          </h3>
          <p className="mt-0.5 text-sm text-muted">{item.desc}</p>
        </div>
        {!item.comingSoon && (
          <Link
            href="/locations"
            aria-label={`Find a location to sell ${item.title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200/70 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950 group-hover:ring-gold-300"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        )}
      </div>
    </div>
  );
}

export function SellGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {ITEMS.map((item) => (
        <SellCard key={item.title} item={item} />
      ))}
    </div>
  );
}
