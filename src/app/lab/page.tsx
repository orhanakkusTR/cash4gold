import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ArrowRight, ArrowUpRight, Sparkles, MoveRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Design Lab (internal)",
  robots: { index: false, follow: false },
};

/** A labeled demo cell: the component on top, a small mono caption below. */
function Swatch({ id, name, dark, children }: { id: string; name: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-2xl border p-7",
        dark ? "border-white/10 bg-ink-900/40" : "border-hairline bg-white",
      )}
    >
      <div className="flex min-h-14 flex-1 items-center justify-center">{children}</div>
      <div className="text-center">
        <span className={cn("rounded-full px-2 py-0.5 font-mono text-xs font-semibold", dark ? "bg-white/10 text-gold-200" : "bg-gold-50 text-gold-700")}>
          {id}
        </span>
        <p className={cn("mt-1.5 text-xs", dark ? "text-cream-100/55" : "text-muted")}>{name}</p>
      </div>
    </div>
  );
}

function Section({ title, note, children, dark }: { title: string; note?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section className={cn("py-14", dark && "bg-ink-950")}>
      <div className="container-page">
        <h2 className={cn("font-display text-2xl font-semibold sm:text-3xl", dark ? "text-cream-50" : "text-foreground")}>{title}</h2>
        {note && <p className={cn("mt-2 max-w-2xl text-sm", dark ? "text-cream-100/60" : "text-muted")}>{note}</p>}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{children}</div>
      </div>
    </section>
  );
}

