import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Scale, Users, Award } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: `Learn about ${site.name} and our commitment to providing strategic and affordable legal solutions in Pretoria.`,
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest level of professional ethics and honesty in all our dealings.",
      icon: Shield,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every legal matter we handle, ensuring the best for our clients.",
      icon: Award,
    },
    {
      title: "Accessibility",
      description: "We believe quality legal counsel should be affordable and accessible to the community.",
      icon: Scale,
    },
    {
      title: "Client-Centric",
      description: "Your needs and goals are at the center of our legal strategies and actions.",
      icon: Users,
    },
  ];

  return (
    <>
      <PageHeader
        title="About Nzuzu Attorneys"
        description={`Led by ${site.owner}, our firm is dedicated to providing expert legal representation with a personal touch.`}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story and Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {site.name} was founded with a clear vision: to bridge the gap between complex legal systems and the individuals who need protection and guidance. Based in the heart of Pretoria, we have established ourselves as a trusted name in the South African legal landscape.
                </p>
                <p>
                  Our principal, {site.owner}, brings years of experience and a passion for justice to every case. We understand that behind every legal matter is a person, a family, or a business looking for a way forward. That&apos;s why we combine strategic legal thinking with a compassionate, client-focused approach.
                </p>
                <p>
                  Whether you are facing a criminal charge, navigating a difficult family transition, or dealing with an estate matter, we are here to provide the expert counsel and support you deserve.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1453948588355-75d88f3c1105?q=80&w=2070&auto=format&fit=crop"
                  alt="Legal Professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our practice and define how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Need Expert Legal Advice?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards resolving your legal matters.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
