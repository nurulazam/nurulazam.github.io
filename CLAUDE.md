# CLAUDE.md — Project Constitution & Guardrails

**Read this file at the start of every session and obey it. It overrides any instinct to be "helpful" by adding things.**

You are building **Dr. Nurul Azam's** personal research website.

## What this site is (the identity to express)

A quantum-materials researcher who **grows** materials (MBE + laser-assisted synthesis),
**sees** their structure and electronic/magnetic behaviour (momentum microscopy, cryo-Raman,
RHEED, NV magnetometry), **invents** synthesis methods, and **builds** the scientific software
and AI workflows to understand and optimise them. The site must make this rare *bridge* —
synthesis ↔ characterisation ↔ software/AI — obvious within seconds.

Aesthetic: **bright editorial-scientific** (calm, refined, magazine-quality reading), expressed
through the owner's *own* scientific motifs — never a generic AI look.

---

## Golden rules (do not violate)

1. **Stay inside the current `BUILD_PLAN.md` task.** Do one task per session/PR. Do not jump
   ahead, and do not pull work in from later phases.
2. **Phase 1 is STATIC ONLY.** Do NOT add comments, Supabase, auth, databases, server endpoints,
   newsletter backends, or any SSR. Astro `output` stays `'static'`.
3. **Navigation comes ONLY from `src/config/site.ts`.** Never hard-code nav links in components,
   and never invent new nav items or stray buttons. There is exactly **ONE** primary call-to-action
   site-wide: "Work with me". Everything else is a secondary link (footer).
4. **No new dependencies without explicit approval.** If you believe one is required, STOP and ask,
   with a one-line justification.
5. **All colour, type, spacing, radius, and shadow values come from CSS variables in
   `src/styles/tokens.css`.** No hard-coded hex values or magic numbers inside components.
6. **Mobile-first and accessible (WCAG 2.1 AA).** Semantic HTML, keyboard navigation, visible focus
   states, alt text, tap targets ≥ 44×44px. Every animation gated behind `prefers-reduced-motion`.
7. **Components are small and single-responsibility.** One component does one job.
8. **Never invent content.** Do not fabricate research claims, publications, citation counts, dates,
   or unpublished results. Use clearly-labelled `PLACEHOLDER` text/data where real content is missing.

## Explicitly OUT OF SCOPE — do not build, even if it seems helpful

- Realtime comments / Supabase / auth (Phase 2 only — architecture is designed for it, but not now).
- Newsletter signup backend (Phase 2).
- Bengali-language content (not now).
- The full "growth → … → AI feedback loop" pipeline animation — it leans on work **not yet published**.
  The launch signature animation uses ONLY published growth/vacancy work.
- A **visible public visit counter**. Analytics is GoatCounter, private dashboard only.

---

## Tech (locked)

- **Astro 5**, `output: 'static'`, **TypeScript (strict)**.
- Content via **Astro Content Collections** (`src/content.config.ts`) with **Zod** schemas.
- Styling: **plain CSS with design tokens** (no Tailwind / no CSS framework unless approved).
- Search: **Pagefind** (runs after build).
- Analytics: **GoatCounter** (one script in `BaseLayout.astro`, endpoint from `site.ts`).
- Hosting: **GitHub Pages, ROOT user site** (`https://nurulazam.github.io`) → site base is `/`
  (no sub-path). Repo must be named `nurulazam.github.io`.
- Deploy: **GitHub Actions** (`.github/workflows/deploy.yml`).

## Folder conventions

```
src/
  config/site.ts        Single source of truth: site meta, NAV, PRIMARY_CTA, SOCIALS, analytics.
  content.config.ts     Zod schemas for the writing / research / software collections.
  content/              Markdown/MDX content, one folder per collection.
  data/                 Static data files (e.g. publications.json).
  layouts/              BaseLayout (HTML shell), ArticleLayout (post template). Page structure only.
  components/           Reusable UI. Small, single-purpose, token-driven.
  pages/                Routes. Thin — compose layouts + components + content.
  styles/               tokens.css (variables) + global.css (base). No per-component global CSS.
```

## Design system (tokens are the source of truth)

- Warm paper background, warm near-black ink, **one** luminous accent (warm, nods to TMDC
  photoluminescence). Light + dark themes via `data-theme`.
- Fonts: **Fraunces** (display/headings), **Newsreader** (body/reading), **IBM Plex Sans**
  (labels, nav, UI). Do not introduce other fonts.
- Permitted visual motifs: hexagonal lattice, vacancy dots, band-structure / spectra line work.
  Forbidden: purple gradients, generic SaaS hero blobs, stock-photo collages, emoji decoration.

## Definition of done (every task)

- `npm run build` passes with no type errors.
- Looks correct and usable at **360px, 768px, and 1280px** widths.
- Fully keyboard-navigable with visible focus.
- Uses tokens; nav is read from `site.ts`.
- Adds nothing from the OUT OF SCOPE list.

## How to work

- Re-read this file at the start of each task.
- Implement exactly one `BUILD_PLAN.md` task, then stop for review.
- If a task is ambiguous or appears to need scope creep, **STOP and ask the owner** rather than guessing.
