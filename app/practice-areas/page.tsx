import PageHeader from "@/components/layout/PageHeader";
import { practiceAreas } from "@/content/practiceAreas";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import CTAConsultation from "@/components/sections/CTAConsultation";

export const metadata = {
  title: "Practice Areas",
  description: "Explore our wide range of legal services including Criminal Law, Family Law, Estates, and more in Pretoria.",
};

export default function PracticeAreasPage() {
  const accordionItems = practiceAreas.map((area) => ({
    id: area.id,
    title: area.title,
    content: (
      <div className="space-y-4">
        <p className="text-lg">{area.longDescription}</p>
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h4 className="font-bold text-primary mb-2">How we can help:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Strategic legal consultation and advice</li>
            <li>Document preparation and review</li>
            <li>Representation in negotiations and court proceedings</li>
            <li>Dedicated support throughout your legal journey</li>
          </ul>
        </div>
      </div>
    ),
  }));

  return (
    <>
      <PageHeader
        title="Our Practice Areas"
        description="Comprehensive legal solutions tailored to protect your rights and interests."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sticky Navigation for Desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-2">
                <h3 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Jump to Section</h3>
                {practiceAreas.map((area) => (
                  <a
                    key={area.id}
                    href={`#${area.id}`}
                    className="block px-4 py-3 rounded-lg hover:bg-primary/5 text-primary font-medium transition-colors border border-transparent hover:border-primary/10"
                  >
                    {area.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Detailed Content */}
            <div className="lg:col-span-2 space-y-24">
              {practiceAreas.map((area) => (
                <div key={area.id} id={area.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center">
                      <Icon name={area.icon as any} size={32} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                      {area.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {area.longDescription}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                      <h3 className="font-bold text-primary text-xl mb-4">Why it Matters</h3>
                      <p className="text-gray-600">
                        Navigating {area.title.toLowerCase()} requires precise knowledge and strategic action to avoid long-term negative consequences.
                      </p>
                    </div>
                    <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                      <h3 className="font-bold text-primary text-xl mb-4">Our Approach</h3>
                      <p className="text-gray-600">
                        We provide clear, actionable advice and strong representation to achieve the best possible outcome for your specific situation.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our legal services and processes.
            </p>
          </div>
          <Accordion items={accordionItems} />
        </div>
      </section>

      <CTAConsultation />
    </>
  );
}
