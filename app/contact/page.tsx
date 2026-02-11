import PageHeader from "@/components/layout/PageHeader";
import ContactFormSection from "@/components/sections/ContactFormSection";
import MapSection from "@/components/sections/MapSection";
import { site } from "@/content/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} in Pretoria for expert legal solutions. Call ${site.phone_local} or email ${site.email}.`,
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Call Us",
      details: site.phone_local,
      subDetails: "Mon-Fri, 8am - 5pm",
      icon: Phone,
      href: `tel:${site.phone_tel}`,
    },
    {
      title: "Email Us",
      details: site.email,
      subDetails: "We reply within 24 hours",
      icon: Mail,
      href: `mailto:${site.email}`,
    },
    {
      title: "Visit Us",
      details: "Office 312, Cnr 296 Lillian Ngoyi & Pretorius",
      subDetails: "Pretoria, South Africa",
      icon: MapPin,
      href: "#map",
    },
    {
      title: "Working Hours",
      details: "Monday - Friday",
      subDetails: "08:00 AM - 05:00 PM",
      icon: Clock,
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a legal question? Get in touch with our expert team today."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon size={28} />
                </div>
                <h3 className="font-bold text-primary text-xl mb-2">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-lg text-primary font-medium hover:text-accent transition-colors block mb-1">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-lg text-primary font-medium mb-1">{info.details}</p>
                )}
                <p className="text-gray-500">{info.subDetails}</p>
              </div>
            ))}
          </div>

          <ContactFormSection />
        </div>
      </section>

      <MapSection />
    </>
  );
}
