import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE, PRIMARY_LOCATION } from "@/data/business";
import { PageHero, Prose } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cash for Gold VA collects, uses, shares, and protects your information, and your privacy rights.",
  alternates: { canonical: "/privacy" },
};

// Approved by counsel 2026-07-15 and now indexable (noindex removed). Describes
// the site's actual data practices: Google Analytics/Ads with Consent Mode, the
// OpenAI advertising pixel, first-party click analytics in our own database,
// Google Maps embeds, and cookies.

/** Table-of-contents entries — each maps to an h2 id below. */
const TOC = [
  { id: "definitions", label: "Definitions" },
  { id: "information-you-provide", label: "Information you provide" },
  { id: "information-collected-automatically", label: "Information collected automatically" },
  { id: "advertising-and-analytics-partners", label: "Advertising and analytics partners" },
  { id: "our-own-website-analytics", label: "Our own website analytics" },
  { id: "embedded-content", label: "Embedded content" },
  { id: "cookies-and-your-choices", label: "Cookies and your choices" },
  { id: "data-retention", label: "Data retention" },
  { id: "your-virginia-privacy-rights", label: "Your Virginia privacy rights" },
  { id: "children", label: "Children" },
  { id: "changes-to-this-policy", label: "Changes to this policy" },
  { id: "contact", label: "Contact Us" },
];

