"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

/**
 * Decorative animated "100% Trust" seal — the only interactive/motion piece of
 * the homepage hero. Isolated as a small client island (audit P2-22) so
 * `hero.tsx` itself can stay a server component.
 */
export function TrustSeal({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
      animate={{ opacity: 1, scale: 1, rotate: -12 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-28 w-28 rounded-full border border-gold-400/40 bg-ink-950/35 backdrop-blur-md shadow-[0_8px_40px_rgba(212,169,66,0.25)]"
      >
        {/* rotating curved text ring */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full text-gold-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <path id="sealCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-current font-display text-[10.5px] font-semibold uppercase tracking-[0.18em]">
            <textPath href="#sealCircle" startOffset="0%">
              100% Trust Guarantee · Honest Offers ·
            </textPath>
          </text>
        </motion.svg>

        {/* center mark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <ShieldCheck className="h-6 w-6 text-gold-300" strokeWidth={1.75} />
          <span className="mt-0.5 font-display text-xl font-extrabold leading-none text-cream-50">100%</span>
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-cream-100/70">Trust</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
