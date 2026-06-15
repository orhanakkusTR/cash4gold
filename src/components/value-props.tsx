"use client";

import { BadgeDollarSign, PackageOpen, Banknote, ShieldCheck, type LucideIcon } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Reveal } from "@/components/reveal";
import { VALUE_PROPS } from "@/data/business";

const ICONS: Record<string, LucideIcon> = { BadgeDollarSign, PackageOpen, Banknote, ShieldCheck };

export function ValueProps() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {VALUE_PROPS.map((v, i) => {
        const Icon = ICONS[v.icon] ?? ShieldCheck;
        return (
          <Reveal key={v.title} delay={i * 0.1} className="h-full">
            <MagicCard
              gradientColor="#f5e6bd"
              gradientFrom="#d4a942"
              gradientTo="#a3781f"
              gradientOpacity={0.5}
              className="h-full rounded-3xl border border-hairline shadow-[var(--shadow-card)]"
            >
              <div className="flex h-full flex-col p-7">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            </MagicCard>
          </Reveal>
        );
      })}
    </div>
  );
}