/** Key terms used in this policy — written for our actual data practices. */
const DEFINITIONS: { term: string; def: React.ReactNode }[] = [
  {
    term: "We / Us / Our",
    def: (
      <>
        <strong className="font-semibold text-foreground">Cash for Gold VA</strong>, the Northern
        Virginia precious-metals buyer that operates this website and the stores listed on it.
      </>
    ),
  },
  {
    term: "Site",
    def: "This website, cashforgoldva.com, including all of its pages.",
  },
  {
    term: "Personal Data",
    def: "Information that identifies you as a person, such as your name, phone number, or email address.",
  },
  {
    term: "Usage Data",
    def: "Information collected automatically as you use the Site, such as your device and browser type, pages viewed, links tapped, and approximate location derived from your IP address.",
  },
  {
    term: "Cookies",
    def: "Small files stored on your device that help the Site remember your choices and help our analytics and advertising tools work.",
  },
  {
    term: "Service Providers",
    def: "Third parties that process data on our behalf as described in this policy, such as Google and OpenAI.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]}
        title="Privacy Policy"
      />
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <Prose>
            <p><em>Last updated: July 15, 2026.</em></p>

            <p>
              This Privacy Policy explains how <strong>{SITE.legalName}</strong> (&quot;we,&quot; &quot;us&quot;) collects,
              uses, shares, and protects information when you visit this website or contact us. It
              also describes the privacy rights available to Virginia residents.
            </p>
          </Prose>

          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="my-10 rounded-2xl border border-gold-500/25 bg-gold-50/50 p-6 sm:p-7"
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              <span className="h-px w-6 bg-gold-500" aria-hidden /> On this page
            </p>
            <ol className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="group inline-flex items-baseline gap-2.5">
                    <span className="font-display text-xs font-semibold tabular-nums text-gold-600" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-gold-700">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Definitions */}
          <Prose>
            <h2 id="definitions" className="scroll-mt-28 !font-bold">Definitions</h2>
            <p>A few terms used throughout this policy:</p>
          </Prose>
          <dl className="mt-5 divide-y divide-hairline rounded-2xl border border-hairline bg-cream-100 shadow-sm">
            {DEFINITIONS.map((d) => (
              <div key={d.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-6">
                <dt className="font-display text-sm font-semibold text-foreground">{d.term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{d.def}</dd>
              </div>
            ))}
          </dl>

          {/* Policy body */}
          <Prose>
            <h2 id="information-you-provide" className="scroll-mt-28 !font-bold">Information you provide</h2>
            <p>
              When you call, email, or visit one of{" "}
              <Link href="/locations">our stores</Link>, you may share information such as your
              name, phone number, email address, and details about items you want to sell. We use this
              only to respond to you, provide a quote, and complete a transaction you request.
            </p>
            <p>
              This website does not currently offer an online quote form; enquiries reach us by phone,
              email, or in person.
            </p>

            <h2 id="information-collected-automatically" className="scroll-mt-28 !font-bold">Information collected automatically</h2>
            <p>
              When you use the site, some information is collected automatically through cookies and
              similar technologies, including your device and browser type, pages viewed, the links
              you tap (such as call and directions buttons), approximate location derived from your IP
              address, and referring pages.
            </p>
            <p>
              We use this to understand how the site is used, measure the performance of our
              advertising, and improve the site.
            </p>

            <h2 id="advertising-and-analytics-partners" className="scroll-mt-28 !font-bold">Advertising and analytics partners</h2>
            <p>We use the following third-party services, which may set cookies or receive data about your visit:</p>
            <ul className="list-disc space-y-3 pl-5 marker:text-gold-500">
              <li>
                <strong>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Google Analytics and Google Ads
                  </a>
                </strong>{" "}
                (Google LLC) — to measure site usage
                and the performance of our ads, and to record conversions such as calls and directions
                requests. We run Google Consent Mode: until you accept cookies, Google is limited to
                anonymous, cookieless measurement, and visitors in the EEA/UK are set to denied by
                default.
              </li>
              <li>
                <strong>
                  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
                    OpenAI advertising pixel
                  </a>
                </strong>{" "}
                (OpenAI) — to measure the performance of
                advertising, including when a visit leads to a phone call.
              </li>
            </ul>
            <p>These partners process data under their own privacy policies.</p>
            <p>
              We do not sell your personal information for money, and we do not share it for
              cross-context behavioral advertising except through the advertising and analytics
              services described here — which you can turn off using the cookie controls below.
            </p>

            <h2 id="our-own-website-analytics" className="scroll-mt-28 !font-bold">Our own website analytics</h2>
            <p>
              We also keep first-party analytics in our own database to see which pages and buttons are
              used. These records do not use cookies and do not include your name, email, or phone
              number.
            </p>
            <p>
              Your IP address is converted into a one-way, non-reversible code before storage
              (we never store the raw IP), alongside a coarse device type (mobile or desktop), the page,
              and which store or link was involved.
            </p>

            <h2 id="embedded-content" className="scroll-mt-28 !font-bold">Embedded content</h2>
            <p>
              Our <Link href="/locations">store location pages</Link> include an embedded Google Map so you can find and get directions
              to us. When a map loads, Google may receive information about your visit under its own
              privacy policy.
            </p>

            <h2 id="cookies-and-your-choices" className="scroll-mt-28 !font-bold">Cookies and your choices</h2>
            <p>
              We use cookies and similar technologies for analytics and advertising as described above.
              When required, we show a cookie banner so you can accept or decline; your choice is stored
              on your device so we can honor it on future visits.
            </p>
            <p>
              You can also change your browser settings to block or delete cookies. Declining does not
              stop you from using the site.
            </p>

            <h2 id="data-retention" className="scroll-mt-28 !font-bold">Data retention</h2>
            <p>
              We keep enquiry information only as long as needed to serve you and to meet legal or
              accounting obligations.
            </p>
            <p>
              Analytics records are kept for up to 24 months, after which they are automatically
              deleted.
            </p>

            <h2 id="your-virginia-privacy-rights" className="scroll-mt-28 !font-bold">Your Virginia privacy rights</h2>
            <p>
              Under the Virginia Consumer Data Protection Act, Virginia residents may request to access,
              correct, delete, or obtain a copy of their personal data, and may opt out of targeted
              advertising and the sale of personal data.
            </p>
            <p>
              We will not discriminate against you for exercising these rights, and you may appeal a
              decision we make about your request.
            </p>
            <p>
              To make a request, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <p>
              To protect your information, we verify each request against the email address or phone
              number we have on record for you before acting on it, and we respond within the timeframe
              required by law.
            </p>

            <h2 id="children" className="scroll-mt-28 !font-bold">Children</h2>
            <p>This site is intended for adults and is not directed to children under 13.</p>

            <h2 id="changes-to-this-policy" className="scroll-mt-28 !font-bold">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected by
              updating the date at the top of this page.
            </p>

            <h2 id="contact" className="scroll-mt-28 !font-bold">Contact Us</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or see our{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          </Prose>

          {/* Contact card — all details sourced from src/data/business.ts */}
          <div className="relative mt-6 overflow-hidden rounded-2xl bg-ink-950 p-7 ring-1 ring-gold-500/25 sm:p-9">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
              <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-gold-500/15 blur-[90px]" />
            </div>
            <div className="relative">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                <span className="h-px w-6 bg-gold-400" aria-hidden /> Privacy requests &amp; questions
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-cream-50">
                Cash for Gold VA
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden />
                  <p className="text-sm leading-relaxed text-cream-100/80">
                    {PRIMARY_LOCATION.street}
                    <br />
                    {PRIMARY_LOCATION.city}, {PRIMARY_LOCATION.region} {PRIMARY_LOCATION.postalCode}
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${PRIMARY_LOCATION.phoneHref}`}
                    className="flex min-h-11 items-center gap-3 text-sm font-medium text-cream-50 transition-colors hover:text-gold-200"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-gold-300" aria-hidden />
                    {PRIMARY_LOCATION.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex min-h-11 items-center gap-3 text-sm font-medium text-cream-50 transition-colors hover:text-gold-200"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-gold-300" aria-hidden />
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="mt-7 border-t border-cream-50/10 pt-5">
                <Link
                  href="/contact-us-cash-for-gold-locations"
                  className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-200 transition-colors hover:text-gold-100"
                >
                  All locations &amp; contact options
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
