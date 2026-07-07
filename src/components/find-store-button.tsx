import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

/**
 * Gold CTA linking to the /find-cash-for-gold-store finder. Placed under the
 * "Areas we also serve" chip lists so visitors can jump straight to the
 * nearest-store search.
 */
export function FindStoreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/find-cash-for-gold-store"
      className={`group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 font-bold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <Search className="h-5 w-5" strokeWidth={2.5} />
      Find Cash for Gold Store
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
