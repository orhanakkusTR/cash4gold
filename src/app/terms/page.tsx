import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE, PRIMARY_LOCATION } from "@/data/business";
import { PageHero, Prose } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Cash for Gold VA website and your transactions with us.",
  alternates: { canonical: "/terms" },
};

// Approved by counsel 2026-07-15 and now indexable. Written for Cash for Gold VA's
// actual reality (Virginia precious-metals dealer): website terms plus in-store
// transaction terms and regulatory-compliance disclosures.

/** Table-of-contents entries — each maps to an h2 id below. */
const TOC = [
  { id: "acceptance", label: "Acceptance of these terms" },
  { id: "who-we-are", label: "Who we are" },
  { id: "use-of-site", label: "Using this website" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "no-financial-advice", label: "Not financial advice" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "disclaimers-liability", label: "Disclaimers & liability" },
  { id: "appraisals-offers", label: "Free appraisals & offers" },
  { id: "seller-eligibility", label: "Seller eligibility & ID" },
  { id: "ownership", label: "Ownership & your representations" },
  { id: "regulatory-compliance", label: "Regulatory compliance & holding period" },
  { id: "payment-final-sales", label: "Payment & final sales" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }]}
        title="Terms of Service"
      />
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <Prose>
            <p><em>Last updated: July 15, 2026.</em></p>

            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of this website and your
              transactions with <strong>Cash for Gold VA</strong>. Please read them carefully. By using
              this site or selling items to us, you agree to these Terms and to our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
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

          {/* Body */}
          <Prose>
            <h2 id="acceptance" className="scroll-mt-28 !font-bold">Acceptance of these terms</h2>
            <p>
              By accessing this website, or by having your items appraised or sold to{" "}
              <strong>Cash for Gold VA</strong>, you accept these Terms. If you do not agree with them,
              please do not use the site or transact with us.
            </p>

            <h2 id="who-we-are" className="scroll-mt-28 !font-bold">Who we are</h2>
            <p>
              <strong>Cash for Gold VA</strong> is a precious-metals and valuables buyer operating retail
              stores in Northern Virginia. We buy gold, silver, platinum, diamonds, designer jewelry,
              luxury watches, and coins, and pay for items on-site.
            </p>
            <p>
              In these Terms, &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; mean{" "}
              <strong>Cash for Gold VA</strong>; &quot;you&quot; means the person using this site or
              selling items to us.
            </p>

            <h2 id="use-of-site" className="scroll-mt-28 !font-bold">Using this website</h2>
            <p>
              You may use this site for lawful, personal, informational purposes only. You agree not to
              misuse it, disrupt its operation, attempt to access it in an unauthorized way, or use
              automated tools to scrape, copy, or overload it.
            </p>

            <h2 id="intellectual-property" className="scroll-mt-28 !font-bold">Intellectual property</h2>
            <p>
              All content on this site — text, design, graphics, logos, and layout — is owned by{" "}
              <strong>Cash for Gold VA</strong> or its licensors and is protected by law. You may not
              copy, reproduce, or reuse it without our written permission.
            </p>
            <p>
              Coin and product listings, specifications, and images are provided for general information
              only and may include data about items we buy.
            </p>

            <h2 id="no-financial-advice" className="scroll-mt-28 !font-bold">Informational content, not financial advice</h2>
            <p>
              Any spot prices, market figures, and payout estimates shown on this site are for general
              information only. They are not investment, financial, or tax advice, and they are not a
              binding offer to buy or sell at any price.
            </p>
            <p>
              Precious-metals prices change constantly. A firm offer is made only in person, after we
              inspect and test your items (see <a href="#appraisals-offers">Free appraisals and offers</a>).
            </p>

            <h2 id="third-party-links" className="scroll-mt-28 !font-bold">Third-party links</h2>
            <p>
              This site may link to third-party websites — for example, mapping or reference sites — for
              your convenience. We do not control those sites and are not responsible for their content,
              accuracy, or privacy practices. Visiting them is at your own risk.
            </p>

            <h2 id="disclaimers-liability" className="scroll-mt-28 !font-bold">Disclaimers and limitation of liability</h2>
            <p>
              This site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of
              any kind, whether express or implied, including any implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not warrant that the site
              will be uninterrupted or error-free, or that information on it is complete or current.
            </p>
            <p>
              To the fullest extent permitted by law, <strong>Cash for Gold VA</strong> will not be
              liable for any indirect, incidental, or consequential damages arising from your use of the
              site.
            </p>

            <h2 id="appraisals-offers" className="scroll-mt-28 !font-bold">Free appraisals and offers</h2>
            <p>
              Appraisals at our stores are free and carry no obligation to sell. You are welcome to have
              your items evaluated and to decline any offer.
            </p>
            <p>
              Our offers are based on live market spot prices and on the on-site testing and inspection
              of your items. An offer is valid at the time it is made and may change as the market moves.
              We are not bound by any price, estimate, or figure shown on this website.
            </p>

            <h2 id="seller-eligibility" className="scroll-mt-28 !font-bold">Seller eligibility and identification</h2>
            <p>
              To sell items to us, you must be at least 18 years old and present a valid, unexpired
              government-issued photo ID, as required by Virginia law. We record identification and
              transaction details as the law requires.
            </p>

            <h2 id="ownership" className="scroll-mt-28 !font-bold">Ownership and your representations</h2>
            <p>
              By selling items to us, you represent and warrant that you are the lawful owner of the
              items (or are authorized to sell them), that they are free of any lien or claim, and that
              you have the right to sell them. As required by law, you provide a statement of ownership
              at the time of sale.
            </p>
            <p>
              Knowingly selling items you do not own, or that are stolen, is a crime and may be reported
              to law enforcement.
            </p>

            <h2 id="regulatory-compliance" className="scroll-mt-28 !font-bold">Regulatory compliance and holding period</h2>
            <p>
              We operate in full compliance with Virginia&rsquo;s precious-metals dealer laws —
              safeguards that protect both sellers and the community.
            </p>
            <p>
              As required by law, our purchases are reported to local law enforcement. Purchased precious
              metals and gems are held for the legally required period — a minimum of 15 calendar days
              under Va. Code &sect; 54.1-4104, or longer where a local ordinance requires — before they
              are resold or processed. This holding period helps ensure items are handled lawfully and
              gives rightful owners time and protection.
            </p>
            <p>
              Under Va. Code &sect; 54.1-4109(B), coin transactions are exempt from these dealer
              requirements.
            </p>

            <h2 id="payment-final-sales" className="scroll-mt-28 !font-bold">Payment and final sales</h2>
            <p>
              When you accept an offer, payment is made at the time of sale by check drawn on a local
              bank.
            </p>
            <p>
              All sales are final upon your signed receipt.
            </p>

            <h2 id="governing-law" className="scroll-mt-28 !font-bold">Governing law</h2>
            <p>
              These Terms are governed by the laws of the Commonwealth of Virginia, without regard to its
              conflict-of-laws rules.
            </p>
            <p>
              If any provision of these Terms is found unenforceable, the remaining provisions remain in
              full effect.
            </p>

            <h2 id="changes" className="scroll-mt-28 !font-bold">Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. When we make material changes, we will update
              the date at the top of this page and, where appropriate, provide notice on the site. Your
              continued use of the site or transactions with us after changes take effect means you
              accept the updated Terms.
            </p>

            <h2 id="contact" className="scroll-mt-28 !font-bold">Contact Us</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or see our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
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
                <span className="h-px w-6 bg-gold-400" aria-hidden /> Questions about these terms
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-cream-50">Cash for Gold VA</p>
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
