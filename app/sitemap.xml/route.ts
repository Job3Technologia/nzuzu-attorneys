import { site } from "@/content/site";
import { articles } from "@/content/articles";
import { practiceAreas } from "@/content/practiceAreas";

export async function GET() {
  const baseUrl = `https://${site.domain}`;
  
  const staticPages = [
    "",
    "/about",
    "/practice-areas",
    "/articles",
    "/contact",
    "/terms",
    "/privacy",
    "/sitemap",
  ];

  const articlePages = articles.map((a) => `/articles/${a.slug}`);
  const practiceAreaPages = practiceAreas.map((a) => `/practice-areas#${a.id}`);

  const allPages = [...staticPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
