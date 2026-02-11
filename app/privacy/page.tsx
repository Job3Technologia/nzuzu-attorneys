import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/content/site";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl prose prose-primary">
          <p>Last updated: February 11, 2026</p>
          <h2>1. Introduction</h2>
          <p>{site.name} is committed to protecting your privacy. This policy explains how we collect and use your personal information.</p>
          <h2>2. Information We Collect</h2>
          <p>We may collect information you provide through our contact forms, such as your name, email address, and phone number.</p>
          <h2>3. How We Use Information</h2>
          <p>We use your information solely to respond to your inquiries and provide legal services. We do not sell or share your information with third parties except as required by law.</p>
          <h2>4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information at any time. Contact us at {site.email} for any requests.</p>
        </div>
      </section>
    </>
  );
}
