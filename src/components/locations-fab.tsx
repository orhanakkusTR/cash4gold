"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { LOCATIONS } from "@/data/business";

// Mobile-only floating bubble (bottom-right). Tap to fan out the 4 store
// locations with a staggered animation; tapping one navigates to its page.
export function LocationsFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:hidden">
      {/* Backdrop to catch outside taps */}
      <AnimatePresence>
        {open && (
          <motion.button
            aria-label="Close locations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-ink-950/40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Location list */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
            }}
            className="flex w-60 flex-col gap-2"
          >
            <motion.li
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="mb-1 text-right text-xs font-semibold uppercase tracking-[0.2em] text-cream-50 drop-shadow"
            >
              Our Locations
            </motion.li>
            {LOCATIONS.map((l) => (
              <motion.li
                key={l.slug}
                variants={{ hidden: { opacity: 0, y: 12, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                <Link
                  href={`/locations/${l.slug}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-2 rounded-full border border-hairline bg-white py-2.5 pl-4 pr-2.5 shadow-lg shadow-ink-950/15 transition-colors active:bg-gold-50"
                >
                  <span className="flex items-center gap-2 font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-gold-500" /> {l.city}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200/70">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* The bubble */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close locations" : "Our locations"}
        aria-expanded={open}
        className="flex h-14 items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-5 text-ink-950 shadow-[var(--shadow-gold)] ring-2 ring-white/50"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span key="pin" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MapPin className="h-6 w-6" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="text-sm font-bold">Locations</span>}
      </motion.button>
    </div>
  );
}
