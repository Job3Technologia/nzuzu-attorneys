import { articles } from "@/content/articles";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import CTAConsultation from "@/components/sections/CTAConsultation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article>
        <div className="bg-primary pt-32 pb-20 text-white">
          <div className="container-custom max-w-4xl">
            <Link 
              href="/articles" 
              className="inline-flex items-center gap-2 text-accent font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Articles
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Admin</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg prose-primary max-w-none">
              <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-12 italic border-l-4 border-accent pl-8">
                {article.excerpt}
              </p>
              
              <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                {/* Content would normally be rendered from Markdown or CMS */}
                <p>{article.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">Legal Considerations</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="list-disc list-inside space-y-4 my-8">
                  <li>Consult with a legal professional before taking action</li>
                  <li>Ensure all documentation is accurate and complete</li>
                  <li>Understand the specific timelines and deadlines involved</li>
                  <li>Keep records of all communications and transactions</li>
                </ul>
                <p>
                  At Nzuzu Attorneys, we are committed to helping you navigate these complex legal waters. Our expertise in {article.category === "Legal" ? "various legal matters" : "the latest legal updates"} ensures that you receive the best possible advice tailored to your unique situation.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-primary">Written by Sabelo</p>
                  <p className="text-sm text-gray-500">Principal Attorney at Nzuzu Attorneys</p>
                </div>
              </div>
              <div className="flex gap-4">
                {/* Social Share Placeholders */}
                <Button variant="outline" size="sm">Share</Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTAConsultation />
    </>
  );
}
