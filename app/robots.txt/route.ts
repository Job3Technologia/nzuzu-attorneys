import { site } from "@/content/site";

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://${site.domain}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
