# Homepage update — task brief for Claude Code

## Goal
Make the homepage feed its **Selected publications** and a **new Recent talks**
section from the Astro content collections instead of the old
`src/data/publications.json`. Then flag five papers as featured.

## Ground rule
If the repo doesn't match this brief at any step — a missing file, no publication whose
title matches, an unexpected second consumer of the JSON, a section that doesn't look like
the snippet described — **stop and report what you found. Do not guess or approximate.**

## Scope — what may and may not change
- The **only** edit to content files is adding `featured: true` to the five publication
  files named in Edit 5. This flag does not change the `/publications/` page (that page
  sorts by year); it only tells the homepage which papers to surface.
- Do **not** modify any other publication or conference content file, the `/publications/`
  or `/conferences/` pages, the nav, or the master files in `docs/`. Leave full author
  strings and all existing tab content exactly as they are.
- Every other edit is confined to `src/pages/index.astro`.

## Repo facts (already verified)
- Publications live in `src/content/publications/*.md` — collection `publications`,
  which has a `featured: boolean` field (default false).
- Conferences live in `src/content/conferences/*.md` — collection `conferences`
  (28 files present), with `presenter: boolean` and `type: 'invited'|'talk'|'poster'`.
- `src/pages/index.astro` still imports `src/data/publications.json`. That import
  must be removed.

---

---

## Step 0 — investigate the Conferences route (read-only, report back first)
The new Recent talks section links to `/conferences/`, so that route must exist or the
"All talks →" link 404s. Before making any edits, check and report:
1. Does `src/pages/conferences/index.astro` exist?
2. Does the `NAV` array in `src/config/site.ts` include a Conferences link?

Report both findings. If either is missing, the Conferences tab/route is absent — say so
clearly, but do **not** create the page or edit the nav as part of this task. The owner
will decide separately.

## File to edit: `src/pages/index.astro`

### Edit 1 — frontmatter (the `---` script block at the top)

**Delete** this import line:

```ts
import pubsData from "../data/publications.json";
```

**Replace** these two lines:

```ts
const pubs = pubsData.selected;
const pubNote: string = (pubsData as { note: string; selected: typeof pubs }).note;
```

**with:**

```ts
const allPubs = (await getCollection("publications")).sort(
  (a, b) => b.data.year - a.data.year
);
const featuredPubs = allPubs.filter((p) => p.data.featured);
// Show featured papers; fall back to the 5 most recent if none are flagged yet.
const pubs = (featuredPubs.length ? featuredPubs : allPubs).slice(0, 5);

// Split an author string so "Nurul Azam" can be bolded in the template.
const boldAuthor = (authors: string) => authors.split(/(Nurul Azam)/g);

// Recent talks: only entries Azam presented; newest year first; within a year,
// invited > talk > poster — so posters only appear as a fallback when talks run out.
const typeRank = (t: string) => (t === "invited" ? 0 : t === "talk" ? 1 : 2);
const recentTalks = (await getCollection("conferences"))
  .filter((c) => c.data.presenter)
  .sort(
    (a, b) =>
      b.data.year - a.data.year ||
      typeRank(a.data.type) - typeRank(b.data.type)
  )
  .slice(0, 3);
```

(`getCollection` is already imported in this file. Leave it.)

---

### Edit 2 — Selected publications markup

Inside the `<!-- ④ Selected publications -->` section, **replace the entire
`<ol class="pub-list"> … </ol>` block AND the `{pubNote && …}` line that follows it**
with:

