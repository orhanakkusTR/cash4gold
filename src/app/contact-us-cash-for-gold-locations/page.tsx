import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { LOCATIONS } from "@/data/business";
import { groupHours } from "@/lib/utils";
import { PageHero } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { OpenStatus } from "@/components/open-status";
import { CredentialsStrip } from "@/components/credentials-strip";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const CONTACT_PATH = "/contact-us-cash-for-gold-locations";

export const metadata: Metadata = {
  title: "Contact Us, Cash for Gold in Northern Virginia",
  description: "Visit or call Cash for Gold VA for a free, no-obligation appraisal on your gold, diamonds, jewelry, and coins. Four Northern Virginia locations, no appointment needed.",
  alternates: { canonical: CONTACT_PATH },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Contact", url: CONTACT_PATH }]} />
      <PageHero
        eyebrow="Contact"
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: CONTACT_PATH }]}
        title={<>Visit or call your <span className="text-gold-shimmer">nearest location</span></>}
        description="Walk into any of our four Northern Virginia stores for a free, no-obligation appraisal and instant payout, no appointment needed. Or call ahead for a quick answer."
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-foreground">Our locations</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 2) * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
                {/* Storefront image with city + live status overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                  <Image
                    src={l.image}
                    alt={`Cash for Gold VA storefront in ${l.city}, VA`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <h3 className="font-display text-2xl font-extrabold text-cream-50">{l.city}</h3>
                    <OpenStatus hours={l.hours} tone="light" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <a
                    href={l.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-gold-700"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {l.street}, {l.city}, {l.region} {l.postalCode}
                  </a>

                  <div className="mt-3 flex items-start gap-2 text-sm text-muted">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <div className="w-full space-y-0.5">
                      {groupHours(l.hours).map((g) => (
                        <div key={g.label} className="flex justify-between gap-4">
                          <span className="font-medium text-foreground/70">{g.label}</span>
                          <span>{g.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={`tel:${l.phoneHref}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.5} /> {l.phone}
                    </a>
                    <a
                      href={l.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gold-500/50 px-4 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:-translate-y-0.5 hover:bg-gold-50"
                    >
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Accreditations, above the footer */}
      <section className="container-page pb-16">
        <Reveal>
          <CredentialsStrip />
        </Reveal>
      </section>
    </>
  );
}
