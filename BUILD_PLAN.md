# BUILD_PLAN.md — Phase 1 (static launch)

Work top to bottom. **One task per session/PR.** Each task lists its goal, what to touch, and
acceptance criteria. Anything not listed is out of scope (see `CLAUDE.md`).

The scaffold already includes: config, content schemas, tokens, global styles, BaseLayout,
ArticleLayout, Header, Footer, Breadcrumbs, ThemeToggle, a home page stub, example content,
the deploy workflow, and GoatCounter wiring. Tasks below build the real site on top of it.

---

### Task 0 — Bootstrap & verify
- **Goal:** repo runs and deploys.
- **Do:** `npm install`; confirm `npm run dev` serves the stub home; register a GoatCounter
  account and put the real endpoint in `src/config/site.ts` (`analytics.goatcounter`); push to a
  repo named `nurulazam.github.io`; set Pages source to **GitHub Actions**.
- **Done when:** the stub site is live at https://nurulazam.github.io and GoatCounter logs a visit.

### Task 1 — Finalise design tokens & global styles
- **Goal:** lock the visual language.
- **Touch:** `src/styles/tokens.css`, `src/styles/global.css`.
- **Do:** confirm fonts load (Fraunces / Newsreader / IBM Plex Sans), tune the accent, verify
  light + dark, prose measure, focus states, and the hex-lattice motif variable.
- **Done when:** typography and colour feel right in both themes; no hard-coded values elsewhere.

### Task 2 — Shell: Header, Footer, navigation
- **Goal:** consistent chrome on every page.
- **Touch:** `src/components/Header.astro`, `Footer.astro`, `src/config/site.ts`.
- **Do:** render nav strictly from `NAV`; one primary CTA from `PRIMARY_CTA`; responsive menu
  (accessible, `aria-expanded`); footer with `SOCIALS` + RSS link.
- **Done when:** nav is identical site-wide, keyboard-operable, correct at 360/768/1280px.

### Task 3 — Home (the funnel)
- **Goal:** communicate the identity bridge in seconds.
- **Touch:** `src/pages/index.astro`, new `src/components/home/*`.
- **Sections in order:** (1) hero identity + signature animation slot; (2) three identity cards —
  *Quantum Materials Growth* / *Spectroscopy & Momentum Microscopy* / *Scientific Software & AI*;
  (3) one featured research story; (4) 3–5 selected publications; (5) software/tools preview;
  (6) latest writing (pull from collection); (7) contact CTA.
- **Done when:** the page tells the bridge story with no stray buttons; one primary CTA only.

### Task 4 — Signature animation (published work only)
- **Goal:** the memorable hero element.
- **Do:** an interactive **time-resolved crystal-growth / hexagonal-lattice** piece where hovering
  removes an atom (vacancy motif). CSS/SVG/Canvas, lightweight, `prefers-reduced-motion`-aware,
  degraded on mobile. **No** AI-feedback-loop stage (unpublished).
- **Done when:** smooth on desktop, calm fallback on mobile, disabled under reduced-motion.

### Task 5 — Writing: index + article rendering
- **Goal:** the blog hub.
- **Touch:** `src/pages/writing/index.astro`, `src/pages/writing/[...slug].astro`, `ArticleLayout`.
- **Do:** list posts, filter by category (Research Highlights / Technique Explainers /
  Mentoring Philosophy / Field Notes / News); render entries into `ArticleLayout` with consistent
  affordances (breadcrumb, date, tags, back-to-category, contact).
- **Done when:** the example post renders; categories filter; affordances identical across posts.

### Task 6 — Research: dual-axis portfolio
- **Goal:** browse the same work two ways.
- **Touch:** `src/pages/research/index.astro`, `src/pages/research/[...slug].astro`.
- **Do:** a single, predictable toggle — **By material** (MoS₂, WSe₂, MnTe, NiTe₂, MnSb…) vs
  **By physics** (laser-vs-MBE, vacancy/phase control, magnetism & topology, excitons, band
  structure/k-space). Each entry has an illustration slot. Driven by the `material[]` / `physics[]`
  tags in the research schema.
- **Done when:** one toggle, no duplicate nav, both lenses list the same entries correctly.

### Task 7 — Software Development (+ Research Tools & Scientific Software)
- **Touch:** `src/pages/software/index.astro`, `[...slug].astro`.
- **Do:** project cards (title, summary, tags, repo link); a clearly labelled **Research Tools &
  Scientific Software** subsection; build-log posts use `ArticleLayout`.
- **Done when:** section reads as scientific software, not a career pivot; cards are uniform.

### Task 8 — Publications ✅ DONE
- **Touch:** `src/pages/publications/index.astro`, `src/data/publications.json`.
- **Do:** render the static JSON list with DOI/links; group by year; link to Scholar/ORCID.
- **Done when:** list is accurate to the data file; no invented entries or citation counts.
- **Note (June 2026):** the mechanism changed — publications are now a **content collection**
  (`src/content/publications/*.md`, one file per paper, abstract in the body), **not** a JSON
  file. `src/data/publications.json` has been deleted. The page reads from the collection,
  filters by topic/material/technique, and shows a hand-updated citation count. Theses live in
  a sibling `theses` collection. See MAINTENANCE.md §8 / §16.

### Task 9 — Teaching & Mentoring (+ Mentoring Philosophy)
- **Touch:** `src/pages/teaching/index.astro`.
- **Do:** concise teaching/mentoring record, plus a link to the **Mentoring Philosophy** writing
  category (the evolving thought thread on mentorship and technology).
- **Done when:** mentoring is visible and the philosophy thread is reachable.

### Task 10 — About, Contact, Instrument/Facility Map
- **Touch:** `src/pages/about/index.astro`, `contact/index.astro`, plus the instrument map.
- **Do:** bio + CV download; contact via `mailto:` (no backend); a visual instrument map
  (MBE, RHEED, momentum microscopy, cryo-Raman, AFM/MFM, NV magnetometry).
- **Done when:** contact works statically; the map renders responsively.

### Task 11 — Search, RSS, sitemap, SEO, dark-mode polish
- **Do:** wire Pagefind UI; RSS feed for writing; verify sitemap; per-page `<title>`/OG meta;
  finalise the theme toggle.
- **Done when:** search returns results from built pages; feeds and meta validate.

### Task 12 — Accessibility & performance pass, then ship
- **Do:** keyboard/contrast/alt audit; image optimisation (AVIF/WebP, lazy, `srcset`); confirm
  mobile LCP target; final responsive check at 360/768/1280px.
- **Done when:** Lighthouse a11y ≥ 95, no console errors, deploy is green.

---

**Added outside the original plan (June 2026):** a **Conferences** feature — the `conferences`
content collection (28 entries), the `/conferences/` page (mirrors Publications, with a Conference
journal fed by Writing "Field Notes"), and a Conferences nav link in `site.ts` — plus a homepage
**Recent talks** section (presented-only, newest first, invited → talk → poster, top 3). These were
not tasks in the list above. See conferences-master.md and MAINTENANCE.md §9.

---

**Phase 2 (later, do NOT start without approval):** Keystatic visual editor, Supabase data layer,
owned moderated comments, newsletter, citation widget.
