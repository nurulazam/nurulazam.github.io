# Site Maintenance Manual
## nurulazam.github.io — Dr. Nurul Azam's Research Website

**For:** Anyone maintaining or updating this site
**Last updated:** May 2026
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
9. [How to Update the CV](#9-how-to-update-the-cv)
10. [Updating Site Configuration](#10-updating-site-configuration)
11. [Design System — Changing Colours, Fonts, Spacing](#11-design-system--changing-colours-fonts-spacing)
12. [Images and Assets](#12-images-and-assets)
13. [Deploying Changes (Automatic)](#13-deploying-changes-automatic)
14. [Analytics (GoatCounter)](#14-analytics-goatcounter)
15. [Content Schemas — Full Reference](#15-content-schemas--full-reference)
16. [Going Live — Removing Draft Mode](#16-going-live--removing-draft-mode)
17. [Troubleshooting](#17-troubleshooting)
18. [What NOT to Touch](#18-what-not-to-touch)
19. [Phase 2 — Planned Features](#19-phase-2--planned-features)

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
| Update publications list | 10 min | §8 |
| Replace the CV PDF | 2 min | §9 |
| Change nav links | 2 min | §10 |
| Change the accent colour | 2 min | §11 |
| Deploy changes | 1 min (push + 60s auto) | §13 |
| View analytics | Instant | §14 |

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
│   │   └── software/          ←   Software projects
│   │
│   ├── data/
│   │   └── publications.json  ← ★ Publications list — edit this JSON file
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

### The four files you edit most

| File | What you change there |
|---|---|
| `src/content/writing/*.md` | Blog posts |
| `src/content/research/*.md` | Research entries |
| `src/data/publications.json` | Publications list |
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

You can also add images (see §12).

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

Publications are stored in a single JSON file: `src/data/publications.json`.

Open it in any text editor. The structure looks like this:

```json
{
  "note": "Verify against Google Scholar before publishing.",
  "selected": [
    {
      "year": 2023,
      "authors": "N. Azam, M. Mahjouri-Samani",
      "title": "Time-Resolved Growth of 2D WSe2 Monolayer Crystals",
      "venue": "ACS Nano",
      "doi": "10.1021/acsnano.xxxxxxx"
    },
    {
      "year": 2022,
      "authors": "N. Azam, et al.",
      "title": "Laser-Assisted Synthesis of Monolayer 2D MoSe2 Crystals with Tunable Vacancy Concentrations",
      "venue": "ACS Applied Nano Materials",
      "doi": ""
    }
  ]
}
```

### Adding a new publication

Copy an existing entry and add it to the array. Keep them sorted **newest year first**.

```json
{
  "year": 2026,
  "authors": "N. Azam, et al.",
  "title": "Full title of your new paper",
  "venue": "Journal Name",
  "doi": "10.xxxx/xxxxxxx"
}
```

### Adding a DOI

When a DOI is available, fill in the `doi` field (just the DOI identifier, not the full URL):

```json
"doi": "10.1021/acsnano.3c09821"
```

The site automatically renders it as a clickable link. If the field is empty (`""`), no link appears.

### Removing the placeholder note

Once you have verified all entries against your Google Scholar profile, delete the `"note"` field from `publications.json`. The caveat notice will disappear from the published page.

---

## 9. How to Update the CV

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

## 10. Updating Site Configuration

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

## 11. Design System — Changing Colours, Fonts, Spacing

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

## 12. Images and Assets

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

Place at `public/cv.pdf` (see §9).

---

## 13. Deploying Changes (Automatic)

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

## 14. Analytics (GoatCounter)

The site uses [GoatCounter](https://www.goatcounter.com) for privacy-friendly analytics.

- **No cookies** — no consent banner needed.
- **No personal data collected.**
- **Dashboard is private** — only you see the numbers.
- There is **no public visitor counter** on the site itself.

### Viewing stats

Go to: https://nurul-azam.goatcounter.com

You will see page views, referrers, and countries. Stats update in real time.

---

## 15. Content Schemas — Full Reference

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

### Publications (`src/data/publications.json`)

```json
{
  "year": 2023,              // Required — integer
  "authors": "N. Azam, ...", // Required — author string
  "title": "Full title",     // Required
  "venue": "ACS Nano",       // Required — journal or conference name
  "doi": "10.1021/..."       // Optional — leave "" if not yet available
}
```

---

## 16. Going Live — Removing Draft Mode

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

## 17. Troubleshooting

### "npm: command not found"
Node.js is not installed. Download it from https://nodejs.org (LTS version).

### "npm run dev" shows an error about a missing field
A content file has an invalid or missing frontmatter field. Read the error message — it tells you exactly which file and field. Fix the frontmatter to match the schema in §15.

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
Roll back using Git (see §13). If the deploy is already running, it will fail with a red cross in Actions — the live site stays at the last successful deploy until a working build is pushed.

---

## 18. What NOT to Touch

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

## 19. Phase 2 — Planned Features

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
