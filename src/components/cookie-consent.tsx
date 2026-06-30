"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// GDPR / Google Consent Mode v2 cookie banner + a persistent "cookie settings"
// re-open button.
//
// How the choice is honored:
//  • Accept  → consent 'granted' for analytics + ads (full GA, cookies set).
//  • Decline → consent 'denied'; GA keeps running in Consent Mode's cookieless
//              ping mode (anonymous, no cookies) so we still get modeled data,
//              while respecting the refusal. Our own /api/track analytics is
//              cookieless + PII-free and runs regardless.
// Default consent (denied in the EEA/UK, granted elsewhere) is set by an inline
// bootstrap in the root layout <head>, before GA loads.
//
// The re-open button sits BOTTOM-LEFT on purpose: the mobile locations FAB lives
// bottom-right, so this avoids overlapping it.

const STORAGE_KEY = "c4g-cookie-consent";

// gtag-compatible push (mirrors `function gtag(){dataLayer.push(arguments)}`).
function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

function applyConsent(value: "granted" | "denied") {
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

// "hidden" until mounted (so SSR renders nothing → no hydration mismatch).
// First visit → "banner". After a choice: "hidden" if accepted (nothing shown),
// "button" if declined (a small re-open bubble so they can change their mind).
type View = "hidden" | "banner" | "button";

export function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const show = view === "banner";

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked — show the banner */
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setView(saved === "granted" ? "hidden" : saved === "denied" ? "button" : "banner");
  }, []);

  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    applyConsent(value);
    // Accepted → hide everything. Declined → keep a re-open bubble.
    setView(value === "granted" ? "hidden" : "button");
  }

  if (view === "hidden") return null;

  return (
    <>
      {/* Bottom-left re-open button (shown whenever the banner is closed). */}
      <AnimatePresence>
        {!show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setView("banner")}
            aria-label="Cookie settings"
            className="fixed bottom-4 left-4 z-[60] flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 bg-ink-950/80 text-gold-300 shadow-lg shadow-ink-950/30 backdrop-blur-sm transition-colors hover:border-gold-400/60 hover:text-gold-200"
          >
            <Cookie className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Consent banner */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-2xl border border-cream-50/12 bg-ink-950/95 p-4 shadow-2xl backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <Cookie className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-cream-100/80">
                  We use cookies to analyze traffic and personalize ads. You can accept or
                  decline — declining keeps non-essential cookies off.{" "}
                  <Link href="/privacy" className="font-semibold text-gold-300 underline-offset-2 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 gap-2.5 sm:ml-auto">
                <button
                  onClick={() => choose("denied")}
                  className="flex-1 whitespace-nowrap rounded-full border border-cream-50/20 px-5 py-2.5 text-sm font-semibold text-cream-100/80 transition-colors hover:border-cream-50/40 hover:text-cream-50 sm:flex-none"
                >
                  Decline
                </button>
                <button
                  onClick={() => choose("granted")}
                  className="flex-1 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 sm:flex-none"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
