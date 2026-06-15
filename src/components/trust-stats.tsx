import { Star, MessageSquareQuote, MapPin, CalendarClock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sub: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STATS: Stat[] = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Google rating", sub: "Across 342 verified reviews", Icon: Star },
  { value: 342, suffix: "+", label: "5-star reviews", sub: "From real local customers", Icon: MessageSquareQuote },
  { value: 4, label: "VA locations", sub: "Walk in, no appointment", Icon: MapPin },
  { value: 15, suffix: "+", label: "Years buying gold", sub: "Trusted since 2010", Icon: CalendarClock },
];

export function TrustStats() {
  return (
    <section className="bg-white">
      <div className="container-page py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline bg-gradient-to-br from-white via-white to-gold-50/50 shadow-[var(--shadow-card)]">
          {/* faint gold glow, top-left */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gold-200/30 blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={cn(
                  "flex flex-col items-center gap-3 px-5 py-9 text-center sm:px-8",
                  // hairline separators that don't wrap on the grid edges
                  "border-hairline",
                  i % 2 === 1 && "border-l",
                  i >= 2 && "border-t lg:border-t-0",
                  i >= 1 && "lg:border-l",
                )}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/70">
                  <s.Icon className="h-6 w-6" />
                </span>
                <div className="flex items-baseline justify-center font-display text-4xl font-semibold leading-none sm:text-5xl">
                  <NumberTicker value={s.value} decimalPlaces={s.decimals ?? 0} className="text-gold-gradient" />
                  {s.suffix && <span className="text-gold-gradient">{s.suffix}</span>}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{s.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
