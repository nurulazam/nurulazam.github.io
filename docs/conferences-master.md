# Conferences — Master Data (source of truth)

**Repo:** `nurulazam.github.io` · **Collection target:** `src/content/conferences/*.md`
**Status:** All venues collected ✅ — SPIE (10) · APS (8) · MRS (2) · NACMBE (2) · ICALEO (1) · ECS (1) · Texas STEM (2) · CNMS (1) · Showcase (1) = **28 entries**
**Last updated:** this session

This file is the single source of truth for the Conferences tab, mirroring how
`publications-master.md` works. Each entry below is written as the target content-file
frontmatter so a small generator can emit `src/content/conferences/<slug>.md` directly.
Append new venues as they are verified.

---

## Conventions

- **Author strings are plain text.** The site auto-bolds "Nurul Azam" (same as Publications). Do not bold in source.
- **One canonical spelling per person.** e.g. always `Syed Mohammad Shahed` (not "Syed M. Shahed" / "Syed Mohammad Fakruddin Shahed").
- **`presenter`** = did *Nurul Azam* present this? (boolean). **`presenterName`** = who actually presented (shown in brackets on the card).
- **Sort:** newest-first globally (same as Publications).
- **Filter chips** (Publications-style): `Invited` + **Presenter / Co-author** (driven by the `presenter` boolean) + venue (`SPIE`, `APS`, `MRS`, `NACMBE`, `ICALEO`, `ECS`, …). Material/technique live under "+ More filters".
- **SPIE** uses `doi`; **APS** abstracts have no DOI — use `url` (the `meetings.aps.org/link/...` citation link).
- **Posters:** scanned hard-copy posters go in `public/posters/<slug>.pdf` (or `.jpg`). Set the entry's `poster` field to that path; the card shows a "View poster" button when present and nothing when empty. Owner has hard copies of the posters he personally presented to scan and drop in.
- Filenames: lowercase, hyphenated, end with `-<venue>-<year>`.

---

## Proposed schema (add to `content.config.ts`)

Extends the handoff §1.3 draft with `venue`, `presenterName`, `doi`, and `poster`.

```ts
const conferences = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/conferences' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),                  // full list; site auto-bolds "Nurul Azam"
    year: z.number(),
    venue: z.string(),                    // filter group: 'SPIE' | 'APS' | 'MRS' | ...
    event: z.string(),                    // full conference / proceedings name
    location: z.string().optional(),
    type: z.enum(['invited', 'talk', 'poster']),
    presenter: z.boolean().default(true), // did Azam present?
    presenterName: z.string().optional(), // who presented (bracket text)
    doi: z.string().optional(),           // SPIE identifier only, e.g. 10.1117/12.xxxxxxx
    url: z.string().url().optional(),     // abstract / slides / recording / event page
    poster: z.string().optional(),        // /posters/<slug>.pdf|.jpg — scanned hard copy
    topics: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    techniques: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});
```

---

## Decisions log (resolved)

