import Link from "next/link";
import { ChevronRight, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PRIMARY_PHONE, PRIMARY_PHONE_HREF } from "@/data/business";

/** Dark inner-page hero band with breadcrumb. */
export function PageHero({
  eyebrow,
  title,
  headline,
  description,
  actions,
  crumbs,
  glowClass = "bg-gold-500/12",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  /** Optional punchy line shown directly below the H1 (business brief headline). */
  headline?: string;
  description?: string;
  /** Optional CTA(s) rendered below the description. */
  actions?: React.ReactNode;
  crumbs: { name: string; href: string }[];
  /** Tailwind bg color for the ambient hero glow, e.g. metalTone(...).glow. */
  glowClass?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-40 pb-16 sm:pt-48 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className={`absolute -top-32 left-1/3 h-80 w-80 rounded-full ${glowClass} blur-[120px]`} />
      </div>
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream-100/50">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {i < crumbs.length - 1 ? (
                  <Link href={c.href} className="transition-colors hover:text-gold-200">{c.name}</Link>
                ) : (
                  <span className="text-cream-100/80">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Reveal>
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-px w-6 bg-gold-400" /> {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] text-cream-50 sm:text-5xl">
            {title}
          </h1>
          {headline && (
            <p className="mt-4 max-w-3xl text-balance font-display text-xl font-semibold leading-snug text-gold-200 sm:text-2xl">{headline}</p>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-cream-100/75">{description}</p>
          )}
          {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">{actions}</div>}
        </Reveal>
      </div>
    </section>
  );
}

/** Gold CTA band used at the bottom of inner pages. */
export function CtaBand({
  title = "Ready to turn your valuables into cash?",
  description = "Walk into any Northern Virginia location or request a free quote online anytime, and you only sell if you love the offer.",
  phone = PRIMARY_PHONE,
  phoneHref = PRIMARY_PHONE_HREF,
}: {
  title?: React.ReactNode;
  description?: string;
  /** Override the call button (e.g. a city page's nearest store). Defaults to the primary location. */
  phone?: string;
  phoneHref?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-16 text-center ring-1 ring-gold-500/25 shadow-[var(--shadow-card)] sm:px-16 sm:py-20">
          {/* ambient gold glow + fine accents */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold-500/20 blur-[110px]" />
            <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-gold-600/10 blur-[90px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              <span className="h-px w-6 bg-gold-400" /> Free appraisal
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-cream-100/70">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`tel:${phoneHref}`}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
                <Phone className="h-5 w-5" /> Call {phone}
              </a>
              <Link href="/contact-us-cash-for-gold-locations"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-cream-50/25 px-8 font-semibold text-cream-50 transition-colors hover:border-gold-400/60 hover:bg-white/5">
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Simple prose section wrapper. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_strong]:text-foreground [&_a]:text-gold-700 [&_a]:underline [&_a]:underline-offset-2">
      {children}
    </div>
  );
}
