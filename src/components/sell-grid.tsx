import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// "What can you sell?" catalog grid. Each card is a full-bleed square photo
// with a short title + qualifier body underneath — same card language as
// ProductGallery (image on top, hairline-divided body). Each card links to its
// matching service/category page (`href`), so a "Sell yours" click lands on the
// relevant page instead of the generic /locations. A few cards carry a "NEW"
// tag; the final card is a disabled "coming soon" placeholder that keeps the
// grid rhythm.
//
// IMAGES: drop square images into /public/sell/ and set `image` on each item
// (e.g. image: "/sell/gold-jewelry.webp"). While `image` is unset we render the
// `emoji` placeholder so the grid still looks right.
type SellItem = {
  title: string;
  desc: string;
  emoji: string;
  href?: string; // matching deep page; omitted only for the coming-soon card
  image?: string;
  tag?: string;
  comingSoon?: boolean;
};

const ITEMS: SellItem[] = [
  { title: "Gold Jewelry", desc: "All karats, any condition", emoji: "💍", href: "/jewelry/sell-gold-jewelry", image: "/sell/gold-jewelry.webp" },
  { title: "Scrap Gold", desc: "Broken, bent, tangled", emoji: "🔧", href: "/jewelry/sell-your-scrap-gold-jewelry", image: "/sell/scrap-gold.webp" },
  { title: "Silver Jewelry", desc: "Sterling .925 & above", emoji: "✨", href: "/jewelry/sell-silver-jewelry", image: "/sell/silver-jewelry.webp" },
  { title: "Gold Coins", desc: "90% of spot", emoji: "🪙", href: "/coins/sell-gold-coins", image: "/sell/gold-coins.webp" },
  { title: "Silver Coins", desc: "Junk silver & collectibles", emoji: "🥇", href: "/coins/sell-silver-coins", image: "/sell/silver-coins.webp" },
  { title: "Bullion Bars", desc: "Gold 90% · Silver 85%", emoji: "🟨", href: "/precious-metals", image: "/sell/bullion-bars.webp" },
  { title: "Diamonds", desc: "Certified, 1.5ct & above", emoji: "💎", href: "/precious-stones/sell-diamonds", image: "/sell/diamonds.webp" },
  { title: "Rolex & Watches", desc: "Rolex, Omega, Cartier…", emoji: "⌚", href: "/watches/sell-rolex", image: "/sell/watches.webp" },
  { title: "Platinum Jewelry", desc: "PT950, PT900 & above", emoji: "⬡", href: "/precious-metals/sell-platinum", image: "/sell/platinum-jewelry.webp" },
  { title: "Sterling Silver Sets", desc: "Flatware, tea sets & more", emoji: "🍴", href: "/precious-metals/sell-sterling-silver-sets", image: "/sell/sterling-silver-sets.webp" },
  { title: "Name Brand Jewelry", desc: "Tiffany, Cartier, Yurman…", emoji: "🏷️", href: "/jewelry/sell-designer-jewelry", image: "/sell/name-brand-jewelry.webp" },
  { title: "Palladium", desc: "Rare metal, real value", emoji: "⚛️", tag: "NEW", href: "/precious-metals/sell-your-palladium", image: "/sell/palladium.webp" },
  { title: "Estate & Antique", desc: "Inherited & vintage pieces", emoji: "⏳", href: "/jewelry/sell-your-estate-jewelry", image: "/sell/estate-antique.webp" },
  { title: "Dental Gold", desc: "Crowns, bridges, fillings", emoji: "🦷", tag: "NEW", href: "/precious-metals/sell-dental-gold", image: "/sell/dental-gold.webp" },
  { title: "Gold Filled / Plated", desc: "Know the difference", emoji: "🔍", tag: "NEW", href: "/precious-metals/sell-gold-filled-plated", image: "/sell/gold-filled-plated.webp" },
  { title: "Sell Online", desc: "Ship from home, get paid fast", emoji: "📦", image: "/sell/sell-online.webp", comingSoon: true },
];

// Full-bleed square photo; overlays (NEW / Coming soon) sit on the image so
// the body below stays clean.
function Thumb({ item }: { item: SellItem }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-gold-50">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          fill
          quality={65}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.05] ${item.comingSoon ? "opacity-50 saturate-50" : ""}`}
        />
      ) : (
        <span aria-hidden className="flex h-full w-full items-center justify-center text-5xl">
          {item.emoji}
        </span>
      )}
      {item.tag && (
        <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-green-100 px-2.5 py-1 text-[0.6rem] font-bold uppercase leading-none tracking-wide text-green-700 ring-1 ring-green-600/15">
          {item.tag}
        </span>
      )}
      {item.comingSoon && (
        <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] font-bold uppercase leading-none tracking-wide text-muted ring-1 ring-hairline">
          Coming soon
        </span>
      )}
    </div>
  );
}

// Title + qualifier + a quiet "Sell yours" affordance, divided from the photo
// by a hairline. `flex-1` on the text block equalizes card heights across the
// row so long titles don't break the grid rhythm.
function CardBody({ item }: { item: SellItem }) {
  return (
    <div className="flex flex-1 flex-col border-t border-hairline p-3 sm:p-4">
      <div className="flex-1">
        <h3 className={`font-display text-[15px] font-bold leading-snug sm:text-base ${item.comingSoon ? "text-muted" : "text-foreground"}`}>
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.desc}</p>
      </div>
      {!item.comingSoon && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-700 transition-colors duration-300 group-hover:text-gold-600 sm:text-sm">
          Sell yours
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </span>
      )}
    </div>
  );
}

function SellCard({ item }: { item: SellItem }) {
  if (item.comingSoon) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-hairline bg-cream-50/40">
        <Thumb item={item} />
        <CardBody item={item} />
      </div>
    );
  }
  return (
    <Link
      href={item.href ?? "/locations"}
      aria-label={`Sell ${item.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
    >
      <Thumb item={item} />
      <CardBody item={item} />
    </Link>
  );
}

export function SellGrid() {
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {ITEMS.map((item) => (
        <SellCard key={item.title} item={item} />
      ))}
    </div>
  );
}
