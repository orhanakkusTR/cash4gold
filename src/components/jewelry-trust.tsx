import { Gem, BadgeCheck, Microscope, Banknote, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const VALUE_PROPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Gem, title: "Metal, stones & maker", desc: "Valued beyond melt, for the diamonds, gemstones, and brand, not just the gold." },
  { icon: BadgeCheck, title: "Designers recognized", desc: "Tiffany, Cartier, Van Cleef and other signed pieces identified and paid for." },
  { icon: Microscope, title: "Tested in front of you", desc: "Acid, electronic, and loupe testing, fully transparent, with a clear explanation." },
  { icon: Banknote, title: "Instant payout", desc: "Walk out the same day, no appointment, no obligation to accept." },
];

/** Compact trust strip shown under the Jewelry category hero. */
export function JewelryValueProps() {
  return (
    <section className="container-page pt-14 pb-2">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/80">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{p.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const VALUE_STEPS: { n: number; title: string; desc: string }[] = [
  { n: 1, title: "Test the metal", desc: "We verify karat and purity with acid and electronic testing, then weigh on calibrated, certified scales." },
  { n: 2, title: "Grade the stones", desc: "Diamonds and gemstones are examined under a loupe for carat, color, clarity, and cut." },
  { n: 3, title: "Identify the maker", desc: "Hallmarks and designer signatures, Tiffany, Cartier, Bulgari, can add value well above the metal." },
  { n: 4, title: "Price to the market", desc: "Your offer reflects the live precious-metal market plus any designer or collectible premium." },
];

/** "How we value your jewelry" steps, E-E-A-T depth for the money topic. */
export function JewelryHowWeValue({ itemLabel = "jewelry" }: { itemLabel?: string }) {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Our process"
        title={`How we value your ${itemLabel}`}
        description="A transparent, four-step appraisal done in front of you, so you understand exactly how your offer is reached."
      />
      <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 0.1} className="group relative">
            <div className="relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-cream-50 p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-gold)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-80" />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-1 select-none font-display text-[5.5rem] font-bold leading-none text-gold-100"
              >
                {String(step.n).padStart(2, "0")}
              </span>
              <h3 className="relative font-display text-lg font-extrabold text-foreground">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
