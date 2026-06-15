"use client";

import { Store, Microscope, Handshake, Banknote, ChevronRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROCESS_STEPS } from "@/data/business";

// One icon per step (PROCESS_STEPS is order-stable in business.ts).
const ICONS: LucideIcon[] = [Store, Microscope, Handshake, Banknote];

export function ProcessBeam() {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PROCESS_STEPS.map((step, i) => {
        const Icon = ICONS[i] ?? Store;
        const last = i === PROCESS_STEPS.length - 1;
        return (
          <Reveal as="li" key={step.n} delay={i * 0.1} className="group relative">
            <div className="relative h-full overflow-hidden rounded-2xl border border-ink-900/8 bg-cream-50 p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-gold)]">
              {/* top hairline accent */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-80" />

              {/* ghost step number */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-1 select-none font-display text-[5.5rem] font-bold leading-none text-gold-100"
              >
                {String(step.n).padStart(2, "0")}
              </span>

              {/* soft icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/80 transition-colors duration-300 group-hover:bg-gold-100">
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>

            {/* connector between cards (single-row desktop only) */}
            {!last && (
              <span
                aria-hidden
                className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 lg:grid lg:h-8 lg:w-8 lg:place-items-center lg:rounded-full lg:border lg:border-gold-200 lg:bg-cream-50 lg:text-gold-500 lg:shadow-sm"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
              </span>
            )}
          </Reveal>
        );
      })}
    </ol>
  );
}