1. Old handoff #18 + #19 were the same GaSe paper → **merged** into one entry (SPIE #9).
2. 2021 SPIE meetings were **Virtual** (Photonics West 2021 was Online Only, COVID).
3. Co-author scope: **include all** entries; show the presenter's name in brackets.
4. SPIE #10 = Publication #4 → **kept in both** Publications and Conferences.
5. Old Conf 23 year **confirmed = 2015** (Fall 2015, Waco).
6. SPIE types: **#1 and #3 Invited**; all other SPIE = Talk; no SPIE posters.
7. Page design mirrors **Publications** (newest-first, filter chips, "+ More filters").
8. **Name normalization** to one spelling per person.
9. APS NES-2025 entries (#A7, #A8): citation URL not captured → **`url` left empty** (optional).
10. MRS Fall 2025 "NiTe2 momentum microscopy" **dropped** — Azam did not attend that meeting.
11. Remaining venues have **little/no online material** → recorded from the owner's list as-is; `doi`/`url` left empty. (MRS may be supplemented later if links surface.)
12. Name normalizations applied across all entries: `Imran Mulani` → `Imrankhan Mulani`; `Alberto Torre` → `Alberto de la Torre`; `Syed M. Shahed` / `Syed Mohammad Fakruddin Shahed` → `Syed Mohammad Shahed`; `S. Elafandi` → `Salah Elafandi`; `Z. Ahmadi` → `Zabihollah Ahmadi`; `M. Mahjouri-Samani` → `Masoud Mahjouri-Samani`.
13. **Venue chip strategy (UI, build-time):** primary chips = SPIE, APS, MRS, NACMBE, ICALEO; smaller one-offs (ECS, Texas STEM, CNMS, Showcase) reachable via "All" / "+ More filters" to avoid chip clutter. Confirm at build.
14. **Presenter / Co-author filter:** distinguish talks Azam *presented* (`presenter: true`) from ones he *co-authored* (`presenter: false`). Schema already supports it; surface as a chip pair alongside `Invited`. Current split: **14 presented · 14 co-authored**.

---

# SPIE — 10 entries (locked)

```yaml
# spie-2026-quantum-material-synthesis-growth-control.md
title: "Quantum material synthesis and growth control using advanced techniques"
authors: "Nurul Azam"
year: 2026
venue: "SPIE"
event: "SPIE Photonics West 2026 (Proc. SPIE PC13882, art. PC1388205)"
location: "San Francisco, CA"
type: "invited"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.3078960"
topics: ["Synthesis"]
materials: []
techniques: []
```

```yaml
# spie-2026-laser-assisted-synthesis-wafer-scale.md
title: "Laser-assisted synthesis of 2D materials: from wafer-scale polycrystalline films to single-crystalline monolayer and heterostructures"
authors: "Suman Jaiswal, Nurul Azam, Xinwei Wang, Masoud Mahjouri-Samani"
year: 2026
venue: "SPIE"
event: "SPIE Photonics West 2026 (Proc. SPIE 13882, art. 1388203)"
location: "San Francisco, CA"
type: "talk"
presenter: false
presenterName: "Suman Jaiswal"
doi: "10.1117/12.3082956"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# spie-2026-nite2-optical-electronic-properties.md
title: "Optical and electronic properties of Type-II Dirac Semimetal NiTe2"
authors: "Nurul Azam, Syed Mohammad Shahed, Vineet Kumar Sharma, Susy Sevim, Imran Khan Mulani, Shayan Ahmadi, Alberto de la Torre, Arun Bansil, Sugata Chowdhury, Swastik Kar"
year: 2026
venue: "SPIE"
event: "SPIE Photonics West 2026 (Proc. SPIE PC13898, art. PC138980B)"
location: "San Francisco, CA"
type: "invited"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.3081531"
topics: ["Topology"]
materials: ["NiTe2"]
techniques: ["Band structure / k-space"]
```

```yaml
# spie-2025-application-of-lasers-2d-quantum-materials.md
title: "Application of lasers in synthesis and processing 2D quantum materials"
authors: "Masoud Mahjouri-Samani, Suman Jaiswal, Nurul Azam, Zabihollah Ahmadi, Parvin Fathi-Hafshejani"
year: 2025
venue: "SPIE"
event: "SPIE Photonics West 2025 (Proc. SPIE PC13352, art. PC1335209)"
location: "San Francisco, CA"
type: "talk"
presenter: false
presenterName: "Masoud Mahjouri-Samani"
doi: "10.1117/12.3044600"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# spie-2023-2d-biosensor-covid19.md
title: "2D materials-based biosensor for detecting COVID-19 virus"
authors: "Parvin Fathi-Hafshejani, Nurul Azam, Suman Jaiswal, Lu Wang, Marcelo Kuroda, Michael Hamilton, Sahar Hasim, Masoud Mahjouri-Samani"
year: 2023
venue: "SPIE"
event: "SPIE Photonics West 2023 — Frontiers in Biological Detection: From Nanosensors to Systems XV (Proc. SPIE PC12397, art. PC1239707)"
location: "San Francisco, CA"
type: "talk"
presenter: false
presenterName: "Parvin Fathi-Hafshejani"
doi: "10.1117/12.2650741"
topics: ["Devices & Sensing"]
materials: []
techniques: []
```

```yaml
# spie-2023-photoexcitation-long-lived-excitons.md
title: "Photoexcitation dynamics and long-lived excitons in strain-engineered transition metal dichalcogenides"
authors: "Anton Malko, Navendu Mondal, Nurul Azam, Yuri Gartstein, Masoud Mahjouri-Samani"
year: 2023
venue: "SPIE"
event: "SPIE Photonics West 2023 — Nanoscale and Quantum Materials (Proc. SPIE PC12410, art. PC1241003)"
location: "San Francisco, CA"
type: "talk"
presenter: false
presenterName: "Anton Malko"
doi: "10.1117/12.2647617"
topics: ["Optics & Excitons"]
materials: ["TMDCs"]
techniques: []
```

```yaml
# spie-2022-subsecond-wse2-growth.md
title: "Achieving sub-seconds growth of monolayer WSe2 crystals with time-resolved capturing of growth dynamics"
authors: "Nurul Azam, Masoud Mahjouri-Samani"
year: 2022
venue: "SPIE"
event: "SPIE Photonics West 2022 — Nanoscale and Quantum Materials (Proc. SPIE PC11990, art. PC1199002)"
location: "San Francisco, CA"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.2608028"
topics: ["Synthesis"]
materials: ["WSe2"]
techniques: ["Laser-assisted synthesis"]
```

```yaml
# spie-2022-wse2-fet-biosensor-covid19.md
title: "Monolayer WSe2 field-effect transistor biosensor for detecting COVID-19 virus (SARS-CoV-2)"
authors: "Parvin Fathi-Hafshejani, Nurul Azam, Lu Wang, Marcelo Kuroda, Michael Hamilton, Sahar Hasim, Masoud Mahjouri-Samani"
year: 2022
venue: "SPIE"
event: "SPIE Photonics West 2022 — Nanoscale and Quantum Materials (Proc. SPIE PC11990, art. PC119900L)"
location: "San Francisco, CA"
type: "talk"
presenter: false
presenterName: "Parvin Fathi-Hafshejani"
doi: "10.1117/12.2608310"
topics: ["Devices & Sensing"]
materials: ["WSe2"]
techniques: []
```

```yaml
# spie-2021-gase-quantum-dot-ensembles.md
# NOTE: Azam presented despite being 3rd author (the one SPIE exception).
# Merged from old handoff #18 + #19 (same paper).
title: "Gas-phase formation of 2D GaSe quantum dot ensembles in a nonequilibrium laser ablation process"
authors: "Salah Elafandi, Zabihollah Ahmadi, Nurul Azam, Masoud Mahjouri-Samani"
year: 2021
venue: "SPIE"
event: "SPIE LASE 2021 — Synthesis and Photonics of Nanoscale Materials XVIII (Proc. SPIE 11675, art. 1167507)"
location: "Virtual (Online Only)"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.2578765"
topics: ["Synthesis"]
materials: ["GaSe"]
techniques: ["Laser ablation"]
```

```yaml
# spie-2021-laser-based-synthesis-monolayer-2d.md
# NOTE: Also Publication #4 (laser-based-synthesis-spie.md) — kept in both collections.
title: "Laser-based synthesis of atomically thin monolayer 2D quantum materials"
authors: "Nurul Azam, Zabihollah Ahmadi, Masoud Mahjouri-Samani"
year: 2021
venue: "SPIE"
event: "SPIE LASE 2021 — Synthesis and Photonics of Nanoscale Materials XVIII (Proc. SPIE 11675, art. 116750F)"
location: "Virtual (Online Only)"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
doi: "10.1117/12.2579102"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

---

# APS — 8 entries (locked)

```yaml
# aps-2025-cr2te3-optical-properties.md
title: "Optical Properties of a Chemical Vapor Deposition Grown Single Crystal of Cr2Te3"
authors: "Salihu J. Ahmad, Mangesh Diware, Imrankhan Mulani, Syed Mohammad Shahed, Nurul Azam, Chandra S. Tiwary, Arun Bansil, Swastik Kar"
year: 2025
venue: "APS"
event: "APS New England Section (NES) Annual Meeting 2025, Brown University (abstract C01.00006)"
location: "Providence, RI"
type: "poster"
presenter: false
presenterName: "Salihu J. Ahmad"
url: ""   # citation link not captured
topics: ["Magnetism"]
materials: ["Cr2Te3"]
techniques: ["Optics", "Spectroscopic ellipsometry", "CVD"]
```

```yaml
# aps-2025-mnte-momentum-microscopy.md
title: "Momentum Microscopy Study on Strained Thin Films of Altermagnetic MnTe"
authors: "Lincoln Curtis, Syed Mohammad Shahed, Imrankhan Mulani, Matthew Matzelle, Vineet Kumar Sharma, Sara Bey, Nurul Azam, Alex Poulin, Arun Bansil, Swastik Kar, Badih A. Assaf, Alberto de la Torre Duran"
year: 2025
venue: "APS"
event: "APS New England Section (NES) Annual Meeting 2025, Brown University (abstract C01.00023)"
location: "Providence, RI"
type: "poster"
presenter: false
presenterName: "Lincoln Curtis"
url: ""   # citation link not captured
topics: ["Altermagnetism", "Magnetism"]
materials: ["MnTe"]
techniques: ["Momentum microscopy", "Band structure"]
```

```yaml
# aps-2018-statistically-determining-shape-glowing-object.md
title: "Statistically Determining the Shape of a Glowing Object"
authors: "Zakary Noel, Suzanne Wheeler, Keeley Fairchild, Daniel Dove, Gabrianna Escamilla, Nurul Azam, Cristian Bahrim"
year: 2018
venue: "APS"
event: "APS March Meeting 2018, Los Angeles (abstract G60.00036)"
location: "Los Angeles, CA"
type: "poster"
presenter: false
presenterName: "Zakary Noel"
url: "http://meetings.aps.org/link/BAPS.2018.MAR.G60.36"
topics: ["Optics"]
materials: []
techniques: ["Polarimetry"]
```

```yaml
# aps-2017-locking-probe-laser-dielectric.md
title: "Locking a probe laser beam on a dielectric surface using a stronger coupling laser"
authors: "Cristian Bahrim, Nurul Azam"
year: 2017
venue: "APS"
event: "Joint Fall 2017 Meeting, Texas Section of the APS, UT Dallas (abstract B9.00003)"
location: "Richardson, TX"
type: "talk"
presenter: false
presenterName: "Cristian Bahrim"
url: "http://meetings.aps.org/link/BAPS.2017.TSF.B9.3"
topics: ["Optics"]
materials: []
techniques: ["EIT", "Spectroscopy"]
```

```yaml
# aps-2016-photonic-switching-polarized-light.md
title: "A photonic switching mechanism using polarized light incident on dielectric surfaces"
authors: "Cristian Bahrim, Nurul Azam"
year: 2016
venue: "APS"
event: "Joint Meeting of the Four Corners and Texas Sections of the APS, Las Cruces (abstract B2.00005)"
location: "Las Cruces, NM"
type: "talk"
presenter: false
presenterName: "Cristian Bahrim"
url: "http://meetings.aps.org/link/BAPS.2016.TSF.B2.5"
topics: ["Optics"]
materials: []
techniques: ["Photonic switching"]
```

```yaml
# aps-2016-shape-glowing-objects-polarization.md
title: "Finding the shape of glowing objects from the polarization of light emitted"
authors: "Keeley Townley-Smith, Nurul Azam, Suzanne Wheeler, Cristian Bahrim"
year: 2016
venue: "APS"
event: "Joint Spring 2016 Meeting, Texas Sections of APS/AAPT/Zone 13 SPS, Beaumont (abstract B3.00008)"
location: "Beaumont, TX"
type: "talk"
presenter: false
presenterName: "Keeley Townley-Smith"
url: "http://meetings.aps.org/link/BAPS.2016.TSS.B3.8"
topics: ["Optics"]
materials: []
techniques: ["Polarimetry"]
```

```yaml
# aps-2015-locking-laser-beam-dipole-vibration.md
title: "Locking a laser beam in the vibrational motion of the dipoles on a dielectric surface"
authors: "Cristian Bahrim, Wei-Tai Hsu, Nurul Azam"
year: 2015
venue: "APS"
event: "Fall 2015 Joint Meeting, Texas Section of the APS, Waco (abstract F2.00006)"
location: "Waco, TX"
type: "talk"
presenter: false
presenterName: "Cristian Bahrim"
url: "http://meetings.aps.org/link/BAPS.2015.TSF.F2.6"
topics: ["Optics"]
materials: []
techniques: ["EIT", "Spectroscopy"]
```

```yaml
# aps-2015-atomic-constituents-medicines-spectral.md
title: "Identification of atomic constituents in medicines using spectral analysis"
authors: "John Pickren, Keeley Townley-Smith, Nurul Azam, Cristian Bahrim"
year: 2015
venue: "APS"
event: "Fall 2015 Joint Meeting, Texas Section of the APS, Waco (abstract H1.00006)"
location: "Waco, TX"
type: "poster"
presenter: false
presenterName: "John Pickren"
url: "http://meetings.aps.org/link/BAPS.2015.TSF.H1.6"
topics: ["Spectroscopy"]
materials: []
techniques: ["Optics"]
```

---

# MRS — 2 entries (locked)

> MRS Fall 2025 "NiTe2 momentum microscopy" was dropped (not attended). MRS Fall venue = Boston, MA
> (2020 was held Virtual due to COVID).

```yaml
# mrs-2024-fe-infused-mos2-optical-magnetic.md
title: "Optical and Magnetic Properties of Fe-infused 2D-MoS2"
authors: "Yujia Wang, Nurul Azam, Jeff Rable, Syed Mohammad Shahed, Z. B. Hennighausen, Jing Kong, J. P. Ferrier, Matthew Matzelle, Bernardo Barbiellini, Barun Ghosh, Arun Bansil, Swastik Kar"
year: 2024
venue: "MRS"
event: "MRS Fall Meeting 2024 — 2D Materials: Nanofabrication and Applications"
location: "Boston, MA"
type: "talk"
presenter: false
presenterName: "Yujia Wang"
topics: ["Optics & Excitons", "Magnetism"]
materials: ["MoS2"]
techniques: []
```

```yaml
# mrs-2020-laser-assisted-accelerated-synthesis.md
title: "Laser-Assisted Accelerated Synthesis of 2D Quantum Materials"
authors: "Nurul Azam, Zabihollah Ahmadi, Mengkun Tian, Abdelaziz Boulesbaa, Masoud Mahjouri-Samani"
year: 2020
venue: "MRS"
event: "MRS Fall Meeting 2020 (NM09.10.02)"
location: "Virtual (Online Only)"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

---

# NACMBE — 2 entries (locked)

```yaml
# nacmbe-2025-mnsb-nv-magnetometry.md
title: "Synthesis and Nitrogen-Vacancy Magnetometry of ferromagnetic MnSb"
authors: "Nurul Azam, Jeff Rable, Syed Mohammad Shahed, Sugata Chowdhury, Alberto de la Torre, Swastik Kar"
year: 2025
venue: "NACMBE"
event: "North American Conference on Molecular Beam Epitaxy (NACMBE) 2025"
location: "New Mexico"
type: "poster"
presenter: true
presenterName: "Nurul Azam"
poster: ""   # placeholder — upload scan to /public/posters/nacmbe-2025-mnsb-nv-magnetometry.pdf
topics: ["Magnetism"]
materials: ["MnSb"]
techniques: ["MBE growth", "NV magnetometry"]
```

```yaml
# nacmbe-2025-nite2-temperature-dependent-momentum-microscopy.md
title: "Synthesis and Temperature-Dependent Momentum Microscopy of Type-II Dirac Semimetal NiTe2"
authors: "Nurul Azam, Syed Mohammad Shahed, Imrankhan Mulani, Sugata Chowdhury, Alberto de la Torre, Arun Bansil, Swastik Kar"
year: 2025
venue: "NACMBE"
event: "North American Conference on Molecular Beam Epitaxy (NACMBE) 2025"
location: "New Mexico"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
topics: ["Topology"]
materials: ["NiTe2"]
techniques: ["MBE growth", "Momentum microscopy"]
```

---

# Other venues — 6 entries (locked)

```yaml
# cnms-2022-laser-bottom-up-synthesis-tunable-vacancies.md
title: "Laser-based Bottom-Up Synthesis of Monolayer 2D Crystals with Tunable Vacancy Concentrations"
authors: "Nurul Azam, Matthew G. Boebinger, Suman Jaiswal, Raymond R. Unocic, Parvin Fathi-Hafshejani, Masoud Mahjouri-Samani"
year: 2022
venue: "CNMS"
event: "Center for Nanophase Materials Sciences (CNMS), Oak Ridge National Laboratory (ORNL)"
location: "Oak Ridge, TN"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis", "Vacancy engineering"]
```

```yaml
# showcase-2022-synthesis-atomically-thin-2d-last.md
title: "Synthesis of Atomically Thin 2D Quantum Materials Using a Novel Laser-Assisted Technique"
authors: "Nurul Azam, Masoud Mahjouri-Samani"
year: 2022
venue: "Showcase"
event: "Graduate Engineering Research Showcase, U.S. Space and Rocket Center"
location: "Huntsville, AL"
type: "poster"
presenter: true
presenterName: "Nurul Azam"
poster: ""   # placeholder — upload scan to /public/posters/showcase-2022-synthesis-atomically-thin-2d-last.pdf
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# texas-stem-2021-laser-assisted-accelerated-synthesis-9th.md
title: "Laser-Assisted Accelerated Synthesis of 2D Quantum Materials"
authors: "Nurul Azam"
year: 2021
venue: "Texas STEM"
event: "9th Annual Texas STEM Conference, Lamar University"
location: "Beaumont, TX"
type: "invited"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# texas-stem-2020-laser-assisted-accelerated-synthesis-8th.md
title: "Laser-Assisted Accelerated Synthesis of 2D Quantum Materials"
authors: "Nurul Azam, Masoud Mahjouri-Samani"
year: 2020
venue: "Texas STEM"
event: "8th Annual Texas STEM Conference"
location: "Beaumont, TX"
type: "invited"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# ecs-2019-accelerated-synthesis-last.md
title: "Accelerated synthesis of atomically thin 2D quantum materials by a novel Laser-Assisted Synthesis Technique"
authors: "Nurul Azam"
year: 2019
venue: "ECS"
event: "Electrochemical Society (ECS) Fall Meeting, Auburn University (guest speaker)"
location: "Auburn, AL"
type: "invited"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

```yaml
# icaleo-2018-laser-assisted-synthesis-monolayer-2d.md
title: "Laser-Assisted Synthesis of Monolayer 2D Quantum Materials"
authors: "Nurul Azam, Salah Elafandi, Zabihollah Ahmadi, Parvin Fathi-Hafshejani, Masoud Mahjouri-Samani"
year: 2018
venue: "ICALEO"
event: "International Congress on Applications of Lasers & Electro-Optics (ICALEO)"
location: "Orlando, FL"
type: "talk"
presenter: true
presenterName: "Nurul Azam"
topics: ["Synthesis"]
materials: []
techniques: ["Laser-assisted synthesis"]
```

---

## All venues collected

Nothing left to gather. Counts by venue: SPIE 10 · APS 8 · MRS 2 · NACMBE 2 · ICALEO 1 · ECS 1 · Texas STEM 2 · CNMS 1 · Showcase 1.

Open editorial items (non-blocking, UI choices to confirm at build): venue-chip strategy (decision #13) and the presenter/co-author filter (decision #14).

## Build steps (after all venues are in)

**All steps complete (June 2026).**

1. ✅ Add the `conferences` collection to `content.config.ts` (schema above).
2. ✅ Generate `src/content/conferences/*.md` from the YAML blocks here (28 files).
3. ✅ Build `src/pages/conferences/index.astro` mirroring Publications (newest-first; chips = Invited + venue; "+ More filters" for material/technique; type badges; presenter shown in brackets; DOI/abstract link).
4. ✅ Add the Conference journal section querying Writing `Field Notes`.
5. ✅ Update `MAINTENANCE.md` with a Conferences section (now §9).

Also done: ✅ **Conferences nav link** added to `NAV` in `src/config/site.ts` (after Publications),
and ✅ a homepage **Recent talks** section (presented-only, newest first, invited → talk → poster,
top 3) reads from this collection.
