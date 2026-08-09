# AGENTS.md

## Project

This repository contains the source code for `salmi.me`, the personal website of Zakaria Salmi.

The site is intended to be a long-term digital identity rather than simply a blog.

It should serve as:

- A personal homepage
- A place for long-form writing, thoughts, and things being learned
- A web-based resume
- A stable home for Zakaria's identity on the web

Primary domain:

`https://salmi.me`

Primary contact email:

`zakaria@salmi.me`

---

## Philosophy

Keep the site simple, personal, fast, and durable.

Prefer boring, maintainable technology over unnecessary complexity.

The website should feel like a personal corner of the internet, not a startup landing page or generic developer portfolio.

Content is more important than visual effects.

The design should make writing pleasant to read and make it immediately clear who Zakaria is and what he does.

Avoid:

- Marketing-style landing page design
- Large hero sections
- Excessive animation
- Glassmorphism
- Gradients used merely for decoration
- Dashboard-style interfaces
- Excessive cards
- Unnecessary JavaScript
- Heavy UI/component frameworks
- Premature abstractions
- Databases unless genuinely required
- Dependencies for functionality that can reasonably be implemented with Astro/CSS

---

## Design Direction

The general philosophy is inspired by simple personal websites such as `kachkach.com`.

Do not copy that website.

Instead, preserve the qualities that make this style effective:

- Strong typography
- Generous whitespace
- Minimal navigation
- High information density without visual clutter
- Personal rather than corporate
- Writing-first
- Fast loading
- Simple visual hierarchy
- Excellent readability
- Small, thoughtful details

The homepage itself should communicate much of the owner's identity without requiring visitors to navigate elsewhere.

It should eventually contain some combination of:

1. Name and short introduction
2. Current work / focus
3. Previous experience
4. Education
5. Recent writing
6. Links to resume, GitHub, LinkedIn, and email

Do not invent personal information or placeholder career history unless explicitly requested.

---

## Technology

Use:

- Astro
- TypeScript
- Markdown
- MDX where richer content is required
- Astro Content Collections
- Plain CSS where practical
- GitHub for source control
- Cloudflare Pages for deployment

Do not introduce React, Vue, Svelte, or another client-side framework unless a feature genuinely requires it.

Astro components should be the default.

Client-side JavaScript should be used deliberately and sparingly.

The majority of the website should be statically generated.

---

## Package Management

Use the package manager already established by the repository.

Do not switch package managers without a specific reason.

Keep dependencies minimal.

Before adding a dependency, consider whether Astro, the browser platform, or a small amount of local code already solves the problem.

---

## Development Workflow

Use the repository's npm scripts for normal development and production builds.

When an agent starts the Astro development server, run it in background mode:

```sh
npm exec astro dev -- --background
```

Manage that server with:

```sh
npm exec astro dev status
npm exec astro dev logs
npm exec astro dev stop
```

Keep the development server running only while it is useful, and stop it when the task is complete.

---

## Astro Documentation

Use the official Astro documentation as the primary technical reference:

`https://docs.astro.build`

Consult the relevant guide before making related changes:

- Routing, pages, dynamic routes, or middleware: `https://docs.astro.build/en/guides/routing/`
- Astro components: `https://docs.astro.build/en/basics/astro-components/`
- Framework integrations: `https://docs.astro.build/en/guides/framework-components/`
- Content collections: `https://docs.astro.build/en/guides/content-collections/`
- Styling: `https://docs.astro.build/en/guides/styling/`
- Internationalization: `https://docs.astro.build/en/guides/internationalization/`

Prefer the documentation for the repository's installed Astro version when behavior differs between releases.

---

## Site Structure

The intended public structure is approximately:

/
    Homepage / digital identity

/writing
    Writing index

/writing/[slug]
    Individual articles

/resume
    HTML resume

/tags/[tag]
    Writing grouped by tag

/rss.xml
    RSS feed

A downloadable resume PDF may eventually be available as well.

Do not create unnecessary top-level sections without a clear reason.

---

## Homepage

The homepage is not merely a blog index.

It should function as a concise representation of Zakaria's digital identity.

Visitors should be able to quickly understand:

- Who he is
- What he currently does
- What he is interested in
- What he has worked on
- What he writes about
- How to contact him

Recent writing should be visible directly from the homepage.

Avoid requiring visitors to click through several pages just to understand the person behind the site.

---

## Writing

Writing is a first-class part of the website.

Articles should be authored primarily in Markdown.

Use MDX when an article requires custom components such as:

- Interactive demonstrations
- Diagrams
- Charts
- Image galleries
- Rich code examples
- Custom explanatory components

A normal article should not require MDX.

Writing content should support metadata such as:

- title
- description
- publication date
- updated date when applicable
- tags
- draft status
- optional cover image

Prefer a simple content model that can evolve later.

URLs should be stable and readable.

---

## Images

Initially, keep images in the repository.

Prefer colocating article-specific images near their content when practical.

Use Astro's image tooling for optimization.

Avoid introducing external image/CDN infrastructure unless the repository grows enough to justify it.

Always provide useful alt text for meaningful images.

Decorative images should not create accessibility noise.

---

## Resume

