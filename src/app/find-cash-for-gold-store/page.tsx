import type { Metadata } from "next";
import { StoreFinder } from "@/components/store-finder";
import { RotatingWord } from "@/components/rotating-word";

// Store-finder: enter a city/neighborhood/ZIP to get the nearest of our 4
// Northern Virginia stores. Indexable (promoted from its test phase) and listed
// in sitemap.ts — targets "cash for gold store near me" intent.
export const metadata: Metadata = {
  title: "Find a Cash for Gold Store Near You in Northern Virginia",
  description:
    "Find your nearest Cash for Gold VA store — enter your city, neighborhood, or ZIP to get directions, hours, and the phone number for the closest of our 4 Northern Virginia locations.",
  alternates: { canonical: "/find-cash-for-gold-store" },
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
          <h1 className="font-display text-4xl font-semibold leading-[1.18] text-cream-50 sm:text-5xl">
            Find your nearest
            <br />
            {/* pb-[0.2em] extends the gradient's padding-box below the baseline so
                text-gold-shimmer (background-clip: text) paints descenders like the
                tail of "g" instead of clipping them. */}
            <RotatingWord className="text-gold-shimmer pb-[0.2em]" words={["Gold", "Silver", "Diamond", "Watch", "Coin"]} />{" "}
            <span className="inline-block pb-[0.2em] text-gold-shimmer">buyer</span>
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
