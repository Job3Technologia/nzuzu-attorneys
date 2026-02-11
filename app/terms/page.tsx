import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/content/site";

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl prose prose-primary">
          <p>Last updated: February 11, 2026</p>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using the website of {site.name}, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
          <h2>2. No Legal Advice</h2>
          <p>The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by using this site or contacting us through it.</p>
          <h2>3. Intellectual Property</h2>
          <p>All content on this site, including text, graphics, and logos, is the property of {site.name} and is protected by copyright laws.</p>
          <h2>4. Limitation of Liability</h2>
          <p>{site.name} will not be liable for any damages arising from the use or inability to use this website.</p>
        </div>
      </section>
    </>
  );
}
