import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import products data without standard import (Node environment with ES modules requires full path or specific handling)
// Read and parse products data manually for simplicity
const dataFile = path.join(__dirname, '../src/data/products.js');
const fileContent = fs.readFileSync(dataFile, 'utf-8');

// Extremely simple extraction of IDs for routing
// Normally we'd import the module, but regex is easy for this simple case
const slugMatches = fileContent.match(/slug:\s*"([^"]+)"/g);
let productIds = [];
if (slugMatches) {
  productIds = slugMatches.map(m => m.match(/"([^"]+)"/)[1].trim());
}

const STATIC_ROUTES = [
  '/',
  '/collection',
  '/about',
  '/gallery',
  '/contact',
  '/category/saree',
  '/category/lehenga',
  '/category/men-fabric'
];

const generateSitemap = () => {
  const baseUrl = 'https://dangisareecenter.com';
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  STATIC_ROUTES.forEach(route => {
    sitemapContent += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add dynamic product routes
  productIds.forEach(id => {
    sitemapContent += `
  <url>
    <loc>${baseUrl}/product/${id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  sitemapContent += `
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemapContent);
  console.log('Sitemap generated successfully at public/sitemap.xml!');
};

generateSitemap();
