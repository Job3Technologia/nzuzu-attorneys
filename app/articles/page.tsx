"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { articles } from "@/content/articles";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { formatDate } from "@/lib/utils";
import { Calendar, User, Search, ArrowRight } from "lucide-react";

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Legal", "Updates"];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="Articles & Legal Updates"
        description="Stay informed with the latest legal insights, news, and updates from our experts."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search articles..."
                className="pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 w-full lg:w-auto">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === null ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.slug} className="flex flex-col hover:shadow-lg transition-all group">
                  <CardHeader className="pb-4">
                    <Badge variant="accent" className="mb-4">{article.category}</Badge>
                    <Link href={`/articles/${article.slug}`}>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        Admin
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-400 font-serif">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
