import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
	const origin = site ?? new URL('https://salmi.me');
	const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);
	const pages = [
		{ path: '/' },
		{ path: '/writing/' },
		{ path: '/resume/' },
		...posts.map((post) => ({
			path: `/writing/${post.id}/`,
			lastModified: post.data.updatedAt ?? post.data.publishedAt,
		})),
	];
	const urls = pages
		.map(({ path, lastModified }) => {
			const lastmod = lastModified
				? `<lastmod>${lastModified.toISOString().slice(0, 10)}</lastmod>`
				: '';
			return `<url><loc>${new URL(path, origin).href}</loc>${lastmod}</url>`;
		})
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
	);
};
