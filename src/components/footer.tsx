import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import { SITE, CATEGORIES, LOCATIONS, SHOW_CALCULATOR } from "@/data/business";
import { GoogleG } from "@/components/google-rating";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
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
          <a
            href={(LOCATIONS.find((l) => l.slug === "chantilly") ?? LOCATIONS[0]).mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.rating.value} stars from ${SITE.rating.count}+ Google reviews`}
            className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-cream-50 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <GoogleG className="h-7 w-7 shrink-0" />
            <span className="text-left">
              <span className="flex items-center gap-1.5">
                <span className="font-display text-lg font-bold leading-none text-ink-900">{SITE.rating.value}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </span>
              </span>
              <span className="mt-0.5 block text-xs text-ink-900/60">{SITE.rating.count}+ Google reviews</span>
            </span>
          </a>
          <div className="mt-5 flex gap-3">
            <span aria-label="Instagram" className="rounded-full bg-cream-50/5 p-2.5 text-cream-100/70">
              <InstagramIcon className="h-4 w-4" />
            </span>
            <span aria-label="Facebook" className="rounded-full bg-cream-50/5 p-2.5 text-cream-100/70">
              <FacebookIcon className="h-4 w-4" />
            </span>
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
              <li key={l.slug} className="rounded-xl border border-cream-50/10 p-4 text-sm transition-colors hover:border-cream-50/20">
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

    </footer>
  );
}
