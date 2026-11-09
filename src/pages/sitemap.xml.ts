import type { APIRoute } from 'astro';
import { categories, plants } from '../data/catalog';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('The production site URL is required for the sitemap.');
  const paths = ['/', '/plants/', ...categories.map((category) => `/plants/${category.slug}/`), ...plants.filter((plant) => !plant.example).map((plant) => `/plant/${plant.slug}/`)];
  const urls = paths.map((path) => `<url><loc>${new URL(path, site).href.replaceAll('&', '&amp;')}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
