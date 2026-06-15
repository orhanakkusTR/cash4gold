import type { Metadata } from "next";
import { SITE } from "@/data/business";
import { PageHero, Prose } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cash for Gold VA collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

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
            <p>This Privacy Policy explains how {SITE.legalName} (&quot;we&quot;) handles information collected through this website.</p>
            <h2>Information we collect</h2>
            <p>When you submit a quote request, we collect the name, phone number, email, item type, and any details you provide. We use this solely to respond to your inquiry.</p>
            <h2>How we use it</h2>
            <p>We use your information only to contact you about your request and provide a quote. We do not sell or share your personal information with third parties for marketing.</p>
            <h2>Data retention</h2>
            <p>We retain inquiry information only as long as needed to serve you and meet legal obligations.</p>
            <h2>Contact</h2>
            <p>Questions about this policy? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </Prose>
        </div>
      </section>
    </>
  );
}
