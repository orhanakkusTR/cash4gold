import type { Metadata } from "next";
import { SITE } from "@/data/business";
import { PageHero, Prose } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cash for Gold VA collects, uses, shares, and protects your information, and your privacy rights.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

// DRAFT — pending legal review. This rewrite describes the site's ACTUAL data
// practices (Google Analytics/Ads with Consent Mode, OpenAI advertising pixel,
// first-party click analytics in our own database, Google Maps embeds, cookies).
// Owner decisions have been filled in per direction (effective date = deploy day,
// 24-month retention, info@ data-request contact with email/phone verification).
// TODO: after counsel approves the wording, remove `robots.index:false` below so
// the policy is indexable.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]}
        title="Privacy Policy"
      />
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Prose>
            <p><em>Last updated: July 15, 2026.</em></p>

            <p>
              This Privacy Policy explains how {SITE.legalName} (&quot;we,&quot; &quot;us&quot;) collects,
              uses, shares, and protects information when you visit this website or contact us. It
              also describes the privacy rights available to Virginia residents.
            </p>

            <h2>Information you provide</h2>
            <p>
              When you call, email, or visit one of our stores, you may share information such as your
              name, phone number, email address, and details about items you want to sell. We use this
              only to respond to you, provide a quote, and complete a transaction you request.
            </p>
            <p>
              This website does not currently offer an online quote form; enquiries reach us by phone,
              email, or in person.
            </p>

            <h2>Information collected automatically</h2>
            <p>
              When you use the site, some information is collected automatically through cookies and
              similar technologies, including your device and browser type, pages viewed, the links
              you tap (such as call and directions buttons), approximate location derived from your IP
              address, and referring pages. We use this to understand how the site is used, measure
              the performance of our advertising, and improve the site.
            </p>

            <h2>Advertising and analytics partners</h2>
            <p>We use the following third-party services, which may set cookies or receive data about your visit:</p>
            <ul>
              <li>
                <strong>Google Analytics and Google Ads</strong> (Google LLC) — to measure site usage
                and the performance of our ads, and to record conversions such as calls and directions
                requests. We run Google Consent Mode: until you accept cookies, Google is limited to
                anonymous, cookieless measurement, and visitors in the EEA/UK are set to denied by
                default.
              </li>
              <li>
                <strong>OpenAI advertising pixel</strong> (OpenAI) — to measure the performance of
                advertising, including when a visit leads to a phone call.
              </li>
            </ul>
            <p>
              These partners process data under their own privacy policies. We do not sell your
              personal information for money, and we do not share it for cross-context behavioral
              advertising except through the advertising and analytics services described here — which
              you can turn off using the cookie controls below.
            </p>

            <h2>Our own website analytics</h2>
            <p>
              We also keep first-party analytics in our own database to see which pages and buttons are
              used. These records do not use cookies and do not include your name, email, or phone
              number. Your IP address is converted into a one-way, non-reversible code before storage
              (we never store the raw IP), alongside a coarse device type (mobile or desktop), the page,
              and which store or link was involved.
            </p>

            <h2>Embedded content</h2>
            <p>
              Our store location pages include an embedded Google Map so you can find and get directions
              to us. When a map loads, Google may receive information about your visit under its own
              privacy policy.
            </p>

            <h2>Cookies and your choices</h2>
            <p>
              We use cookies and similar technologies for analytics and advertising as described above.
              When required, we show a cookie banner so you can accept or decline; your choice is stored
              on your device so we can honor it on future visits. You can also change your browser
              settings to block or delete cookies. Declining does not stop you from using the site.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep enquiry information only as long as needed to serve you and to meet legal or
              accounting obligations. Analytics records are kept for up to 24 months, after which they
              are automatically deleted.
            </p>

            <h2>Your Virginia privacy rights</h2>
            <p>
              Under the Virginia Consumer Data Protection Act, Virginia residents may request to access,
              correct, delete, or obtain a copy of their personal data, and may opt out of targeted
              advertising and the sale of personal data. We will not discriminate against you for
              exercising these rights, and you may appeal a decision we make about your request.
            </p>
            <p>
              To make a request, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. To protect your information, we
              verify each request against the email address or phone number we have on record for you
              before acting on it, and we respond within the timeframe required by law.
            </p>

            <h2>Children</h2>
            <p>This site is intended for adults and is not directed to children under 13.</p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected by
              updating the date at the top of this page.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
