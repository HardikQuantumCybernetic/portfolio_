const fs = require('fs');
const path = require('path');

const baseUrl = 'https://cybernatic.vercel.app';

// Define your routes here
const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/projects', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