The primary resume should eventually exist as an HTML page at:

`/resume`

It should be responsive, readable, printable, and accessible.

A downloadable PDF may also be provided.

Do not simply embed a PDF as the web resume.

---

## Styling

Prioritize typography.

The site should work well with both long-form articles and short identity/profile information.

Requirements:

- Responsive/mobile-first
- Excellent readability
- Sensible line lengths
- Accessible contrast
- Keyboard accessibility
- Visible focus states
- Semantic HTML
- Light mode
- Dark mode

Dark mode should respect `prefers-color-scheme` by default.

If a manual theme switcher is introduced, avoid unnecessary JavaScript and prevent theme flashing where possible.

Do not over-design components.

Use cards only where they improve comprehension.

---

## Performance

Performance is a core requirement.

Prefer:

- Static HTML
- Minimal JavaScript
- Optimized images
- Local/system fonts or carefully selected web fonts
- Small CSS
- Minimal third-party scripts

Avoid adding analytics, embeds, trackers, or external scripts casually.

The site should remain fast even on slower mobile connections.

---

## SEO and Web Standards

Eventually support:

- Page-specific titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Social sharing metadata
- Sitemap
- RSS
- robots.txt
- Structured metadata where genuinely useful

The canonical site origin is:

`https://salmi.me`

URLs should avoid unnecessary trailing complexity and should remain stable once published.

---

## RSS

Writing should expose an RSS feed at:

`/rss.xml`

RSS is considered a core feature, not an optional future enhancement.

---

## Analytics

If analytics are added, prefer privacy-friendly, lightweight analytics.

Cloudflare Web Analytics is the likely default.

Do not introduce advertising trackers.

Do not add cookie banners unless the site's actual behavior legally or technically requires one.

---

## CMS

Markdown/MDX files in Git are the source of truth.

Pages CMS may eventually be connected as an optional editing interface.

The website must never depend on Pages CMS to build or function.

A developer should always be able to:

1. Edit Markdown locally
2. Commit
3. Push
4. Deploy successfully

Do not introduce a database-backed CMS without an explicit decision to change the architecture.

---

## Deployment

Target deployment platform:

Cloudflare Pages.

Expected flow:

local development
    ->
GitHub
    ->
Cloudflare Pages
    ->
salmi.me

Production builds must succeed with the standard repository build command.

Do not introduce infrastructure that requires a persistent application server unless explicitly necessary.

---

## Email

Email hosting is NOT part of this repository.

The domain's email is hosted separately by Purelymail.

Primary address:

`zakaria@salmi.me`

Cloudflare DNS contains email-related MX, SPF, DKIM, and DMARC records.

IMPORTANT:

When configuring Cloudflare Pages or changing DNS, do not remove, overwrite, proxy, or otherwise modify existing email-related DNS records.

Website deployment must coexist with the existing Purelymail DNS configuration.

---

## Security

Never commit:

- Passwords
- API keys
- Authentication tokens
- Cloudflare credentials
- Purelymail credentials
- App passwords
- Recovery codes
- Private keys
- `.env` files containing secrets

Use environment variables when secrets eventually become necessary.

Do not expose private information through example content.

---

## Accessibility

Accessibility is a baseline requirement.

Use:

- Semantic HTML
- Proper heading hierarchy
- Keyboard-accessible controls
- Appropriate labels
- Alt text
- Visible focus indicators
- Sufficient contrast

Prefer native HTML elements over custom interactive components.

---

## Initial Scope

The first version should intentionally be small.

Build:

- Homepage
- Writing index
- Article pages
- Resume page
- Tags
- RSS
- Sitemap
- Basic SEO/social metadata
- Responsive layout
- Light/dark mode
- Syntax highlighting
- Image optimization

Do NOT initially build:

- Comments
- User accounts
- Authentication
- Likes
- Newsletter infrastructure
- Database
- Complex search
- Admin backend
- Custom analytics backend

These can be reconsidered once there is a real need.

---

## Development Principles

When implementing changes:

1. Understand the existing architecture before modifying it.
2. Prefer the smallest implementation that solves the problem.
3. Keep components focused and understandable.
4. Avoid premature abstraction.
5. Avoid unnecessary dependencies.
6. Preserve static generation whenever possible.
7. Maintain accessibility.
8. Maintain responsive behavior.
9. Run relevant checks/builds before considering work complete.
10. Do not silently change architecture or technology choices.

When there are multiple reasonable implementations, prefer the one with:

1. Less complexity
2. Fewer dependencies
3. Better accessibility
4. Better performance
5. Easier long-term maintenance

---

## Content Integrity

Do not invent biographical information, employers, job titles, projects, education, dates, social profiles, or accomplishments for Zakaria.

When real content has not yet been provided, use clearly identifiable temporary content or leave the section intentionally incomplete.

Never make placeholder information look like factual biography.

---

## Current Priority

The initial implementation priority is:

1. Establish a clean Astro project.
2. Configure TypeScript.
3. Add MDX.
4. Configure the content collection for writing.
5. Establish the main site structure.
6. Create a minimal shared layout and typography system.
7. Make the project build successfully.
8. Only then iterate on detailed visual design.

Do not attempt to build every future feature in the first implementation.
