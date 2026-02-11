import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { practiceAreas } from "@/content/practiceAreas";
import { articles } from "@/content/articles";

export default function SitemapPage() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Articles", href: "/articles" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <>
      <PageHeader title="Sitemap" />
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Main Pages</h2>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-lg text-gray-600 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Practice Areas</h2>
              <ul className="space-y-4">
                {practiceAreas.map((area) => (
                  <li key={area.id}>
                    <Link href={`/practice-areas#${area.id}`} className="text-lg text-gray-600 hover:text-accent transition-colors">
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Recent Articles</h2>
              <ul className="space-y-4">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/articles/${article.slug}`} className="text-lg text-gray-600 hover:text-accent transition-colors">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
