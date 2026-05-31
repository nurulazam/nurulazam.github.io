# nurulazam.github.io — starter kit

A modular Astro 5 foundation for Dr. Nurul Azam's research website. Static, fast, and built to
deploy to GitHub Pages at https://nurulazam.github.io.

## First steps
1. Create a GitHub repo named exactly **`nurulazam.github.io`** and put these files at its root.
2. `npm install`
3. `npm run dev` → open the local URL. You'll see the home stub.
4. Register at https://www.goatcounter.com/ and paste your endpoint into
   `src/config/site.ts` → `analytics.goatcounter`.
5. In the repo: **Settings → Pages → Source: GitHub Actions**. Push to `main` to deploy.

## How to build the rest
- **`CLAUDE.md`** is the project constitution. When using Claude Code, it reads this automatically.
- **`BUILD_PLAN.md`** is the ordered task list. Give Claude Code **one task at a time**.

## What's already here
- Single source of truth for nav/meta/links: `src/config/site.ts`
- Typed content (build fails on bad frontmatter): `src/content.config.ts`
- Design tokens (one place to retheme): `src/styles/tokens.css`
- Shell: `BaseLayout`, `Header` (nav from config, one CTA), `Footer`, `ThemeToggle`, `Breadcrumbs`
- Consistent post template: `ArticleLayout`
- Home stub demonstrating the funnel + design language
- Example content per collection (marked `draft: true`, PLACEHOLDER)
- GitHub Actions deploy + Pagefind build step + GoatCounter wiring

## Conventions (also enforced in CLAUDE.md)
- Static only in Phase 1 — no comments/Supabase/auth yet.
- Nav comes only from `site.ts`; one primary CTA ("Work with me").
- All colour/type/spacing via tokens — no hard-coded values in components.
- Mobile-first, accessible, `prefers-reduced-motion` honoured.
