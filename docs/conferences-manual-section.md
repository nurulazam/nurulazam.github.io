## How to Add a Conference Entry

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

### Step 3 — Deploy

```bash
git add .
git commit -m "conferences: add <short description>"
git push
```

Live at `https://nurulazam.github.io/conferences/` in about 60 seconds.

### Schema reference

Defined in `src/content.config.ts` as the `conferences` collection:

```ts
const conferences = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/conferences' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string(),
    event: z.string(),
    location: z.string().optional(),
    type: z.enum(['invited', 'talk', 'poster']),
    presenter: z.boolean().default(true),
    presenterName: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    poster: z.string().optional(),
    topics: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    techniques: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});
```
