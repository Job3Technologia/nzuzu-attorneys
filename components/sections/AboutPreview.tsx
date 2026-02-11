import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function AboutPreview() {
  const points = [
    "Expert Legal Representation",
    "Strategic Case Planning",
    "Affordable Fee Structure",
    "Client-First Approach",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                alt="Our Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-serif font-bold text-primary mb-1">6+</div>
              <div className="text-sm font-bold text-primary uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          <div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4 block">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              We’re Nzuzu Attorneys
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At {site.name}, we believe that quality legal representation should be accessible to everyone. Our firm is built on a foundation of integrity, expertise, and a deep commitment to our clients&apos; success.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="font-medium text-primary">{point}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
