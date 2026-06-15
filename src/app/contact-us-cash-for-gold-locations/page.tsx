import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS } from "@/data/business";
import { formatHours } from "@/lib/utils";
import { PageHero } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { QuoteForm } from "@/components/quote-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const CONTACT_PATH = "/contact-us-cash-for-gold-locations";

export const metadata: Metadata = {
  title: "Contact Us, Cash for Gold Locations & Free Quote",
  description: "Contact Cash for Gold VA for a free, no-obligation quote on your gold, diamonds, jewelry, and coins. Four Northern Virginia locations. Call or request a quote online.",
  alternates: { canonical: CONTACT_PATH },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Contact", url: CONTACT_PATH }]} />
      <PageHero
        eyebrow="Contact"
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: CONTACT_PATH }]}
        title={<>Get your free, <span className="text-gold-shimmer">no-obligation quote</span></>}
        description="Call your nearest location for an instant answer, or send us a few details and we'll get right back to you."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr]">
        <Reveal direction="right">
          <h2 className="font-display text-2xl font-semibold text-foreground">Our locations</h2>
          <div className="mt-6 space-y-5">
            {LOCATIONS.map((l) => (
              <div key={l.slug} className="rounded-2xl border border-hairline bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold text-foreground">{l.city}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {l.street}, {l.city}, {l.region} {l.postalCode}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                  <Clock className="h-4 w-4 shrink-0 text-gold-500" />
                  Mon–Fri {formatHours("10:00", "18:00")} · Sat {formatHours("10:00", "17:00")}
                </p>
                <a href={`tel:${l.phoneHref}`} className="mt-3 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-600">
                  <Phone className="h-4 w-4" /> {l.phone}
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <h2 className="font-display text-2xl font-semibold text-foreground">Request a quote</h2>
          <p className="mt-2 text-muted">Tell us what you have, we&apos;ll reply with a no-obligation estimate.</p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
