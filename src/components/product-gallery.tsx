import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { GalleryItem } from "@/data/business";

/**
 * Illustrative "what we buy" product showcase (jmbullion-style tiles, but for
 * buying — image + name + note, never prices). Groups by `item.group` when set.
 */
function Tile({ p, i, cover }: { p: GalleryItem; i: number; cover?: boolean }) {
  return (
    <Reveal delay={(i % 4) * 0.06}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-[var(--shadow-gold)]">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-cream-100 to-white">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
            className={
              cover
                ? "object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                : "object-contain p-4 transition-transform duration-500 group-hover:scale-[1.07]"
            }
          />
        </div>
        <div className="px-1 pt-3">
          <h3 className="font-display text-sm font-bold leading-snug text-foreground">{p.name}</h3>
          {p.note && <p className="mt-0.5 text-xs text-muted">{p.note}</p>}
        </div>
      </div>
    </Reveal>
  );
}

export function ProductGallery({ items, cover }: { items: GalleryItem[]; cover?: boolean }) {
  // Preserve first-seen group order.
  const groups: string[] = [];
  for (const it of items) {
    const g = it.group ?? "";
    if (!groups.includes(g)) groups.push(g);
  }
  const grouped = groups.length > 1 || (groups.length === 1 && groups[0] !== "");

  if (!grouped) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => <Tile key={p.name} p={p} i={i} cover={cover} />)}
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.filter((p) => (p.group ?? "") === g).map((p, i) => <Tile key={p.name} p={p} i={i} cover={cover} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
