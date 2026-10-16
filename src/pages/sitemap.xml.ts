import type { APIRoute } from 'astro';
import { getProjects, hasDetail } from '../lib';
import { pages } from '../nav';

// 検索エンジン向けのサイトマップ(ページ一覧)を自動で作ります
export const GET: APIRoute = async ({ site }) => {
  const projects = (await getProjects()).filter(hasDetail);
  const paths = ['/', ...pages.map((p) => p.href), ...projects.map((p) => `/projects/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
