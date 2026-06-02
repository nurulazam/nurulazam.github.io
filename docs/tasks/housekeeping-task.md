# Documentation housekeeping — task brief for Claude Code

## Goal
Bring the project's documentation in line with the current state of the site after the
publications/conferences migration and the homepage rework. Update the maintenance manual,
the master data files, `CLAUDE.md`, and `BUILD_PLAN.md` so each reflects reality.

## Ground rule
If the repo doesn't match what this brief assumes, **stop and report**. Do not guess and do
not invent content. Where a doc and the code disagree, the **code is the source of truth** —
report the discrepancy and update the doc to match the code, never the reverse.

## How to run this — two phases
- **Phase 1 — read-only audit. Do this first and STOP for the owner's review.** Make no edits.
- **Phase 2 — apply updates. Only after the owner approves the Phase 1 report.**

Do **not** run `git add` / `commit` / `push` at any point. The owner reviews the diffs and
deploys manually.

## What changed since the docs were written (the checklist)
1. Publications migrated from `src/data/publications.json` (now **deleted**) to the
   `publications` content collection (`src/content/publications/*.md`); the abstract is the
   Markdown body.
2. Theses live in the `theses` collection (`src/content/theses/*.md`).
3. Conferences added: the `conferences` collection (`src/content/conferences/*.md`,
   28 entries) and the page `src/pages/conferences/index.astro`.
4. Nav now includes Conferences — added to `NAV` in `src/config/site.ts`, after Publications.
5. Homepage (`src/pages/index.astro`):
   - "Selected publications" now reads from the `publications` collection and shows papers
     flagged `featured: true` (5 currently), titles linked (`url` → DOI fallback),
     "Nurul Azam" bolded.
   - New "Recent talks" section reads from `conferences`: presented-only, newest-first,
     ranked invited > talk > poster, top 3.
6. `src/data/publications.json` deleted — no remaining consumers.

---

## Phase 1 — audit & report (read-only)
Locate and read the real files, then report findings for each. **Make no edits.**

**A. Maintenance manual.** Find it (likely under `docs/`, possibly the repo root; may be
named `MAINTENANCE.md` and/or `Site_Maintenance_Manual.md`). Report:
- Whether more than one copy exists and whether they are identical.
- Which sections are now stale against the checklist above — expect: the file-structure
  section, the "files you edit most" table, the publications section, the nav example, and
  the content-schemas reference; plus the absence of any Conferences section and any
  documentation of the homepage `featured` / Recent-talks behaviour.
- Whether `publications-manual-section.md` and `conferences-manual-section.md` exist as
  separate files intended to be merged into the manual.

**B. Master files** (`docs/publications-master.md`, `docs/conferences-master.md`):
- publications-master: list the open/decision notes still marked unresolved (e.g. the
  Pub 4 / Conf 10 placement, the Pub 13 author confirmation, the Pub 18 title) and whether
  each is now settled in the content files. Report the citation count it states.
- conferences-master: report its "Build steps" list and which are now done (collection
  added, files generated, page built, nav link added, manual section written).

**C. `CLAUDE.md`:** read it and report any statement that no longer matches the architecture
(e.g. anything implying publications live in JSON, or that there is no conferences collection).

**D. `BUILD_PLAN.md`:** read it and report which tasks are now complete.

**E. Leftover:** note `homepage-update-task.md` in the repo root — is it tracked by git?
Flag whether it should move to `docs/` or be removed (owner decides).

**STOP here. Present the report and wait for approval before Phase 2.**

---

## Phase 2 — apply updates (only after approval)
Update each doc to match the current code.

**1. Maintenance manual** (make it the single source of truth):
- Replace the old publications section with the content-collection method — merge in
  `publications-manual-section.md` if it exists; otherwise write it from the `publications`
  schema in `src/content.config.ts`.
- Add a Conferences section — merge in `conferences-manual-section.md` if it exists.
- Fix the file-structure section and the "files you edit most" table: remove
  `src/data/publications.json`; add `src/content/publications/`, `src/content/conferences/`,
  and `src/content/theses/`.
- Update the content-schemas reference to the current publications / conferences / theses
  collection schemas.
- Update the nav example to include Conferences.
- Add a short note documenting the homepage: Selected publications driven by `featured: true`;
  Recent talks driven by the conferences collection (presented-only, top 3, invited first).
- Bump "Last updated" to the current month.
- If a duplicate manual copy exists, consolidate to the one the owner chose in Phase 1 and
  remove or redirect the other.
- Once merged, the standalone `publications-manual-section.md` / `conferences-manual-section.md`
  can be deleted or marked "superseded — merged into the manual". Flag for the owner; don't
  delete without sign-off.

**2. `publications-master.md`:** annotate the now-resolved decision notes as resolved (keep
the record — don't erase it). Optionally note which five papers are `featured` on the
homepage. Change the citation count only if the owner supplies a new number.

**3. `conferences-master.md`:** mark the completed build steps as done.

**4. `CLAUDE.md`:** correct any architecture statements per the Phase 1 findings.

**5. `BUILD_PLAN.md`:** mark completed tasks done; leave Phase 2 / future items intact.

Then **show the diff of every changed file and STOP.** Do not commit or push.

---

## Scope
- **Documentation only.** Do NOT change any code, content-collection files, schema, or the
  site's behaviour. The only exception is moving/deleting doc files as noted above, with the
  owner's sign-off.
- Don't invent facts. If a number or detail can't be verified from the repo, leave a clear
  `TODO (owner):` note rather than guessing.
