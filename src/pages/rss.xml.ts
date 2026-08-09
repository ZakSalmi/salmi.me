import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) =>
	value.replace(/[<>&'\"]/g, (character) => {
		const entities: Record<string, string> = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			"'": '&apos;',
			'"': '&quot;',
		};
		return entities[character];
	});

export const GET: APIRoute = async ({ site }) => {
	const origin = site ?? new URL('https://salmi.me');
	const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);
	const channelURL = new URL('/writing/', origin).href;
	const feedURL = new URL('/rss.xml', origin).href;
	const items = posts
		.map((post) => {
			const link = new URL(`/writing/${post.id}/`, origin).href;
			return `<item><title>${escapeXml(post.data.title)}</title><description>${escapeXml(post.data.description)}</description><link>${link}</link><guid isPermaLink="true">${link}</guid><pubDate>${post.data.publishedAt.toUTCString()}</pubDate></item>`;
		})
		.join('');
	const lastBuildDate = posts[0]?.data.updatedAt ?? posts[0]?.data.publishedAt;
	const buildDate = lastBuildDate ? `<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>` : '';

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Zakaria Salmi</title><description>Notes and essays by Zakaria Salmi.</description><link>${channelURL}</link><atom:link href="${feedURL}" rel="self" type="application/rss+xml"/><language>en</language>${buildDate}${items}</channel></rss>`,
		{ headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
	);
};
