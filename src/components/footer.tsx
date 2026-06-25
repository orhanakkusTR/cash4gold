import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import { SITE, CATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.4.52A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.12c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.12C24 15.6 24 12 24 12s0-3.6-.5-5.5ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/brand/c4g-logo.png" alt="Cash for Gold VA" width={1993} height={395} className="h-16 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{SITE.tagline}</p>
          <div className="mt-4 flex items-center gap-1.5 text-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span className="text-cream-100/80">
              {SITE.rating.value} · {SITE.rating.count}+ reviews
            </span>
          </div>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full bg-cream-50/5 p-2.5 transition-colors hover:bg-gold-500/15 hover:text-gold-300">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="rounded-full bg-cream-50/5 p-2.5 transition-colors hover:bg-gold-500/15 hover:text-gold-300">
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* What we buy */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">What We Buy</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="transition-colors hover:text-gold-200">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/precious-metals/sell-sterling-silver-sets" className="transition-colors hover:text-gold-200">
                Sterling Silver
              </Link>
            </li>
            <li>
              <Link href="/jewelry/sell-your-scrap-gold-jewelry" className="transition-colors hover:text-gold-200">
                Scrap Gold
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">Our Locations</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-2">
            {LOCATIONS.map((l) => (
              <li key={l.slug} className="text-sm">
                <Link href={`/locations/${l.slug}`} className="font-semibold text-cream-50 transition-colors hover:text-gold-200">
                  {l.city}
                </Link>
                <a
                  href={l.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-start gap-1.5 text-cream-100/60 transition-colors hover:text-gold-200"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                  {l.street}, {l.city}, {l.region} {l.postalCode}
                </a>
                <a href={`tel:${l.phoneHref}`} className="mt-1 flex items-center gap-1.5 text-cream-100/80 transition-colors hover:text-gold-200">
                  <Phone className="h-3.5 w-3.5 text-gold-400" />
                  {l.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule-gold opacity-30" />
      <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/50 sm:flex-row">
        <p>© {2026} {SITE.legalName}. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-5">
          {SHOW_CALCULATOR && <Link href="/gold-calculator" className="hover:text-gold-200">What&apos;s It Worth?</Link>}
          <Link href="/blog" className="hover:text-gold-200">Blog</Link>
          <Link href="/privacy" className="hover:text-gold-200">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold-200">Terms</Link>
          <Link href="/contact-us-cash-for-gold-locations" className="hover:text-gold-200">Contact</Link>
        </div>
      </div>

      {/* Rolex trademark disclaimer */}
      <div className="border-t border-cream-100/10 py-6">
        <div className="container-page">
          <p className="text-[0.7rem] leading-relaxed text-cream-100/35">
            Copyright CASH FOR GOLD. All rights reserved. CASH FOR GOLD is not affiliated with Rolex S.A., Rolex USA, or any of its subsidiaries. CASH FOR GOLD is an independent watch dealer and is not sponsored by, associated with and/or affiliated with Rolex, S.A. CASH FOR GOLD buys Rolex watches and provides its own warranties on the watches it sells. Rolex, www.rolex.com, is under no obligation to warranty-service watches bought by CASH FOR GOLD. Rolex Datejust, Rolex Day Date President, Submariner, Presidential, Explorer, Sea Dweller, Super President, GMT Master, GMT, YachtMaster, Prince, Milgaus, MasterPiece, Air King, Cosmograph Daytona, and PearlMaster are all registered trademarks of the Rolex Corporation (Rolex USA, Rolex S.A.) To buy a new Rolex watch, please visit rolex.com for a list of authorized Rolex dealers near you.
          </p>
        </div>
      </div>

    </footer>
  );
}
