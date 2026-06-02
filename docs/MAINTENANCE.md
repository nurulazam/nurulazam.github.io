# Site Maintenance Manual
## nurulazam.github.io — Dr. Nurul Azam's Research Website

**For:** Anyone maintaining or updating this site
**Last updated:** June 2026
**Live site:** https://nurulazam.github.io
**Repository:** https://github.com/nurulazam/nurulazam.github.io

---

## Table of Contents

1. [Overview](#1-overview)
2. [Quick Reference Card](#2-quick-reference-card)
3. [Setting Up on a New Machine](#3-setting-up-on-a-new-machine)
4. [File Structure](#4-file-structure)
5. [How to Write a Blog Post](#5-how-to-write-a-blog-post)
6. [How to Add a Research Entry](#6-how-to-add-a-research-entry)
7. [How to Add a Software Project](#7-how-to-add-a-software-project)
8. [How to Update Publications](#8-how-to-update-publications)
9. [How to Add a Conference Entry](#9-how-to-add-a-conference-entry)
10. [How to Update the CV](#10-how-to-update-the-cv)
11. [Updating Site Configuration](#11-updating-site-configuration)
12. [Design System — Changing Colours, Fonts, Spacing](#12-design-system--changing-colours-fonts-spacing)
13. [Images and Assets](#13-images-and-assets)
14. [Deploying Changes (Automatic)](#14-deploying-changes-automatic)
15. [Analytics (GoatCounter)](#15-analytics-goatcounter)
16. [Content Schemas — Full Reference](#16-content-schemas--full-reference)
17. [Going Live — Removing Draft Mode](#17-going-live--removing-draft-mode)
18. [Troubleshooting](#18-troubleshooting)
19. [What NOT to Touch](#19-what-not-to-touch)
20. [Phase 2 — Planned Features](#20-phase-2--planned-features)

---

## 1. Overview

This is a **static website** built with [Astro 5](https://astro.build). "Static" means:
- There is no database running on a server.
- Every page is a pre-built HTML file.
- Hosting is free on GitHub Pages.
- **Deployment is fully automatic** — every time you push to the `main` branch on GitHub, the site rebuilds and goes live in about 60 seconds.

### The three rules that govern everything
1. **Content lives as Markdown files** in `src/content/`. Write in any text editor.
2. **Configuration lives in `src/config/site.ts`**. Nav, socials, and identity text are all edited there.
3. **Styles live as variables in `src/styles/tokens.css`**. Colour and font changes happen there, nowhere else.

---

## 2. Quick Reference Card

| Task | Time | Section |
|---|---|---|
| Write a blog post | 5 min | §5 |
| Add a research entry | 5 min | §6 |
| Add a software project | 5 min | §7 |
| Add / update a publication | 10 min | §8 |
| Add a conference talk or poster | 5 min | §9 |
| Replace the CV PDF | 2 min | §10 |
| Change nav links | 2 min | §11 |
| Change the accent colour | 2 min | §12 |
| Deploy changes | 1 min (push + 60s auto) | §14 |
| View analytics | Instant | §15 |

### The universal workflow

Every change follows the same three commands:

```bash
git add .
git commit -m "short description of what you changed"
git push
```

That's it. GitHub rebuilds and deploys automatically.

---

## 3. Setting Up on a New Machine

You only need to do this once when working on a new computer.

### Prerequisites
- **Node.js v20 or newer** — download from https://nodejs.org (choose the LTS version)
- **Git** — download from https://git-scm.com
- **A terminal** — Terminal on macOS/Linux, or Windows Terminal on Windows

### Steps

```bash
# 1. Clone the repository
git clone git@github.com:nurulazam/nurulazam.github.io.git
cd nurulazam.github.io

# 2. Install dependencies (only needed once, or after package.json changes)
npm install

# 3. Run the site locally
npm run dev
```

Open http://localhost:4321 in your browser. You should see the site running locally.

### Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the local development server (with live reload) |
| `npm run build` | Build the full site (includes Pagefind search index) |
| `npm run preview` | Preview the built site at http://localhost:4321 |

> **Tip:** Use `npm run dev` for day-to-day editing. Use `npm run build && npm run preview` to test search, which only works on the fully built site.

---

## 4. File Structure

```
nurulazam.github.io/
│
├── CLAUDE.md                  ← Project rules for AI assistants (do not delete)
├── BUILD_PLAN.md              ← Development task list (do not delete)
│
├── public/                    ← Static files served as-is
│   ├── cv.pdf                 ← CV download (replace this file to update the CV)
│   └── robots.txt
│
├── src/
│   ├── config/
│   │   └── site.ts            ← ★ NAV, SOCIALS, identity text, analytics — edit here
│   │
│   ├── content/               ← ★ All content lives here as Markdown files
│   │   ├── writing/           ←   Blog posts
│   │   ├── research/          ←   Research entries
│   │   ├── software/          ←   Software projects
│   │   ├── publications/      ←   Peer-reviewed papers (one file per paper)
│   │   ├── conferences/       ←   Talks & posters (one file per entry)
│   │   └── theses/            ←   Theses & dissertations
│   │
│   ├── styles/
│   │   ├── tokens.css         ← ★ Colours, fonts, spacing — edit here to retheme
│   │   └── global.css         ←   Base styles (rarely needs editing)
│   │
│   ├── layouts/               ←   Page templates (BaseLayout, ArticleLayout)
│   ├── components/            ←   Reusable pieces (Header, Footer, etc.)
│   └── pages/                 ←   URL routes (one file = one URL)
│
├── .github/workflows/
│   └── deploy.yml             ←   Auto-deploy on every push (do not edit)
│
└── package.json               ←   Dependencies and scripts
```

### The files you edit most

| File | What you change there |
|---|---|
| `src/content/writing/*.md` | Blog posts |
| `src/content/research/*.md` | Research entries |
| `src/content/publications/*.md` | Publications (one file per paper) |
| `src/content/conferences/*.md` | Conference talks & posters |
| `src/config/site.ts` | Nav, socials, bio identity line |

---

## 5. How to Write a Blog Post

### Step 1 — Create a new file

Create a new `.md` file in `src/content/writing/`. The filename becomes part of the URL.

```
src/content/writing/laser-assisted-synthesis-explainer.md
                    ↑
            URL will be: /writing/laser-assisted-synthesis-explainer/
```

Use lowercase letters, numbers, and hyphens only. No spaces.

### Step 2 — Add the frontmatter

Every post starts with a block of metadata between `---` lines, called **frontmatter**:

```markdown
---
title: "What is laser-assisted synthesis?"
description: "A plain-language explainer of the LAST method for growing atomically thin crystals in under a second."
date: 2026-06-01
category: "Technique Explainers"
tags: ["LAST", "TMDC", "2D materials", "synthesis"]
draft: false
---

Your post content goes here...
```

### Step 3 — Write the content

After the frontmatter, write your post in standard Markdown:

```markdown
## Introduction

Laser-assisted synthesis (LAST) is a technique for growing monolayer crystals
in under a second — over 100× faster than conventional CVD methods.

## How it works

The key idea is that a focused laser beam provides localised thermal energy...

## Why it matters

Fast synthesis enables...
```

You can also add images (see §13).

### Frontmatter fields

| Field | Required | Values | Notes |
|---|---|---|---|
| `title` | ✅ Yes | Any text | Shown as the page heading |
| `description` | ✅ Yes | 1–2 sentences | Used in search results and social previews |
| `date` | ✅ Yes | `YYYY-MM-DD` | Publication date |
| `category` | ✅ Yes | See below | Determines which filter tab it appears in |
| `tags` | No | `["tag1", "tag2"]` | Extra keywords; shown on the article page |
| `draft` | No | `true` or `false` | Default is `false`. Set `true` to hide from public |
| `updated` | No | `YYYY-MM-DD` | If you revise an existing post |
| `cover` | No | `/images/my-image.jpg` | Hero image for the post |
| `coverAlt` | No | `"Description of image"` | Alt text for the cover image (required if cover is set) |

### Valid categories

Pick **exactly one** from this list (spelling and capitalisation must match):

- `Research Highlights`
- `Technique Explainers`
- `Mentoring Philosophy`
- `Field Notes`
- `News`

### Step 4 — Deploy

```bash
git add .
git commit -m "writing: add laser-assisted synthesis explainer"
git push
```

The post is live at https://nurulazam.github.io/writing/[filename]/ in about 60 seconds.

---

## 6. How to Add a Research Entry

Research entries appear in the **Research** section, browsable by material or by physics.

### Step 1 — Create a new file

```
src/content/research/nite2-dirac-semimetal.md
```

### Step 2 — Frontmatter

```markdown
---
title: "NiTe₂ — Type-II Dirac Semimetal"
description: "Epitaxial growth and temperature-dependent momentum microscopy of NiTe₂."
date: 2026-01-15
material: ["NiTe2"]
physics: ["Topology", "Band structure / k-space", "MBE growth"]
status: "published"
draft: false
---

Content about this research cluster...
```

### Dual-axis tagging — the most important part

The `material[]` and `physics[]` arrays are what power the **By material / By physics** toggle on the Research page. The same entry appears under *every* tag you list.

**`material` — name the specific material(s):**
Use the chemical formula. Common values in use:
`MoS2`, `MoSe2`, `WS2`, `WSe2`, `WTe2`, `NiTe2`, `MnTe`, `MnSb`, `NbSe2`, `FeSe`

**`physics` — name the physical phenomenon or technique:**
Examples: `Laser synthesis`, `MBE growth`, `Vacancy engineering`, `Topology`, `Magnetism`, `Altermagnetism`, `Excitons`, `Band structure / k-space`, `Momentum microscopy`, `Thermal transport`, `Radiation hardness`

You can use any text you like — new tags appear automatically in the browser.

### `status` field

| Value | Meaning |
|---|---|
| `published` | Fully published, peer-reviewed work |
| `in-progress` | Work in progress; shows an "In progress" badge |

---

## 7. How to Add a Software Project

Software entries appear in the **Software Development** section.

### Step 1 — Create a new file

```
src/content/software/raman-peak-identifier.md
```

### Step 2 — Frontmatter

```markdown
---
title: "Raman Peak Identifier"
description: "A Python tool for identifying and fitting Raman spectroscopy peaks in 2D materials data."
date: 2026-03-01
kind: "Research Tools & Scientific Software"
stack: ["Python", "NumPy", "SciPy", "Matplotlib"]
repo: "https://github.com/nurulazam/raman-identifier"
draft: false
---

Description of the tool, what problem it solves, how to use it...
```

### `kind` field — controls which subsection it appears in

| Value | Where it appears |
|---|---|
| `Research Tools & Scientific Software` | The highlighted scientific tools subsection (lead position) |
| `Project` | General project cards |
| `Build Log` | Engineering write-up / build diary style |

---

## 8. How to Update Publications

> Publications are **no longer** stored in a single JSON file. They are now a
> **content collection** — one Markdown file per paper — exactly like Writing,
> Research, and Software. The old `src/data/publications.json` has been removed.

The Publications page (`/publications/`) lists peer-reviewed papers as cards —
representative image on the left; title, authors, venue, abstract, and tags on
the right. Visitors can filter by topic / material / technique and sort by year.
A separate **Theses & Dissertations** block sits at the bottom.

### Where everything lives

| Path | What it is |
|---|---|
| `src/content/publications/*.md` | ★ One file per paper. **This is what you edit.** |
| `src/content/theses/*.md` | ★ One file per thesis (PhD, Master's). |
| `public/images/pubs/` | ★ Representative (TOC) images for papers. |
| `src/pages/publications/index.astro` | The page itself — layout, filters, sort. Rarely edit (only the citation count, see §8.6). |
| `src/content.config.ts` | The schema (field names + types). Edit only to add a new field. |

The universal workflow still applies — after any change:

```bash
git add .
git commit -m "publications: add <short description>"
git push
```

The site rebuilds and goes live automatically in about 60 seconds.

### 8.1 How to add a new publication

**Step 1 — Create a file.** Add a new `.md` in `src/content/publications/`.
The filename is just an internal ID (it does not appear in any URL), so use
lowercase letters, numbers, and hyphens:

```
src/content/publications/mose2-strain-tuning.md
```

**Step 2 — Add the frontmatter** (metadata between the `---` lines), then write
the **abstract as the body** below it:

```markdown
---
title: "Strain-Tunable Excitons in Monolayer MoSe₂"
authors: "Nurul Azam, A. Coauthor, Masoud Mahjouri-Samani"
year: 2026
venue: "ACS Nano"
status: "published"
doi: "10.1021/acsnano.xxxxxxx"
url: "https://pubs.acs.org/doi/abs/10.1021/acsnano.xxxxxxx"
image: "/images/pubs/mose2_strain.png"
imageAlt: "Graphical abstract: strain-tunable excitons in MoSe2"
topics: ["Optics & Excitons"]
materials: ["MoSe2"]
techniques: ["Laser-assisted synthesis"]
keywords: ["2D materials", "strain", "excitons"]
---

Put the full abstract here as ordinary paragraphs. It is shown on the card,
clamped to two lines, and expands in full when the reader clicks "Show abstract".
```

**Step 3 — Add the image** (optional). Drop the TOC graphic into
`public/images/pubs/` and point `image:` at `/images/pubs/<filename>`. See §8.5.

**Step 4 — Deploy.**

```bash
git add .
git commit -m "publications: add MoSe2 strain-tuning paper"
git push
```

> **The abstract is the body, not a frontmatter field.** Everything below the
> closing `---` is the abstract. Leave the body empty for papers that aren't
> published yet — the card then shows "Abstract available on publication."

### 8.2 Frontmatter field reference

| Field | Required | Type | Notes |
|---|---|---|---|
| `title` | ✅ | text | Card heading. |
| `authors` | ✅ | text | Comma-separated string. "Nurul Azam" is **auto-bolded** on the page — type it exactly that way. Co-first-author notes are fine in-line, e.g. `Nurul Azam (co-first author)`. |
| `year` | ✅ | number | Drives the sort. Use the integer year only. |
| `venue` | — | text | Journal or proceedings name. Omit for unpublished work. |
| `status` | — | `published` \| `under-review` \| `in-preparation` | Default `published`. See §8.3. |
| `doi` | — | text | **Bare identifier only**, e.g. `10.1021/acsnano.3c02280` — not the full URL. The page builds the `https://doi.org/...` link. |
| `url` | — | URL | Canonical page link. If set, the title links here; otherwise it falls back to the DOI link. |
| `image` | — | path | `/images/pubs/<file>`. Omit to show a fallback tile. |
| `imageAlt` | — | text | Alt text. Set it whenever `image` is set. |
| `topics` | — | list | Primary filter axis. See §8.4. |
| `materials` | — | list | Secondary filter axis (the specific compound). |
| `techniques` | — | list | Secondary filter axis (method/probe). |
| `keywords` | — | list | Extra search terms; not shown as chips. |
| `featured` | — | true/false | Default `false`. Flags a paper for the **homepage** "Selected publications" list (see §8.8). Does **not** change the `/publications/` page, which always sorts by `year`. |

> **Don't host PDFs.** The site never hosts a copy of the paper. The title and
> DOI link out to the publisher. This is deliberate and applies to every entry.

### 8.3 The `status` field

| Value | On the page |
|---|---|
| `published` | No badge. Title links to `url`/`doi`. Shows its image. |
| `under-review` | "Under review" badge. Fallback tile (usually no image yet). Title is plain text if there's no link. |
| `in-preparation` | "In preparation" badge. Fallback tile. Plain-text title. |

**When a paper gets accepted/published**, edit its file: change `status` to
`published`, fill in `doi`/`url`, add the `image`, and paste the abstract into
the body. Commit and push.

### 8.4 The tag system (three axes)

Tags drive the filter chips. There are three independent lists. **Topic** is the
always-visible filter row; **Material** and **Technique** sit behind the
"More filters" toggle. All three are free text — typing a new value creates a new
chip automatically, so future areas need no code change.

**Topic** — the research theme:
`Synthesis` · `Optics & Excitons` · `Devices & Sensing` · `Thermal Transport` · `Magnetism` · `Topology` · `Radiation / Space`

**Material** — the specific compound:
`MoS2` · `MoSe2` · `WS2` · `WSe2` · `GaSe` · `NiTe2` · `MnSb` · `TMDCs` (umbrella — use only on general/review papers)

**Technique** — the method or probe:
`Laser-assisted synthesis` · `Laser ablation` · `PLD` · `MBE` · `CVD` · `LASER CVD` · `Momentum microscopy` · `Raman spectroscopy` · `NV magnetometry` · `Vacancy engineering`

> **Keep one spelling per concept.** A chip is created for every distinct
> string, so `PLD` and `Pulsed Laser Deposition` would make two separate chips.
> Reuse the exact spellings above. Capitalisation matters.

A paper can carry several tags on each axis — it then appears under every one of
them. Filtering shows one active tag at a time; "All" resets.

### 8.5 Images

- **Location:** `public/images/pubs/`. Reference as `/images/pubs/<filename>`.
- **Filenames are case-sensitive** (GitHub Pages serves them that way). The
  `image:` value must match the file exactly, including capitals and extension.
- **Formats:** `.jpg`, `.png`, `.webp`, or `.gif` (static GIFs render as ordinary
  images). Journal **TOC / graphical-abstract** images are the ideal source.
- **Keep them small** — under ~1 MB, ideally ~600–800 px wide; they display at
  140 × 105.
- **No image?** Leave `image:` out and the card shows a tinted fallback tile
  (the status or venue name) — never a broken image.

### 8.6 Updating the citation count

The headline "N citations on Google Scholar" is updated by hand (Google Scholar
has no usable API, and the site is static). Open
`src/pages/publications/index.astro` and edit the one line near the top:

```js
const CITATIONS = 662; // Google Scholar, updated manually
```

Change the number, commit, push. The number links to your Scholar profile, which
is pulled automatically from `SOCIALS` in `src/config/site.ts`.

### 8.7 Theses & Dissertations

Theses live in their own collection (`src/content/theses/`) and render in a
separate block at the bottom of the page — they are **not** part of the
numbered, filterable paper list (a thesis isn't a journal article).

Add or edit a file like this:

```markdown
---
title: "Thesis Title Here"
degree: "Ph.D., Electrical & Computer Engineering"
institution: "Auburn University, Auburn, Alabama"
year: 2022
advisor: "Advisor Name"
url: "https://www.proquest.com/openview/..."
tags: ["Synthesis", "Laser-assisted synthesis"]
---
```

No body/abstract is needed. The `url` links out (e.g. ProQuest); no thesis PDF is
hosted on the site, same rule as papers.

### 8.8 Homepage "Selected publications"

The homepage (`/`) shows a short **Selected publications** list. It is driven by
the `featured` flag, **not** by year:

- Papers with `featured: true` in their frontmatter are surfaced, newest first,
  up to five. (Currently five are flagged.)
- If no paper is flagged, the homepage falls back to the five most recent.
- Each title links to its `url` (or the DOI link as a fallback), and "Nurul Azam"
  is bolded — the same conventions as the `/publications/` page.

To change which papers appear on the homepage, set or remove `featured: true` on
the relevant files in `src/content/publications/`. This does not affect the
`/publications/` page, which always lists every paper sorted by year.

### 8.9 How the page behaves (reference)

- **Order:** newest year first by default; the **Sort** dropdown flips to oldest-first.
- **Filtering:** one active chip at a time across all three axes; "All" resets.
  "More filters" reveals the Material and Technique rows.
- **Abstracts:** clamped to two lines; "Show abstract" expands the full text.
- **Author emphasis:** "Nurul Azam" is bolded automatically in every author line.
- **Links:** title → `url`, else `https://doi.org/<doi>`; entries with neither
  show a plain (unlinked) title.
- **Search:** abstracts are inside the page body, so site search (Pagefind)
  indexes them.

### 8.10 Troubleshooting

| Symptom | Fix |
|---|---|
| New paper doesn't appear | Confirm the file is in `src/content/publications/`, has `.md`, valid frontmatter, and a `year`. Confirm the push went green in the Actions tab. |
| Build fails after editing a paper | A frontmatter field is missing or the wrong type — the build error names the file and field. Common cause: `year` written as text, or `status` not one of the three allowed values. |
| Image is broken | Check the filename **case** and extension match the file in `public/images/pubs/` exactly, and that the path starts with `/images/pubs/`. |
| A filter chip is missing or duplicated | A tag is misspelled or capitalised differently from §8.4. Make the spelling identical across papers. |
| Title isn't a link | The entry has no `url` and no `doi`. Add one (papers in prep are unlinked by design). |
| Citation number is stale | Edit `const CITATIONS` in `src/pages/publications/index.astro` (§8.6). |

### 8.11 Quick reference

| Task | Where | Time |
|---|---|---|
| Add a paper | new `.md` in `src/content/publications/` | 5 min |
| Mark a paper published | edit its `.md`: `status`, `doi`/`url`, `image`, abstract body | 3 min |
| Feature a paper on the homepage | set `featured: true` in its `.md` (§8.8) | 1 min |
| Add/replace a TOC image | `public/images/pubs/` + set `image:` | 2 min |
| Add a new tag/filter | type it in a paper's `topics`/`materials`/`techniques` | 1 min |
| Update citation count | `const CITATIONS` in the page file (§8.6) | 1 min |
| Add a thesis | new `.md` in `src/content/theses/` | 3 min |

---

## 9. How to Add a Conference Entry

Conference talks and posters live as Markdown files in `src/content/conferences/`,
one file per entry — the same pattern as Publications. The page at `/conferences/`
lists them newest-first with filter chips (venue, plus Invited / Presented / Co-authored)
and a "Conference journal" section at the bottom.

> **Source of truth:** the full dataset is kept in `docs/conferences-master.md`. When you
> add or change an entry, update both that file and the content file (or regenerate the
> content files from the master).

### Step 1 — Create a new file

```
src/content/conferences/spie-2027-new-quantum-talk.md
                        ↑
        filename convention: <venue>-<year>-<short-slug>
```

Use lowercase letters, numbers, and hyphens only. No spaces.

### Step 2 — Add the frontmatter

Conference entries have **no body** — everything is in the frontmatter between the `---` lines:

```markdown
---
title: "Full title of the talk or poster"
authors: "First Author, Nurul Azam, Third Author"
year: 2027
venue: "SPIE"
event: "SPIE Photonics West 2027 (Proc. SPIE 14000, art. 1400001)"
location: "San Francisco, CA"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.xxxxxxx"
topics: ["Synthesis"]
materials: ["WSe2"]
techniques: ["Laser-assisted synthesis"]
---
```

### Frontmatter fields

| Field | Required | Values | Notes |
|---|---|---|---|
| `title` | ✅ Yes | Any text | Quote it if it contains a colon |
| `authors` | ✅ Yes | Author string | "Nurul Azam" is auto-bolded on the page |
| `year` | ✅ Yes | Number (e.g. `2027`) | Drives newest-first sort |
| `venue` | ✅ Yes | See below | The filter-chip group |
| `event` | ✅ Yes | Full conference / proceedings name | Shown in the meta line |
| `location` | No | `"City, ST"` or `"Virtual (Online Only)"` | |
| `type` | ✅ Yes | `invited` · `talk` · `poster` | Sets the badge |
| `presenter` | No | `true` / `false` | Did **Nurul Azam** present it? Default `true` |
| `presenterName` | No | Name | Who presented — shown as "· presented by …" |
| `doi` | No | Bare identifier, e.g. `10.1117/12.3078960` | SPIE entries; renders a DOI link on the title |
| `url` | No | Full URL | Abstract / event page (e.g. APS `meetings.aps.org/link/…`) |
| `poster` | No | `/posters/<slug>.pdf` | Scanned hard copy; shows a "View poster" link |
| `topics` | No | `["Synthesis"]` | Secondary filter (under "+ More filters") |
| `materials` | No | `["NiTe2"]` | Secondary filter |
| `techniques` | No | `["Momentum microscopy"]` | Secondary filter |
| `featured` | No | `true` / `false` | Reserved; default `false` |

### Field notes that matter

- **`presenter` vs `presenterName`.** `presenter` is the boolean that powers the
  **Presented / Co-authored** filter. `presenterName` is just the text shown in brackets.
  When you presented, set `presenter: true` and `presenterName: "Nurul Azam"` (it renders in
  the accent colour). When a co-author presented, set `presenter: false` and name them.
- **`doi` vs `url`.** SPIE papers use `doi` (the bare identifier — no `https://doi.org/`).
  APS abstracts and other event pages use `url` (a full link). If an entry has neither, the
  title shows as plain text. **Never set `url: ""`** — an empty string is not a valid URL and
  the build will fail. Omit the field instead.
- **`venue`.** Any value works and becomes a filter chip automatically. Keep one spelling per
  venue (`SPIE`, `APS`, `MRS`, `NACMBE`, `ICALEO`, `ECS`, `Texas STEM`, `CNMS`, `Showcase` are
  the ones in use). The first five show first; new ones append.

### Adding a poster scan

1. Scan the hard copy as a PDF (or image).
2. Save it to `public/posters/<slug>.pdf` (matching the entry filename keeps it tidy).
3. Set `poster: "/posters/<slug>.pdf"` in that entry's frontmatter.

The card then shows a **View poster** link. Leave `poster` empty (or omit it) and no link appears.

### The Conference journal

The journal section at the bottom of `/conferences/` does **not** use a separate engine — it
reuses the Writing collection. To add a journal note, write a normal blog post in
`src/content/writing/` with:

```markdown
---
category: "Field Notes"
---
```

It appears both in the Conference journal and in `/writing/`. Until the first Field Note exists,
the section shows a quiet "No field notes yet."

### Homepage "Recent talks"

The homepage (`/`) shows a **Recent talks** section drawn from this collection. It is built
automatically — there is nothing to flag:

- Only entries you **presented** are shown (`presenter: true`).
- They are sorted newest year first, and within a year ranked **invited → talk → poster**
  (so a poster only appears if there aren't enough talks).
- The top **three** are shown, each linking to its `url`/`doi`, with an "All talks →" link to
  `/conferences/`.

Adding a new presented talk for the current year will push it onto the homepage automatically.

### Step 3 — Deploy

```bash
git add .
git commit -m "conferences: add <short description>"
git push
```

Live at `https://nurulazam.github.io/conferences/` in about 60 seconds.

### Schema reference

Defined in `src/content.config.ts` as the `conferences` collection — see §16 for the full
schema alongside the other collections.

---

## 10. How to Update the CV

The CV download button on the About page links to `/cv.pdf`.

To update:
1. Export your CV as a PDF.
2. Rename it exactly `cv.pdf`.
3. Replace the file at `public/cv.pdf`.
4. Commit and push.

```bash
# After copying the new cv.pdf into public/
git add public/cv.pdf
git commit -m "update CV — June 2026"
git push
```

---

## 11. Updating Site Configuration

All site-wide settings live in **one file**: `src/config/site.ts`

Open it and you will see clear sections:

### Changing the identity sentence (hero text)

```typescript
identity:
  'I synthesise and study quantum materials using MBE, laser-assisted growth, momentum ' +
  'microscopy, Raman spectroscopy, and AI-guided analysis.',
```

Edit the text between the quote marks. This appears as the large hero statement on the home page.

### Changing the tagline

```typescript
tagline: 'Quantum materials: synthesis, spectroscopy, and scientific software',
```

This appears in the browser tab and in the footer.

### Adding or removing navigation links

```typescript
export const NAV: { label: string; href: string }[] = [
  { label: 'Research', href: '/research/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Software', href: '/software/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Conferences', href: '/conferences/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'About', href: '/about/' },
];
```

Add, remove, or reorder entries. The header and footer update automatically everywhere.

> ⚠️ **Important:** Do not add more than 6–7 nav items or they won't fit on mobile.

### Updating social links

```typescript
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/...' },
  { label: 'ORCID', href: 'https://orcid.org/...' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nurulazam/' },
  { label: 'GitHub', href: 'https://github.com/nurulazam' },
];
```

Update the `href` values. These appear in the footer.

### Updating the contact email

Search `site.ts` and the contact page for `nurul_azam@outlook.com` and replace with the new address.

### Updating GoatCounter analytics endpoint

```typescript
analytics: {
  goatcounter: 'https://nurul-azam.goatcounter.com/count',
},
```

Change the URL if you ever move to a different GoatCounter account.

---

## 12. Design System — Changing Colours, Fonts, Spacing

All visual settings live in **one file**: `src/styles/tokens.css`

> ⚠️ **Critical rule:** Never put colour hex values or font names directly in any other file. Always change them here, and they update everywhere automatically.

### Changing the accent colour

The accent is a warm persimmon (used for buttons, links, and highlights):

```css
:root {
  --accent:      #C44718;   /* light theme */
  --accent-ink:  #9E3A14;   /* used as text on light backgrounds */
  --accent-wash: #FBEADF;   /* very faint tinted backgrounds */
}

[data-theme="dark"] {
  --accent:      #F2723B;   /* brighter in dark mode for contrast */
  --accent-ink:  #F2723B;
  --accent-wash: #2A211B;
}
```

To change the accent, update all six values in both `:root` (light) and `[data-theme="dark"]`.

> ⚠️ **Check contrast:** After changing the accent, verify the text on it has at least 4.5:1 contrast ratio. Use https://webaim.org/resources/contrastchecker/

### Changing the background

```css
:root {
  --bg:       #FBF9F4;   /* warm paper white */
  --surface:  #FFFFFF;   /* card/panel backgrounds */
}
[data-theme="dark"] {
  --bg:       #15140F;
  --surface:  #1D1B16;
}
```

### Changing fonts

The site uses three fonts with specific roles:

| Variable | Font | Role |
|---|---|---|
| `--font-display` | Fraunces | Headlines, the brand name |
| `--font-body` | Newsreader | All body text and reading |
| `--font-ui` | IBM Plex Sans | Nav, labels, captions, buttons |

To change a font:
1. Find the new font on https://fonts.google.com
2. Get its `@import` URL
3. Update the `<link>` tag in `src/layouts/BaseLayout.astro`
4. Update the font name in `--font-display`, `--font-body`, or `--font-ui` in `tokens.css`

---

## 13. Images and Assets

### Where to put images

Images used in content (posts, research entries) go in the `public/` folder:

```
public/
  images/
    my-research-figure.jpg
    mbe-chamber.png
```

Reference them in Markdown as:

```markdown
![Caption text here](/images/my-research-figure.jpg)
```

Or set as a cover image in frontmatter:

```markdown
---
cover: "/images/my-research-figure.jpg"
coverAlt: "An MBE chamber with a bright blue molecular beam"
---
```

### Image format recommendations

| Use case | Format | Why |
|---|---|---|
| Photographs | `.jpg` | Smaller file size |
| Diagrams with transparency | `.png` | Preserves sharp edges |
| Scientific figures | `.png` or `.svg` | Crisp at all screen sizes |
| Animated figures | `.gif` or `.webp` | Only if truly needed |

Keep images under **1 MB** wherever possible. For photographs, export at 1600px wide maximum.

### The CV

Place at `public/cv.pdf` (see §10).

---

## 14. Deploying Changes (Automatic)

Deployment is **fully automatic**. You never manually upload files.

### How it works

1. You make changes locally.
2. You run `git push`.
3. GitHub Actions automatically:
   - Installs dependencies
   - Builds the site (Astro + Pagefind)
   - Deploys to https://nurulazam.github.io
4. The site is live in about **60 seconds**.

### The standard workflow

```bash
# 1. Check what you changed (optional but good practice)
git status

# 2. Stage all changes
git add .

# 3. Commit with a clear message
git commit -m "describe what you changed"

# 4. Push and trigger the deploy
git push
```

### Watching the deploy

Go to https://github.com/nurulazam/nurulazam.github.io/actions

You will see a workflow running. A green tick means success. A red cross means something failed — click it to see the error message and bring it to a developer.

### If you accidentally break something

Because every change is a Git commit, you can always roll back:

```bash
# See recent commits
git log --oneline -10

# Roll back to a specific commit (replace XXXXXXX with the commit hash)
git revert XXXXXXX
git push
```

Or the nuclear option — roll back everything to the last good state:

```bash
git reset --hard HEAD~1   # undoes the last commit
git push --force          # ⚠️ only use if you're sure
```

---

## 15. Analytics (GoatCounter)

The site uses [GoatCounter](https://www.goatcounter.com) for privacy-friendly analytics.

- **No cookies** — no consent banner needed.
- **No personal data collected.**
- **Dashboard is private** — only you see the numbers.
- There is **no public visitor counter** on the site itself.

### Viewing stats

Go to: https://nurul-azam.goatcounter.com

You will see page views, referrers, and countries. Stats update in real time.

---

## 16. Content Schemas — Full Reference

### Writing (`src/content/writing/*.md`)

```markdown
---
title: "Required — the page title"
description: "Required — 1–2 sentence summary"
date: 2026-01-15              # Required — YYYY-MM-DD
category: "Technique Explainers"  # Required — must match exactly
tags: ["tag1", "tag2"]        # Optional
draft: false                  # Optional — default is false
updated: 2026-03-01           # Optional — date of last revision
cover: "/images/fig.jpg"      # Optional — hero image path
coverAlt: "Alt text"          # Required IF cover is set
---
```

### Research (`src/content/research/*.md`)

```markdown
---
title: "Required"
description: "Required"
date: 2026-01-15              # Required
material: ["WSe2", "NiTe2"]   # Recommended — for By material view
physics: ["Topology"]         # Recommended — for By physics view
status: "published"           # Optional — "published" or "in-progress"
draft: false                  # Optional
cover: "/images/fig.jpg"      # Optional
coverAlt: "Alt text"          # Required IF cover is set
---
```

### Software (`src/content/software/*.md`)

```markdown
---
title: "Required"
description: "Required"
date: 2026-01-15              # Required
kind: "Research Tools & Scientific Software"   # Required — see §7
stack: ["Python", "NumPy"]    # Optional — technology tags
repo: "https://github.com/..."  # Optional — repository link
draft: false                  # Optional
---
```

### Publications (`src/content/publications/*.md`)

One Markdown file per paper; the **abstract is the body** below the frontmatter. See §8.

```markdown
---
title: "Required"
authors: "Required — comma-separated; 'Nurul Azam' is auto-bolded"
year: 2023                    # Required — integer (drives sort)
venue: "ACS Nano"             # Optional — journal / proceedings
status: "published"           # Optional — published | under-review | in-preparation
doi: "10.1021/..."            # Optional — bare identifier, not the full URL
url: "https://..."            # Optional — canonical link (title falls back to DOI)
image: "/images/pubs/fig.png" # Optional — TOC graphic
imageAlt: "Alt text"          # Required IF image is set
topics: ["Synthesis"]         # Optional — primary filter axis
materials: ["MoSe2"]          # Optional — secondary filter axis
techniques: ["Laser-assisted synthesis"]  # Optional — secondary filter axis
keywords: ["2D materials"]    # Optional — extra search terms (not shown as chips)
featured: false               # Optional — true surfaces it on the homepage (see §8.8)
---

Abstract text goes here as the body.
```

### Theses (`src/content/theses/*.md`)

No body needed; renders in its own block at the bottom of `/publications/`. See §8.7.

```markdown
---
title: "Required"
degree: "Ph.D., Electrical & Computer Engineering"   # Required
institution: "Auburn University, Auburn, Alabama"    # Required
year: 2022                    # Required — integer
advisor: "Advisor Name"       # Optional
url: "https://www.proquest.com/..."  # Optional — repository link
tags: ["Synthesis"]           # Optional
---
```

### Conferences (`src/content/conferences/*.md`)

No body; everything is in the frontmatter. See §9.

```markdown
---
title: "Required"
authors: "Required — 'Nurul Azam' is auto-bolded"
year: 2026                    # Required — integer (drives sort)
venue: "SPIE"                 # Required — filter-chip group
event: "Full conference / proceedings name"  # Required
location: "San Francisco, CA" # Optional
type: "invited"               # Required — invited | talk | poster
presenter: true               # Optional — did Azam present? Default true
presenterName: "Nurul Azam"   # Optional — who presented (bracket text)
doi: "10.1117/12...."         # Optional — SPIE bare identifier
url: "https://..."            # Optional — abstract / event page (never set to "")
poster: "/posters/slug.pdf"   # Optional — scanned hard copy
topics: ["Topology"]          # Optional
materials: ["NiTe2"]          # Optional
techniques: ["Momentum microscopy"]  # Optional
featured: false               # Optional — reserved
---
```

---

## 17. Going Live — Removing Draft Mode

When you are ready to make real content public:

### Step 1 — Set `draft: false` on your content files

In each Markdown file, either remove the `draft` field or set it to `false`:

```markdown
---
title: "My Post"
draft: false    ← change this, or delete the line
---
```

### Step 2 — Remove draft includes from index pages

Each index page (writing, research, software) currently shows draft content so placeholder entries are visible during development. When real content is in place, open each index file and find the comment that says:

```javascript
// TODO: Remove draft: true include when real content lands
// Change the filter from: ({ data }) => true
// To: ({ data }) => !data.draft
```

Make that one-line change in:
- `src/pages/writing/index.astro`
- `src/pages/research/index.astro`
- `src/pages/software/index.astro`
- `src/pages/index.astro` (home page)

### Step 3 — Delete or archive placeholder files

The example placeholder files in `src/content/` can be deleted once you have real content:

```bash
rm src/content/writing/example-laser-synthesis.md
rm src/content/research/example-nite2.md
rm src/content/software/example-arpes-viewer.md
```

---

## 18. Troubleshooting

### "npm: command not found"
Node.js is not installed. Download it from https://nodejs.org (LTS version).

### "npm run dev" shows an error about a missing field
A content file has an invalid or missing frontmatter field. Read the error message — it tells you exactly which file and field. Fix the frontmatter to match the schema in §16.

### Build fails with "getStaticPaths" error
Usually means a Markdown file has broken frontmatter — a missing `---` or an invalid value. Open the file mentioned in the error.

### A new post is not appearing on the site
Check: (1) the file is saved with `.md` extension, (2) `draft: false`, (3) the `category` matches one of the valid values exactly, (4) you ran `git push` and the Actions workflow went green.

### Search is not returning results
Search (Pagefind) only works on the **built** site, not the dev server. Run `npm run build && npm run preview` and test search at http://localhost:4321.

### The site looks different from what I see locally
Wait 60 seconds after pushing for the deploy to complete. Check the Actions tab for errors.

### Dark mode is not remembering my choice
This is stored in the browser's `localStorage`. If a user is in private/incognito mode, it will reset each visit.

### The CV download link does not work
The file `public/cv.pdf` is missing or incorrectly named. Make sure the filename is exactly `cv.pdf` (lowercase) in the `public/` folder.

### I accidentally pushed broken code
Roll back using Git (see §14). If the deploy is already running, it will fail with a red cross in Actions — the live site stays at the last successful deploy until a working build is pushed.

---

## 19. What NOT to Touch

These files and folders are critical infrastructure. Editing them without understanding the full system can break the site.

| File / Folder | Why not to edit |
|---|---|
| `.github/workflows/deploy.yml` | The auto-deploy workflow. Changing it breaks deployments. |
| `src/layouts/BaseLayout.astro` | The HTML shell of every page. Errors here break all pages. |
| `src/layouts/ArticleLayout.astro` | The template for every post. Changes affect every article. |
| `src/components/Header.astro` | The navigation. Add nav items only via `site.ts`, never here. |
| `src/content.config.ts` | The content schema. Changing field names breaks all existing content files. |
| `astro.config.mjs` | Framework configuration. Changing `output: 'static'` to SSR breaks GitHub Pages. |
| `package.json` / `package-lock.json` | Dependency definitions. Do not manually edit. |
| `CLAUDE.md` | Project rules for AI assistants. Deleting it causes AI tools to lose context. |
| `BUILD_PLAN.md` | Development history. Keep as a record. |

**The golden rule:** if a file is not listed in §4 as "you edit most," leave it alone unless you know exactly what you are doing.

---

## 20. Phase 2 — Planned Features

These features are designed and ready to build, but not yet implemented. They require a backend (Supabase/PostgreSQL) and are planned for a future phase.

| Feature | What it is |
|---|---|
| **Keystatic CMS** | A visual editor so you can write posts through a web UI instead of editing Markdown files directly |
| **Comments** | Reader comments on blog posts and software write-ups, owned in a PostgreSQL database with full export capability |
| **Newsletter** | Email subscription with subscribers stored in the owner's own database |
| **Interactive figures** | Live, manipulable data visualisations embedded in posts (growth curves, Raman spectra, band maps) |
| **Bengali science writing** | A writing category for science explainers in Bengali |
| **Citation widget** | Live citation count from the Semantic Scholar API |
| **Pipeline animation** | The full growth→structure→spectroscopy→band structure→AI feedback loop hero animation (deferred until the AI-guided discovery work is published) |

When Phase 2 is ready to build, use Claude Code with the `CLAUDE.md` and `BUILD_PLAN.md` files for guidance.

---

*End of manual. For questions about the codebase, open an issue at https://github.com/nurulazam/nurulazam.github.io/issues*