```astro
    <ol class="pub-list">
      {pubs.map((pub) => {
        const href =
          pub.data.url || (pub.data.doi ? `https://doi.org/${pub.data.doi}` : null);
        return (
          <li class="pub">
            <span class="pub__year ui">{pub.data.year}</span>
            <div class="pub__body">
              {href ? (
                <a
                  class="pub__title pub__title--link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.data.title}
                </a>
              ) : (
                <p class="pub__title">{pub.data.title}</p>
              )}
              <p class="pub__meta ui">
                {boldAuthor(pub.data.authors).map((seg) =>
                  seg === "Nurul Azam" ? <strong>{seg}</strong> : seg
                )}
                {pub.data.venue && (<>&ensp;·&ensp;<em>{pub.data.venue}</em></>)}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
```

The old placeholder note (`pubNote`) is intentionally dropped.

---

### Edit 3 — Recent talks section (new)

Insert this **immediately after the closing `</section>` of Selected publications**,
before `<!-- ⑤ … software preview -->`:

```astro
  <!-- ④½ Recent talks ---------------------------------------------------- -->
  <section class="talks container" aria-label="Recent talks">
    <header class="section-head">
      <p class="eyebrow">Recent talks</p>
      <a class="section-head__link ui" href="/conferences/">All talks →</a>
    </header>

    <ol class="pub-list">
      {recentTalks.map((talk) => {
        const href =
          talk.data.url || (talk.data.doi ? `https://doi.org/${talk.data.doi}` : null);
        const typeLabel =
          talk.data.type === "invited" ? "Invited talk"
          : talk.data.type === "poster" ? "Poster"
          : "Talk";
        return (
          <li class="pub">
            <span class="pub__year ui">{talk.data.year}</span>
            <div class="pub__body">
              <div class="talk__head">
                <span class="badge">{typeLabel}</span>
                <span class="eyebrow">{talk.data.venue}</span>
              </div>
              {href ? (
                <a
                  class="pub__title pub__title--link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {talk.data.title}
                </a>
              ) : (
                <p class="pub__title">{talk.data.title}</p>
              )}
              <p class="pub__meta ui">
                {talk.data.event}
                {talk.data.location && (<>&ensp;·&ensp;{talk.data.location}</>)}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  </section>
```

---

### Edit 4 — CSS (inside the `<style>` block)

Add near the existing `.pub__*` rules:

```css
  a.pub__title--link {
    display: block;
    text-decoration: none;
    transition: color var(--transition-base);
  }
  a.pub__title--link:hover { color: var(--accent-ink); }
```

Add near the other section blocks (e.g. after the `.publications` rules):

```css
  .talks {
    padding-block: var(--space-xl);
    border-top: 1px solid var(--rule);
  }
  .talk__head {
    display: flex;
    align-items: center;
    gap: var(--space-s);
    margin-bottom: var(--space-3xs);
  }
```

---

## Edit 5 — Flag the five featured publications

In `src/content/publications/`, find the files for these five papers (match on the
title) and set `featured: true` in each one's frontmatter (add the line if absent):

1. **Time-Resolved Growth of 2D WSe2 Monolayer Crystals** — 2023, ACS Nano
2. **Laser-Assisted Synthesis of Monolayer 2D MoSe2 Crystals with Tunable Vacancy
   Concentrations** — 2022, ACS Applied Nano Materials
3. **Accelerated synthesis of atomically thin 2D quantum materials by a novel
   laser-assisted synthesis technique** — 2019, 2D Materials
4. **Photoexcitation Dynamics and Long-lived Excitons in Strain-engineered Transition
   Metal Dichalcogenides** — 2022, Advanced Materials
5. **2D-Material Based Field-Effect Transistor Biosensor for Detecting COVID-19 Virus
   (SARS-CoV-2)** — 2021, ACS Nano

Leave every other publication's `featured` at its default (false).

If any of the five titles cannot be found in `src/content/publications/`, **stop and
report which are missing** — do not create new files or approximate a match.

---

## Edit 6 — Cleanup

- Grep the repo for any remaining references to `data/publications.json`. If
  `src/pages/index.astro` was the only consumer, delete `src/data/publications.json`.
- If `src/pages/publications/index.astro` (or anything else) still imports it, do
  **not** delete the file — report that back instead.

---

## Verify — do NOT commit or push

```bash
npm run build      # must pass — typed schemas fail loudly on bad content
npm run preview    # optional: eyeball the homepage at http://localhost:4321
```

After the build passes, **show the full diff of every changed file and stop.**
Do not run `git add`, `git commit`, or `git push`. The owner will review the diffs
and deploy manually when satisfied.

## Expected result
- **Selected publications:** the five featured papers, each title linking to its
  `url` (or DOI as fallback), no placeholder note.
- **Recent talks:** the two 2026 SPIE invited talks, then the 2025 NACMBE NiTe2 talk.
