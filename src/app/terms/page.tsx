import type { Metadata } from "next";
import { SITE } from "@/data/business";
import { PageHero, Prose } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Cash for Gold VA website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Terms", href: "/terms" }]}
        title="Terms of Use"
      />
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Prose>
            <p>By using this website you agree to these terms. {SITE.legalName} provides this site for general information about our buying services.</p>
            <h2>No guarantee of pricing</h2>
            <p>Prices for precious metals and items fluctuate. Any figures on this site are illustrative; actual offers are made in person after appraisal and are subject to change.</p>
            <h2>Identification required</h2>
            <p>All transactions require a valid government-issued photo ID in compliance with Virginia law.</p>
            <h2>Website content</h2>
            <p>Content is provided &quot;as is&quot; without warranties. We may update information at any time.</p>
            <h2>Contact</h2>
            <p>Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </Prose>
        </div>
      </section>
    </>
  );
}
