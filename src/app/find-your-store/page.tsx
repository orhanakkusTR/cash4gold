import type { Metadata } from "next";
import { StoreFinder } from "@/components/store-finder";

// TEST PAGE — a location-search concept. Kept out of the sitemap (not listed in
// sitemap.ts) and noindex'd so it doesn't get discovered/indexed while we trial
// the idea. Not linked from nav. Delete or promote once the concept is decided.
export const metadata: Metadata = {
  title: "Find Your Nearest Store",
  robots: { index: false, follow: false },
  alternates: { canonical: "/find-your-store" },
};

export default function FindYourStorePage() {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-ink-950 pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Soft gold glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/12 blur-[130px]" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <span className="h-px w-6 bg-gold-400" /> 4 stores across Northern Virginia
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-5xl">
            Find your nearest <span className="text-gold-shimmer">gold buyer</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-cream-100/75">
            Type where you are and we&apos;ll point you to the closest Cash for Gold VA store — free appraisal, instant payout, same visit.
          </p>
        </div>

        <div className="mt-12">
          <StoreFinder />
        </div>
      </div>
    </section>
    {/* Subtle gold divider between this section and the footer */}
    <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </>
  );
}
