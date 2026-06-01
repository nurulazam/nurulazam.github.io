# Site Maintenance Manual — Publications (Updated)

> **This section supersedes the old §8 "How to Update Publications" and the
> `publications.json` parts of §15.** Publications are no longer stored in a
> single JSON file. They are now a **content collection** — one Markdown file
> per paper — exactly like Writing, Research, and Software. The old
> `src/data/publications.json` has been removed.

---

## 8. Publications

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

---

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

---

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
| `featured` | — | true/false | Reserved for future pinning. **Does not currently change ordering** — the page sorts strictly by `year`. |

> **Don't host PDFs.** The site never hosts a copy of the paper. The title and
> DOI link out to the publisher. This is deliberate and applies to every entry.

---

### 8.3 The `status` field

| Value | On the page |
|---|---|
| `published` | No badge. Title links to `url`/`doi`. Shows its image. |
| `under-review` | "Under review" badge. Fallback tile (usually no image yet). Title is plain text if there's no link. |
| `in-preparation` | "In preparation" badge. Fallback tile. Plain-text title. |

**When a paper gets accepted/published**, edit its file: change `status` to
`published`, fill in `doi`/`url`, add the `image`, and paste the abstract into
the body. Commit and push.

---

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

---

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

---

### 8.6 Updating the citation count

The headline "N citations on Google Scholar" is updated by hand (Google Scholar
has no usable API, and the site is static). Open
`src/pages/publications/index.astro` and edit the one line near the top:

```js
const CITATIONS = 662; // Google Scholar, updated manually
```

Change the number, commit, push. The number links to your Scholar profile, which
is pulled automatically from `SOCIALS` in `src/config/site.ts`.

---

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

---

### 8.8 How the page behaves (reference)

- **Order:** newest year first by default; the **Sort** dropdown flips to oldest-first.
- **Filtering:** one active chip at a time across all three axes; "All" resets.
  "More filters" reveals the Material and Technique rows.
- **Abstracts:** clamped to two lines; "Show abstract" expands the full text.
- **Author emphasis:** "Nurul Azam" is bolded automatically in every author line.
- **Links:** title → `url`, else `https://doi.org/<doi>`; entries with neither
  show a plain (unlinked) title.
- **Search:** abstracts are inside the page body, so site search (Pagefind)
  indexes them.

---

### 8.9 Troubleshooting

| Symptom | Fix |
|---|---|
| New paper doesn't appear | Confirm the file is in `src/content/publications/`, has `.md`, valid frontmatter, and a `year`. Confirm the push went green in the Actions tab. |
| Build fails after editing a paper | A frontmatter field is missing or the wrong type — the build error names the file and field. Common cause: `year` written as text, or `status` not one of the three allowed values. |
| Image is broken | Check the filename **case** and extension match the file in `public/images/pubs/` exactly, and that the path starts with `/images/pubs/`. |
| A filter chip is missing or duplicated | A tag is misspelled or capitalised differently from §8.4. Make the spelling identical across papers. |
| Title isn't a link | The entry has no `url` and no `doi`. Add one (papers in prep are unlinked by design). |
| Citation number is stale | Edit `const CITATIONS` in `src/pages/publications/index.astro` (§8.6). |

---

### 8.10 Quick reference

| Task | Where | Time |
|---|---|---|
| Add a paper | new `.md` in `src/content/publications/` | 5 min |
| Mark a paper published | edit its `.md`: `status`, `doi`/`url`, `image`, abstract body | 3 min |
| Add/replace a TOC image | `public/images/pubs/` + set `image:` | 2 min |
| Add a new tag/filter | type it in a paper's `topics`/`materials`/`techniques` | 1 min |
| Update citation count | `const CITATIONS` in the page file (§8.6) | 1 min |
| Add a thesis | new `.md` in `src/content/theses/` | 3 min |

---

*End of Publications section. Schema definitions for both collections live in
`src/content.config.ts` under `publications` and `theses`.*