export default function LabPage() {
  return (
    <div className="pt-40">
      <div className="container-page pb-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Internal · not linked</span>
        <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">Design Lab</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Buton ve chip varyasyonları. Beğendiklerini ID&apos;leriyle söyle (örn. &quot;B3, E2, ve chip C4&quot;), siteye onları uygularım.
        </p>
      </div>

      {/* ============ KÖŞE YUMUŞAKLIĞI ============ */}
      <Section title="1. Köşe yumuşaklığı (radius)" note="Aynı buton, farklı köşe yuvarlaklığı. Şu an her yerde 'pill' (tam yuvarlak) kullanıyoruz.">
        <Swatch id="R1" name="Pill / full (şu anki)">
          <span className="inline-flex h-12 items-center gap-2 rounded-full bg-gold-500 px-7 font-semibold text-ink-950">Get a Quote</span>
        </Swatch>
        <Swatch id="R2" name="rounded-2xl">
          <span className="inline-flex h-12 items-center gap-2 rounded-2xl bg-gold-500 px-7 font-semibold text-ink-950">Get a Quote</span>
        </Swatch>
        <Swatch id="R3" name="rounded-xl">
          <span className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold-500 px-7 font-semibold text-ink-950">Get a Quote</span>
        </Swatch>
        <Swatch id="R4" name="rounded-lg (keskin-ish)">
          <span className="inline-flex h-12 items-center gap-2 rounded-lg bg-gold-500 px-7 font-semibold text-ink-950">Get a Quote</span>
        </Swatch>
      </Section>

      {/* ============ MEVCUT VARYANTLAR ============ */}
      <Section title="2. Mevcut sistem varyantları" note="Şu an kodda olan buttonClass() varyantları. Hover'da hafif kalkma + ışık süpürme (sheen) var.">
        <Swatch id="V1" name="gold (primary)">
          <span className={buttonClass("gold", "md")}><span className="relative z-10 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Call</span></span>
        </Swatch>
        <Swatch id="V2" name="dark / ink">
          <span className={buttonClass("dark", "md")}><span className="relative z-10">Get a Quote</span></span>
        </Swatch>
        <Swatch id="V3" name="silver (metalik)">
          <span className={buttonClass("silver", "md")}><span className="relative z-10">Get a Quote</span></span>
        </Swatch>
        <Swatch id="V4" name="outline (cam)">
          <span className={buttonClass("outline", "md")}><span className="relative z-10">Get a Quote</span></span>
        </Swatch>
      </Section>

      {/* ============ EFEKTLİ / ANIMASYONLU ============ */}
      <Section title="3. Efektli & animasyonlu butonlar" note="Daha 'distinctive' seçenekler. Bazıları hover'da, bazıları sürekli animasyonlu (canlı görmek için fareyle üzerine gel).">
        <Swatch id="E1" name="Gold gradient">
          <button className="group relative inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-7 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-10px_rgba(163,120,31,0.65)]">
            Get a Quote
          </button>
        </Swatch>

        <Swatch id="E2" name="Arrow slide">
          <button className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink-900 px-7 font-semibold text-cream-50 transition-colors hover:bg-ink-800">
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </Swatch>

        <Swatch id="E3" name="Glow pulse">
          <button className="inline-flex h-12 items-center gap-2 rounded-full bg-ink-900 px-7 font-semibold text-cream-50 ring-1 ring-gold-400/40 transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(212,169,66,0.65)]">
            <Sparkles className="h-4 w-4 text-gold-300" /> Get a Quote
          </button>
        </Swatch>

        <Swatch id="E4" name="Gloss / shine top">
          <button className="relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-gold-500 px-7 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/55 to-transparent" />
            <span className="relative">Get a Quote</span>
          </button>
        </Swatch>

        <Swatch id="E5" name="Gradient border (ince çerçeve)">
          <span className="inline-flex rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 p-[1.5px] shadow-[var(--shadow-gold)]">
            <span className="inline-flex h-[2.85rem] items-center gap-2 rounded-full bg-white px-6 font-semibold text-gold-700 transition-colors hover:bg-gold-50">
              Get a Quote
            </span>
          </span>
        </Swatch>

        <Swatch id="E6" name="Icon-split (daire ikon)">
          <button className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink-900 py-1 pl-1 pr-5 font-semibold text-cream-50 transition-colors hover:bg-ink-800">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-ink-950 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
            Get a Quote
          </button>
        </Swatch>

        <Swatch id="E7" name="Underline grow (text)">
          <button className="group inline-flex items-center gap-1.5 font-semibold text-foreground">
            Get a Quote
            <MoveRight className="h-4 w-4 text-gold-600" />
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </Swatch>

        <Swatch id="E8" name="Shimmer (sürekli)">
          <ShimmerButton background="#141009" shimmerColor="#e0bd66" className="h-12 font-semibold">
            Get a Quote
          </ShimmerButton>
        </Swatch>

        <Swatch id="E9" name="Border beam (akan çerçeve)">
          <span className="relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full border border-hairline bg-white px-7 font-semibold text-foreground">
            Get a Quote
            <BorderBeam size={70} duration={5} colorFrom="#e0bd66" colorTo="#7e5d18" />
          </span>
        </Swatch>

        <Swatch id="E10" name="3D / pressable">
          <button className="inline-flex h-12 translate-y-0 items-center gap-2 rounded-full bg-gold-500 px-7 font-semibold text-ink-950 shadow-[0_5px_0_0_#7e5d18] transition-all active:translate-y-1 active:shadow-[0_1px_0_0_#7e5d18]">
            Get a Quote
          </button>
        </Swatch>

        <Swatch id="E11" name="Soft tint (gold-50)">
          <button className="inline-flex h-12 items-center gap-2 rounded-full bg-gold-50 px-7 font-semibold text-gold-700 ring-1 ring-gold-500/25 transition-colors hover:bg-gold-100">
            Get a Quote
          </button>
        </Swatch>

        <Swatch id="E12" name="Outline → fill (hover dolar)">
          <button className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full border-2 border-gold-500 px-7 font-semibold text-gold-700 transition-colors duration-300 hover:text-ink-950">
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10">Get a Quote</span>
          </button>
        </Swatch>
      </Section>

      {/* ============ KOYU ZEMİN ============ */}
      <Section title="4. Koyu zeminde (hero gibi)" note="Aynı butonlar koyu arka planda nasıl duruyor (hero alanı bağlamı)." dark>
        <Swatch id="D1" name="gold" dark>
          <span className={buttonClass("gold", "md")}><span className="relative z-10 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Call</span></span>
        </Swatch>
        <Swatch id="D2" name="outline (cam, koyu)" dark>
          <span className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 font-semibold text-cream-50 backdrop-blur-sm transition-colors hover:bg-white/10">Get a Quote</span>
        </Swatch>
        <Swatch id="D3" name="shimmer" dark>
          <ShimmerButton background="rgba(0,0,0,0.4)" shimmerColor="#e0bd66" className="h-12 font-semibold">Get a Quote</ShimmerButton>
        </Swatch>
        <Swatch id="D4" name="gradient" dark>
          <button className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-7 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">Get a Quote</button>
        </Swatch>
      </Section>

      {/* ============ BOYUTLAR & İKON BUTONLAR ============ */}
      <Section title="5. Boyutlar & ikon butonlar">
        <Swatch id="S1" name="sm / md / lg">
          <div className="flex flex-col items-center gap-2">
            <span className={buttonClass("gold", "sm")}><span className="relative z-10">Small</span></span>
            <span className={buttonClass("gold", "md")}><span className="relative z-10">Medium</span></span>
            <span className={buttonClass("gold", "lg")}><span className="relative z-10">Large</span></span>
          </div>
        </Swatch>
        <Swatch id="I1" name="Round icon (solid)">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"><Phone className="h-5 w-5" /></span>
        </Swatch>
        <Swatch id="I2" name="Round icon (outline)">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900/12 text-foreground transition-colors hover:border-gold-400 hover:text-gold-700"><ArrowUpRight className="h-5 w-5" /></span>
        </Swatch>
        <Swatch id="I3" name="Pill + icon + text">
          <span className="inline-flex h-12 items-center gap-2 rounded-full border border-gold-500/40 px-5 font-semibold text-gold-700 transition-colors hover:bg-gold-50"><Phone className="h-4 w-4" /> (571) 290-8020</span>
        </Swatch>
      </Section>

      {/* ============ CHIP / PILL ============ */}
      <Section title="6. Chip / pill varyasyonları" note="'What We Buy' bölümündeki gibi küçük etiket componentleri. C1 şu an kullandığımız (foto thumbnail'li) versiyon.">
        <Swatch id="C1" name="Glass + thumbnail (şu anki)">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white py-1.5 pl-1.5 pr-4 shadow-[var(--shadow-card)]">
            <span className="relative h-8 w-8 overflow-hidden rounded-full bg-cream-100"><Image src="/products/jewelry/ring.jpg" alt="" fill sizes="32px" className="object-cover" /></span>
            <span className="text-sm font-semibold text-foreground">Jewelry</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-gold-500" />
          </span>
        </Swatch>
        <Swatch id="C2" name="Outline simple">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-medium text-gold-700">Precious Metals <ArrowRight className="h-3.5 w-3.5" /></span>
        </Swatch>
        <Swatch id="C3" name="Soft tint">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700 ring-1 ring-gold-500/20">Coins <ArrowUpRight className="h-3.5 w-3.5" /></span>
        </Swatch>
        <Swatch id="C4" name="Dark solid">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-cream-50">Diamonds <ArrowUpRight className="h-3.5 w-3.5 text-gold-300" /></span>
        </Swatch>
        <Swatch id="C5" name="Icon dot + label">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-ink-950"><Sparkles className="h-3 w-3" /></span>
            Jewelry
          </span>
        </Swatch>
        <Swatch id="C6" name="Gradient border">
          <span className="inline-flex rounded-full bg-gradient-to-r from-gold-300 to-gold-600 p-[1.5px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gold-700">Precious Stones</span>
          </span>
        </Swatch>
        <Swatch id="C7" name="Square soft (rounded-xl)">
          <span className="inline-flex items-center gap-2 rounded-xl border border-hairline bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]">
            <Image src="/products/gold/eagle.jpg" alt="" width={24} height={24} className="rounded-md" /> Coins
          </span>
        </Swatch>
        <Swatch id="C8" name="Tag (mini)">
          <span className="inline-flex items-center rounded-md bg-gold-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gold-800">Gold</span>
        </Swatch>
      </Section>

      {/* ============ KESKİN / EDİTÖRYEL (LÜKS) ============ */}
      <Section
        title="7. Keskin / editöryel (lüks) alternatif"
        note="Yuvarlak dilin tam zıttı: keskin köşe, ince çizgi, uppercase + harf aralıklı yazı. Cartier/Tiffany türü 'boutique' his. Yukarıdaki yuvarlaklarla kıyasla."
      >
        <Swatch id="SH1" name="Sharp solid (rounded-none)">
          <button className="inline-flex h-12 items-center gap-2 bg-ink-950 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-cream-50 transition-colors hover:bg-gold-600 hover:text-ink-950">
            Get a Quote
          </button>
        </Swatch>
        <Swatch id="SH2" name="Thin outline (editöryel)">
          <button className="inline-flex h-12 items-center gap-3 border border-ink-900/30 px-8 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold-500 hover:text-gold-700">
            Get a Quote
          </button>
        </Swatch>
        <Swatch id="SH3" name="Gold sharp">
          <button className="inline-flex h-12 items-center gap-2 bg-gold-500 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 transition-transform hover:-translate-y-0.5">
            Get a Quote
          </button>
        </Swatch>
        <Swatch id="SH4" name="Underline-only (en lüks)">
          <button className="group inline-flex flex-col items-start gap-1.5 text-sm font-medium uppercase tracking-[0.22em] text-foreground">
            Get a Quote
            <span className="h-px w-full bg-gold-600 transition-all duration-300 group-hover:bg-foreground" />
          </button>
        </Swatch>
        <Swatch id="SH5" name="Corner brackets">
          <button className="relative inline-flex h-12 items-center px-8 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold-700">
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-gold-500" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-gold-500" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-gold-500" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-gold-500" />
            Get a Quote
          </button>
        </Swatch>
        <Swatch id="SH6" name="Micro-radius (rounded-[3px])">
          <button className="inline-flex h-12 items-center gap-2 rounded-[3px] bg-ink-950 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-cream-50 transition-colors hover:bg-ink-800">
            Get a Quote
          </button>
        </Swatch>
        <Swatch id="SH7" name="Sharp tag chip">
          <span className="inline-flex items-center bg-ink-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">Diamonds</span>
        </Swatch>
        <Swatch id="SH8" name="Thin-border chip">
          <span className="inline-flex items-center gap-2 border border-ink-900/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground">Precious Metals</span>
        </Swatch>
      </Section>

      <div className="container-page py-16">
        <p className="text-sm text-muted">
          Beğendiklerini ID&apos;leriyle yaz (örn. <span className="font-mono text-gold-700">R2, E2, E9, C3</span> veya keskin set <span className="font-mono text-gold-700">SH2, SH4</span>). Yuvarlak mı, keskin mi, yoksa hibrit mi gitmek istediğini söyle; seçtiklerini siteye uygularım.
        </p>
      </div>
    </div>
  );
}
