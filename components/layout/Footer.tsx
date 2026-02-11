import Link from "next/link";
import { site } from "@/content/site";
import { practiceAreas } from "@/content/practiceAreas";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-primary font-bold">
                N
              </div>
              <span className="font-bold text-xl tracking-tight">NZUZU ATTORNEYS</span>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              {site.brandTagline}. Dedicated to providing professional, ethical, and client-focused legal services in Pretoria and beyond.
            </p>
            <div className="flex gap-4">
              <a href={site.socials.facebook} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href={site.socials.twitter} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
              <a href={site.socials.linkedin} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Our Services</h3>
            <ul className="space-y-4">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <Link href={`/practice-areas#${area.id}`} className="text-secondary-foreground/80 hover:text-white transition-colors">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4 text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link></li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Newsletter</h3>
            <p className="text-secondary-foreground/80 mb-4 text-sm">
              Subscribe to get the latest legal updates and news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-accent text-primary font-bold py-2 rounded text-sm hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
