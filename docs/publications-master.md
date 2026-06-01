# Publications — Master List (source of truth)

**Dr. Nurul Azam · 18 publications + 2 theses · 662 citations (Google Scholar)**

This is the human-readable **source of truth** for the Publications page. It holds every paper's full record — title, authors, year, venue, status, DOI, page link, image, tags, and the verbatim abstract — in one place, so the list never has to be rebuilt from scratch.

**This file does not power the site directly.** The live page builds from the per-paper Markdown files in `src/content/publications/` (and `src/content/theses/`). Treat this document as the master record: when you add or edit a paper, update it here *and* in the matching content file so the two stay in sync.

> ⚠️ **Keep this file outside `src/content/`.** It lives in `docs/` (or the repo root). If placed inside a content-collection folder it fails the build, because it doesn't match the publication schema.

**Status legend:** `Published` · `Under review` · `In preparation`
**Tag separators** use `·` here for readability; in the content files they become arrays (`topics`, `materials`, `techniques`).

---

## Durable notes

- **Citation count** is shown on the page and updated by hand — currently 662 (Google Scholar). The live value is `const CITATIONS` in `src/pages/publications/index.astro`.
- **Pub 13** (gamma irradiation, *Applied Physics Letters*) uses DOI `10.1063/5.0006919` — don't confuse it with Pub 7's ACS DOI.
- **Image filenames are case-sensitive** (GitHub Pages). The five `.gif` TOC graphics are static images, not animations.
- **One spelling per tag** — e.g. use `PLD`, never also `Pulsed Laser Deposition`, or the filter chips fragment.

---

## Tag taxonomy (canonical — three axes)

Tags are split into three groups. On the page, the **Topic** row is always visible as the primary filter; **Material** and **Technique** sit behind a "More filters" toggle so the default view stays clean. All three are free-text arrays — typing a new value (e.g. `LASER CVD`) makes a new chip appear automatically, so future expansion needs no code change.

**Topic** (primary filter, pick 1+):
Synthesis · Optics & Excitons · Devices & Sensing · Thermal Transport · Magnetism · Topology · Radiation / Space

**Material** (the specific compound studied):
MoS2 · MoSe2 · WS2 · WSe2 · GaSe · NiTe2 · MnSb · TMDCs *(umbrella — use only on general/review papers where no single material dominates)*

**Technique** (method or probe):
Laser-assisted synthesis (LAST) · Laser ablation · PLD *(pulsed laser deposition)* · MBE · CVD *(future)* · LASER CVD *(future)* · Momentum microscopy · Raman spectroscopy · NV magnetometry · Vacancy engineering

> Note: "PLD" and "Pulsed Laser Deposition" were duplicated on Pub 9 — consolidated to the single tag `PLD`. Keep one canonical spelling per concept so chips don't fragment.

---

## 1 · Time-Resolved Growth of 2D WSe₂ Monolayer Crystals
`2023 · ACS Nano · Published`

**Authors** — Nurul Azam, Masoud Mahjouri-Samani
**DOI** — [10.1021/acsnano.3c02280](https://doi.org/10.1021/acsnano.3c02280)
**Page** — https://pubs.acs.org/doi/abs/10.1021/acsnano.3c02280
**Image** — `/images/pubs/TIme_resolved_WSe2.webp`
**Tags** — Synthesis · WSe2 · Laser-assisted synthesis
**Keywords** — 2D materials, TMDC monolayer crystals, time-resolved growth, ultrafast crystal growth

**Abstract**
Understanding and controlling the growth evolution of atomically thin monolayer two-dimensional (2D) materials such as transition metal dichalcogenides (TMDCs) are vital for next-generation 2D electronics and optoelectronic devices. However, their growth kinetics are not fully observed or well understood due to the bottlenecks associated with the existing synthesis methods. This study demonstrates the time-resolved and ultrafast growth of 2D materials by a laser-based synthesis approach that enables the rapid initiation and termination of the vaporization process during crystal growth. The use of stoichiometric powder (e.g., WSe2) minimizes the complex chemistry during the vaporization and growth process, allowing rapid initiation/termination control over the generated flux. An extensive set of experiments is performed to understand the growth evolution, achieving subsecond growth as low as 10 ms along with a 100 μm/s growth rate on a noncatalytic substrate such as Si/SiO2. Overall, this study allows us to observe and understand the 2D crystal evolution and growth kinetics with time-resolved and subsecond time scales.

---

## 2 · Laser-Assisted Synthesis of Monolayer 2D MoSe₂ Crystals with Tunable Vacancy Concentrations: Implications for Gas and Biosensing
`2022 · ACS Applied Nano Materials · Published`

**Authors** — Nurul Azam, Matthew G. Boebinger, Suman Jaiswal, Raymond R. Unocic, Parvin Hafshejani, Masoud Mahjouri-Samani
**DOI** — [10.1021/acsanm.2c01458](https://doi.org/10.1021/acsanm.2c01458)
**Page** — https://pubs.acs.org/doi/abs/10.1021/acsanm.2c01458
**Image** — `/images/pubs/Defect_engineering_MoSe2.gif`
**Tags** — Synthesis · Devices & Sensing · MoSe2 · Laser-assisted synthesis · Vacancy engineering
**Keywords** — laser-assisted synthesis, 2D materials, TMDCs, defect engineering, vacancy tuning

**Abstract**
Tuning the structural and electronic properties of atomically thin two-dimensional (2D) materials via defect and vacancy engineering is the key to enabling their potential use in various applications, including electronics, energy, and sensing devices. Vacancies are, for instance, becoming highly promising for the enhanced interaction of gases and biomolecules with 2D materials in energy and sensing applications. However, the deterministic generation of desirable vacancies with tunable concentrations remains a challenge in 2D materials due to the limitations in the current growth methods, such as the complex reaction chemistries and gas flow dynamics. Therefore, engineering defects and vacancies in 2D materials have been mainly limited to destructive top-down processes such as heating, ion bombardments, and laser postprocessing. Here, we introduce a single-step bottom-up synthesis approach for the growth of monolayer MoSe2 crystals with tunable vacancy concentrations. This method utilizes the spatiotemporal properties and adjustable power densities of the lasers to control the vaporization dynamics of the stoichiometric MoSe2 powders. Such a mechanism in the vaporization allows us to grow tunable stoichiometry monolayer MoSe2–x crystals on the substrates. The localized and time-controlled (250 ms to 2 s) vaporization of the MoSe2 powder by a CO2 laser enables the formation of monolayer crystals with controlled vacancy concentrations ranging from ∼1 to 20%. The effects of laser power, laser irradiation time, and background pressure on the tuning range and subsequent properties of the crystals are investigated and quantified using Raman and photoluminescence spectroscopy, scanning transmission electron microscopy (STEM), and time-correlated single-photon counting (TCSPC). This bottom-up synthesis is a promising approach that allows the deterministic vacancy tuning for future electronics and, in particular, gas and biosensing applications without the need for further postprocessing and potential structural disruption of the crystals.

---

## 3 · Accelerated synthesis of atomically thin 2D quantum materials by a novel laser-assisted synthesis technique
`2019 · 2D Materials (IOP) · Published`

**Authors** — Nurul Azam, Z. Ahmadi, B. Yakupoglu, S. Elafandi, M. Tian, A. Boulesbaa, Masoud Mahjouri-Samani
**DOI** — [10.1088/2053-1583/ab53f7](https://doi.org/10.1088/2053-1583/ab53f7)
**Page** — https://iopscience.iop.org/article/10.1088/2053-1583/ab53f7/meta
**Image** — `/images/pubs/LAST1.png`
**Tags** — Synthesis · Laser-assisted synthesis · MoS2 · MoSe2 · WS2 · WSe2 · TMDCs

**Abstract**
Two-dimensional (2D) layered materials including transition metal dichalcogenides (TMDCs) have recently been at the heart of the quantum materials and information sciences research due to unusual properties associated with their firmly defined dimensionalities. Many efforts have focused on developing new methods for the accelerated growth and discovery of 2D materials, including physical and chemical vapor deposition techniques. However, the synthesis of these multi-component crystals in the gas phase has been extremely challenging due to complex and uncontrolled gas-phase reactions and flow dynamics. Here, we demonstrate a novel laser-assisted synthesis technique (LAST), which significantly reduces the existing growth complexities and notably accelerates the growth of 2D materials. This approach facilitates the growth of various 2D materials directly from stoichiometric powders by laser vaporization process. We show that directed laser heating allows pressure-independent decoupling of the growth and evaporation kinetics enabling the use of stoichiometric powder as precursors for the growth of high-quality 2D materials including MoS2, MoSe2, WSe2, and WS2. A comprehensive experimental study was conducted to identify the system behavior, including the evaporation and growth parameters as well as the process-property relationships. This method presents a general yet simple approach for accelerating the discovery of emerging quantum materials.

---

## 4 · Laser-based synthesis of atomically thin monolayer 2D quantum materials
`2021 · SPIE (proceedings) · Published`

> ⚠️ Also appears as Conference #10. Pending your decision: list as Publication, Conference, or both.

**Authors** — Nurul Azam, Z. Ahmadi, M. Mahjouri-Samani
**DOI** — [10.1117/12.2579102](https://doi.org/10.1117/12.2579102)
**Page** — https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11675/116750F/Laser-based-synthesis-of-atomically-thin-monolayer-2D-quantum-materials/10.1117/12.2579102.short
**Image** — `/images/pubs/LAST2.png`
**Tags** — Synthesis · Laser-assisted synthesis

**Abstract**
The vapor or gas-phase synthesis methods (e.g., CVD) are widely adopted to grow mono and few-layer two-dimensional (2D) materials. However, uncontrolled gas-phase reactions, complex flow dynamics, and limited reproducibility have made the gas phase growth of monolayer TMDCs crystals extremely challenging. Here we introduce a novel laser-assisted synthesis method for the rapid growth of various 2D materials. To produce the atomically-thin crystals, instead of using conventional multi-component precursors, this synthesis method utilizes stoichiometric powders as precursors that are laser vaporized to create the right vapor flux for the controlled growth of mono and few-layer crystals. We demonstrate a successful synthesis of four semiconducting TMDC monolayers such as MoS2, MoSe2, WSe2, and WS2 crystals. This laser vaporization process promises an efficient general synthesis solution for the accelerated growth of a variety of high-quality 2D quantum materials.

---

## 5 · Photoexcitation Dynamics and Long-lived Excitons in Strain-engineered Transition Metal Dichalcogenides
`2022 · Advanced Materials · Published`

**Authors** — Navendu Mondal, Nurul Azam, Yuri N. Gartstein, Masoud Mahjouri-Samani, Anton V. Malko
**DOI** — [10.1002/adma.202110568](https://doi.org/10.1002/adma.202110568)
**Page** — https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202110568
**Image** — `/images/pubs/Extended_lifetime.png`
**Tags** — Optics & Excitons · TMDCs

**Abstract**
Strain-engineering in 2D transition metal dichalcogenide (TMD) semiconductors has garnered intense research interest in tailoring the optical properties via strain-induced modifications of the electronic bands in TMDs, while its impact on the exciton dynamics remains less understood. To address this, an extensive study of transient optical absorption (TA) of both W- and Mo-based single-crystalline monolayer TMDs grown by a recently developed laser-assisted evaporation method is performed. All spectral features of the monolayers as grown on fused silica substrates exhibit appreciable redshifts relating to the existence of strain due to growth conditions. Moreover, these systems exhibit a dramatic slowing down of exciton dynamics (100s of picoseconds to few nanoseconds) with an increase in carrier densities, which strongly contrasts with the monolayers in their freestanding form as well as in comparison with more traditionally grown TMDs. The observations are related to the modifications of the electronic bands as expected from the strain and associated population of the intervalley dark excitons that can now interplay with intravalley excitations. These findings are consistent across both the Mo- and W-based TMD families, providing key information about the influence of the growth conditions on the nature of optical excitations and fostering emerging optoelectronic applications of monolayer TMDs.

---

## 6 · Interface Thermal Resistance between Monolayer WSe₂ and SiO₂: Raman Probing with Consideration of Optical–Acoustic Phonon Nonequilibrium
`2022 · Advanced Materials Interfaces · Published`

**Authors** — N. Hunter, Nurul Azam (co-first author), H. Zobeiri, N. Van Velson, M. Mahjouri-Samani, X. Wang
**DOI** — [10.1002/admi.202102059](https://doi.org/10.1002/admi.202102059)
**Page** — https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admi.202102059
**Image** — `/images/pubs/Interface_Thermal_Resistance.jpg`
**Tags** — Thermal Transport · WSe2 · Raman spectroscopy

**Abstract**
This work explores the 2D interfacial energy transport between monolayer WSe2 and SiO2 while considering the thermal nonequilibrium between optical and acoustic phonons caused by photoexcitation. Recent modeling and experimental work have shown substantial temperature differences between optical and acoustic phonons (ΔTOA) in various nanostructures upon laser irradiation. Generally, characterizations of interfacial thermal resistance (R′′tc) at the nanoscale are difficult and depend on Raman-probed temperature measurements, which only reveal optical phonon temperature information. Here it is shown that ΔTOA for supported monolayer WSe2 can be as high as 48% of the total temperature rise revealed by optothermal Raman methods—a significant proportion that can introduce sizeable error to R′′tc measurements if not properly considered. A frequency energy transport state-resolved Raman technique (FET-Raman) along with a 3D finite volume modeling of 2D material laser heating is used to extract the true interfacial thermal resistance R′′tc (determined by acoustic phonon transport). Additionally, a novel ET-Raman technique is developed to determine the energy coupling factor G between optical and acoustic phonons (on the order of 1015 W m−3 K−1). This work demonstrates the need for special consideration of thermal nonequilibriums during laser–matter interactions at the nanoscale.

---

## 7 · Interfacial Thermal Conductance between Monolayer WSe₂ and SiO₂ under Consideration of Radiative Electron–Hole Recombination
`2020 · ACS Applied Materials & Interfaces · Published`

**Authors** — N. Hunter, Nurul Azam (co-first author), H. Zobeiri, R. Wang, M. Mahjouri-Samani, X. Wang
**DOI** — [10.1021/acsami.0c14990](https://doi.org/10.1021/acsami.0c14990)
**Page** — https://pubs.acs.org/doi/abs/10.1021/acsami.0c14990
**Image** — `/images/pubs/interfacial_thermal_conductance.gif`
**Tags** — Thermal Transport · WSe2
**Keywords** — interfacial thermal conductance, radiative recombination efficiency, monolayer WSe2, Raman spectroscopy, 2D materials

**Abstract**
This work reports the interfacial thermal conductance (G) and radiative recombination efficiency (β), also known as photoluminescence quantum yield (PL QY), of monolayer WSe2 flakes supported by fused silica substrates via energy-transport state-resolved Raman (ET-Raman). This is the first known work to consider the effect of radiative electron–hole recombination on the thermal transport characteristics of single-layer transition-metal dichalcogenides (TMDs). ET-Raman uses a continuous-wave laser for steady-state heating as well as nanosecond and picosecond lasers for transient energy transport to simultaneously heat the monolayer flakes and extract the Raman signal. The three lasers induce distinct heating phenomena that distinguish the interfacial thermal conductance and radiative recombination efficiency, which can then be determined in tandem with three-dimensional (3D) numerical modeling of the temperature rise from respective laser irradiation. For the five samples measured, G is found to range from 2.10 ± 0.14 to 15.9 ± 5.0 MW m–2 K–1 and β ranges from 36 ± 6 to 65 ± 7%. These values support the claim that interfacial phenomena such as surface roughness and two-dimensional (2D) material–substrate bonding strength play critical roles in interfacial thermal transport and electron–hole recombination mechanisms in TMD monolayers. It is also determined that low-level defect density enhances the radiative recombination efficiency of single-layer WSe2.

---

## 8 · 2D-Material Based Field-Effect Transistor Biosensor for Detecting COVID-19 Virus (SARS-CoV-2)
`2021 · ACS Nano · Published`

**Authors** — Parvin Hafshejani, Nurul Azam, L. Wang, M. A. Kuroda, Michael C. Hamilton, S. Hasim, Masoud Mahjouri-Samani
**DOI** — [10.1021/acsnano.1c01188](https://doi.org/10.1021/acsnano.1c01188)
**Page** — https://pubs.acs.org/doi/abs/10.1021/acsnano.1c01188
**Image** — `/images/pubs/Covid_sensors.gif`
**Tags** — Devices & Sensing
**Keywords** — SARS-CoV-2 spike protein, COVID-19, field-effect transistors, biosensors, 2D materials

**Abstract**
The emergence of rapidly expanding infectious diseases such as coronavirus (COVID-19) demands effective biosensors that can promptly detect and recognize the pathogens. Field-effect transistors based on semiconducting two-dimensional (2D) materials (2D-FETs) have been identified as potential candidates for rapid and label-free sensing applications. This is because any perturbation of such atomically thin 2D channels can significantly impact their electronic transport properties. Here, we report the use of FET based on semiconducting transition metal dichalcogenide (TMDC) WSe2 as a promising biosensor for the rapid and sensitive detection of SARS-CoV-2 in vitro. The sensor is created by functionalizing the WSe2 monolayers with a monoclonal antibody against the SARS-CoV-2 spike protein and exhibits a detection limit of down to 25 fg/μL in 0.01X phosphate-buffered saline (PBS). Comprehensive theoretical and experimental studies, including density functional theory, atomic force microscopy, Raman and photoluminescence spectroscopies, and electronic transport properties, were performed to characterize and explain the device performance. The results demonstrate that TMDC-based 2D-FETs can potentially serve as sensitive and selective biosensors for the rapid detection of infectious diseases.

---

## 9 · Wafer-Scale Synthesis of 2D materials by Amorphous-Phase-Mediated Crystallization Approach
`2023 · ACS Applied Materials & Interfaces · Published`

**Authors** — Suman Jaiswal, Parvin Fathi-Hafshejani, Matthew G. Boebinger, Nurul Azam, Raymond R. Unocic, Masoud Mahjouri-Samani
**DOI** — [10.1021/acsami.3c06009](https://doi.org/10.1021/acsami.3c06009)
**Page** — https://pubs.acs.org/doi/abs/10.1021/acsami.3c06009
**Image** — `/images/pubs/wafer_scale_2D.gif`
**Tags** — Synthesis · PLD · Thin films · MoS2 · WSe2
**Keywords** — 2D materials, TMDCs, wafer scale, condensed-phase synthesis, 2D electronics

**Abstract**
The interest in the wafer-scale growth of two-dimensional (2D) materials, including transition metal dichalcogenides (TMDCs), has been rising for transitioning from lab-scale devices to commercial-scale systems. Among various synthesis techniques, physical vapor deposition, such as pulsed laser deposition (PLD), has shown promise for the wafer-scale growth of 2D materials. However, due to the high volatility of chalcogen atoms (e.g., S and Se), films deposited by PLD usually suffer from a lack of stoichiometry and chalcogen deficiency. To mitigate this issue, excess chalcogen is necessary during the deposition, which results in problems like uniformity or not being repeatable. This study demonstrates a condensed-phase or amorphous phase-mediated crystallization (APMC) approach for the wafer-scale synthesis of 2D materials. This method uses a room-temperature PLD process for the deposition and formation of amorphous precursors with controlled thicknesses, followed by a post-deposition crystallization process to convert the amorphous materials to crystalline structures. This approach maintains the stoichiometry of the deposited materials throughout the deposition and crystallization process and enables the large-scale synthesis of crystalline 2D materials (e.g., MoS2 and WSe2) on Si/SiO2 substrates, which is critical for future wafer-scale electronics. We show that the thickness of the layers can be digitally controlled by the number of laser pulses during the PLD phase. Optical spectroscopy is used to monitor the crystallization dynamics of amorphous layers as a function of annealing temperature. The crystalline quality, domain sizes, and the number of layers were explored using nanoscale and atomistic characterization (e.g., AFM, STEM, and EDS) along with electrical characterization to explore process–structure–performance relationships. This growth technique is a promising method that could potentially be adopted in conventional semiconductor industries for wafer-scale manufacturing of next-generation electronic and optoelectronic devices.

---

## 10 · Filling Exciton Trap-States in Two-Dimensional Tungsten Disulfide (WS₂) and Di-selenide (WSe₂) Monolayers
`2021 · Nanomaterials · Published`

**Authors** — Z. Ezgi Eroglu, D. Contreras, P. Bahrami, Nurul Azam, M. Mahjouri-Samani
**DOI** — [10.3390/nano11030770](https://doi.org/10.3390/nano11030770)
**Page** — https://www.mdpi.com/2079-4991/11/3/770
**Image** — `/images/pubs/filling_trapstate.jpg`
**Tags** — Optics & Excitons · WS2 · WSe2
**Keywords** — 2D materials, TMDs, excitons, defects, ultrafast dynamics

**Abstract**
Two-dimensional transition metal dichalcogenides (2D-TMDs) hold a great potential to platform future flexible optoelectronics. The beating hearts of these materials are their excitons known as XA and XB, which arise from transitions between spin-orbit split (SOS) levels in the conduction and valence bands at the K-point. The functionality of 2D-TMD-based devices is determined by the dynamics of these excitons. One of the most consequential channels of exciton decay on the device functionality is the defect-assisted recombination (DAR). Here, we employ steady-state absorption and emission spectroscopies, and pump density-dependent femtosecond transient absorption spectroscopy to report on the effect of DAR on the lifetime of excitons in monolayers of tungsten disulfide (2D-WS2) and diselenide (2D-WSe2). These pump-probe measurements suggested that while exciton decay dynamics in both monolayers are driven by DAR, in 2D-WS2, defect states near the XB exciton fill up before those near the XA exciton. However, in the 2D-WSe2 monolayer, the defect states fill up similarly. Understanding the contribution of DAR on the lifetime of excitons and the partition of this decay channel between XA and XB excitons may open new horizons for the incorporation of 2D-TMD materials in future optoelectronics.

---

## 11 · Ultrafast dynamics of exciton formation and decay in two-dimensional tungsten disulfide (2D-WS₂) monolayers
`2020 · Physical Chemistry Chemical Physics (RSC) · Published`

**Authors** — Z. E. Eroglu, O. Comegys, L. S. Quintanar, Nurul Azam, S. Elafandi
**DOI** — [10.1039/D0CP03220D](https://doi.org/10.1039/D0CP03220D)
**Page** — https://pubs.rsc.org/en/content/articlelanding/2020/cp/d0cp03220d/unauth
**Image** — `/images/pubs/ultrafast_dynamics.gif`
**Tags** — Optics & Excitons · WS2

**Abstract**
Excitons in two-dimensional transition metal dichalcogenide monolayers (2D-TMDs) are of essential importance due to their key involvement in 2D-TMD-based applications. For instance, exciton dissociation and exciton radiative recombination are indispensible processes in photovoltaic and light-emitting devices, respectively. These two processes depend drastically on the photogeneration efficiency and lifetime of excitons. Here, we incorporate femtosecond pump–probe spectroscopy to investigate the ultrafast dynamics of exciton formation and decay in a single crystal of monolayer 2D tungsten disulfide (WS2). Investigation of the formation dynamics of the lowest exciton (XA) indicated that the formation time linearly increases from ∼150 fs upon resonant excitation, to ∼500 fs following excitation that is ∼1.1 eV above the band-gap. This dependence is attributed to the time it takes highly excited electrons in the conduction band (CB) to relax to the CB minimum (CBM) and contribute to the formation of XA. This is confirmed by infrared measurements of electron intraband relaxation dynamics. Furthermore, pump–probe experiments suggested that the XA ground state depletion recovery dynamics depend on the excitation energy as well. The average recovery time increased from ∼10 ps in the case of resonant excitation to ∼50 ps following excitation well above the band-gap. Having the ability to control whether generating short-lived or long-lived electron–hole pairs in 2D-TMD monolayers opens a new horizon for the application of these materials. For instance, long-lived electron–hole pairs are appropriate for photovoltaic devices, but short-lived excitons are more beneficial for lasers with ultrashort pulses.

---

## 12 · Gas-Phase Formation of Highly Luminescent 2D GaSe Nanoparticle Ensembles in a Nonequilibrium Laser Ablation Process
`2020 · Nanomaterials · Published`

**Authors** — S. Elafandi, Z. Ahmadi, Nurul Azam, M. Mahjouri-Samani
**DOI** — [10.3390/nano10050908](https://doi.org/10.3390/nano10050908)
**Page** — https://www.mdpi.com/2079-4991/10/5/908
**Image** — `/images/pubs/PLD_growth.png`
**Tags** — Synthesis · Optics & Excitons · GaSe · Laser ablation
**Keywords** — 2D materials, 2D nanoparticles, 2D quantum dots, laser ablation, laser-based synthesis

**Abstract**
Interest in layered two-dimensional (2D) materials has been escalating rapidly over the past few decades due to their promising optoelectronic and photonic properties emerging from their atomically thin 2D structural confinements. When these 2D materials are further confined in lateral dimensions toward zero-dimensional (0D) structures, 2D nanoparticles and quantum dots with new properties can be formed. Here, we report a nonequilibrium gas-phase synthesis method for the stoichiometric formation of gallium selenide (GaSe) nanoparticles ensembles that can potentially serve as quantum dots. We show that the laser ablation of a target in an argon background gas condenses the laser-generated plume, resulting in the formation of metastable nanoparticles in the gas phase. The deposition of these nanoparticles onto the substrate results in the formation of nanoparticle ensembles, which are then post-processed to crystallize or sinter the nanoparticles. The effects of background gas pressures, in addition to crystallization/sintering temperatures, are systematically studied. Scanning electron microscopy (SEM), transmission electron microscopy (TEM), photoluminescence (PL) spectroscopy, and time-correlated single-photon counting (TCSPC) measurements are used to study the correlations between growth parameters, morphology, and optical properties of the fabricated 2D nanoparticle ensembles.

---

## 13 · Monolayer 2D quantum materials subjected to gamma irradiation in high vacuum for nuclear and space applications
`2020 · Applied Physics Letters · Published`

> ✅ DOI/URL corrected (the entry had Pub 7's ACS link). Author Mahjouri-Samani added per the published record — please confirm.

**Authors** — S. Elafandi, R. Christiansen, Nurul Azam, M. Cichon, M. Park, M. C. Hamilton, Masoud Mahjouri-Samani
**DOI** — [10.1063/5.0006919](https://doi.org/10.1063/5.0006919)
**Page** — https://pubs.aip.org/aip/apl/article-abstract/116/21/213105/38139/Monolayer-2D-quantum-materials-subjected-to-gamma
**Image** — `/images/pubs/Gamma_radiation.png`
**Tags** — Radiation / Space · Devices & Sensing
**Keywords** — Gamma Irradiation, Harsh Environment, 2D Materials, TMDC Monolayer, Space Electronics, Radiation Hard

**Abstract**
The stability and reliability of emerging two-dimensional (2D) quantum materials subjected to harsh environments, such as high-energy radiation, are of high importance, particularly in the fields of space, defense, and energy applications. In this work, we explored the effects of gamma radiation on the structural and optical properties of monolayer WSe2 and WS2 crystals. Raman and photoluminescence spectroscopies were employed to study and probe radiation-induced changes to the samples after exposure to intense gamma radiation (from a 60Co source) in a high-vacuum environment (∼1 × 10−6 Torr) and with various exposure times to vary the total accumulated dosage (up to ∼56 Mrad). In general, very small changes in optical or vibrational properties were observed compared to pristine samples, suggesting noteworthy stability even for high dosages of gamma radiation. Moreover, we found that WSe2 monolayer samples exhibited higher tolerance to gamma radiation compared to WS2 samples. These findings highlight the inherent stability of these 2D quantum materials in harsh radioactive environments, which motivates further investigation of their optical, electrical, and structural properties and exploration for use in future space, energy, and defense applications.

---

## 14 · Application of lasers in the synthesis and processing of two-dimensional quantum materials
`2019 · Journal of Laser Applications · Published (review article)`

**Authors** — Z. Ahmadi, B. Yakupoglu, Nurul Azam, S. Elafandi, M. Mahjouri-Samani
**DOI** — [10.2351/1.5100762](https://doi.org/10.2351/1.5100762)
**Page** — https://pubs.aip.org/lia/jla/article-abstract/31/3/031202/222544/Application-of-lasers-in-the-synthesis-and
**Image** — `/images/pubs/application_of_laser.png`
**Tags** — Synthesis · Laser-assisted synthesis
**Keywords** — laser synthesis, laser processing, 2D materials

**Abstract**
Recently, two-dimensional (2D) quantum materials and particularly transition metal dichalcogenides have emerged as an exciting class of atomically thin materials that possess extraordinary optoelectronic and photonic properties. The strong light interactions with these materials not only govern their fascinating behavior but can also be used as versatile synthesis and processing tools to precisely tailor their structures and properties. This review highlights the recent progress in laser-based approaches for synthesis and processing of 2D materials that are often challenging via conventional methods. In the synthesis section, the review covers the pulsed laser deposition as the main growth method due to its ability to form and deliver atoms, clusters, or nanoparticles for the growth of 2D materials and thin films with controlled stoichiometry, number of layers, crystallite size, and growth location. It is also shown that the tunable kinetic energy of the atoms in the laser plume is essential for healing defects and doping of 2D layers. In the processing section, the review highlights the application of lasers in crystallization, sintering, direct writing, thinning, doping, and conversion of 2D materials. The spatial and temporal tunability, controlled energy, and power densities of laser beams enable a broad spectrum of applications in the synthesis and processing of 2D quantum materials that are not accessible by other means.

---

## 15 · Self-limiting laser crystallization and direct writing of 2D materials
`2019 · International Journal of Extreme Manufacturing · Published`

**Authors** — Z. Ahmadi, B. Yakupoglu, Nurul Azam, S. Elafandi, M. Mahjouri-Samani
**DOI** — [10.1088/2631-7990/ab0edc](https://doi.org/10.1088/2631-7990/ab0edc)
**Page** — https://iopscience.iop.org/article/10.1088/2631-7990/ab0edc/meta
**Image** — `/images/pubs/Selflimiting_laser_crystalization.png`
**Tags** — Synthesis · Laser-assisted synthesis

**Abstract**
Direct growth and patterning of atomically thin two-dimensional (2D) materials on various substrates are essential steps towards enabling their potential for use in the next generation of electronic and optoelectronic devices. The conventional gas-phase growth techniques, however, are not compatible with direct patterning processes. Similarly, the condensed-phase methods, based on metal oxide deposition and chalcogenization processes, require lengthy processing times and high temperatures. Here, a novel self-limiting laser crystallization process for direct crystallization and patterning of 2D materials is demonstrated. It takes advantage of significant differences between the optical properties of the amorphous and crystalline phases. Pulsed laser deposition is used to deposit a thin layer of stoichiometric amorphous molybdenum disulfide (MoS2) film (∼3 nm) onto the fused silica substrates. A tunable nanosecond infrared (IR) laser (1064 nm) is then employed to couple a precise amount of power and number of pulses into the amorphous materials for controlled crystallization and direct writing processes. The IR laser interaction with the amorphous layer results in fast heating, crystallization, and/or evaporation of the materials within a narrow processing window. However, reduction of the midgap and defect states in the as crystallized layers decreases the laser coupling efficiency leading to higher tolerance to process parameters. The deliberate design of such laser 2D material interactions allows the self-limiting crystallization phenomena to occur with increased quality and a much broader processing window. This unique laser processing approach allows high-quality crystallization, direct writing, patterning, and the integration of various 2D materials into future functional devices.

---

## 16 · Optical and Magnetic Properties of Fe-infused 2D-MoS₂
`2025 · journal TBD · Under review`

**Authors** — Yujia Wang, Nurul Azam, Jeff Rable, Syed Shahed, Zachariah B. Hennighausen, Jing Kong, John Phillip Ferrier, Matthew Matzelle, Bernardo Barbiellini, Barun Ghosh, Arun Bansil, Swastik Kar
**DOI** — *(none yet — under review)*
**Page** — *(pending)*
**Image** — *(pending)*
**Tags** — Optics & Excitons · Magnetism · MoS2

**Abstract**
*(to be added once available)*

---

## 17 · Synthesis and Temperature-Dependent Momentum Microscopy of Type-II Dirac Semimetal NiTe₂
`2026 · journal TBD · In preparation`

**Authors** — Nurul Azam, Syed M. Shahed, Imran Mulani, Sugata Chowdhury, Alberto Torre, Arun Bansil, Swastik Kar
**DOI** — *(none yet)*
**Page** — *(pending)*
**Image** — *(pending)*
**Tags** — Synthesis · Topology · NiTe2 · MBE · Momentum microscopy

**Abstract**
*(to be added once available)*

---

## 18 · Magneto-Crystalline Anisotropy in Multi-Oriented MnSb Thin Films for Multifunctional Device Applications
`2025 · journal TBD · Under review (close to acceptance)`

> Updated per your note — new title and expanded author list. The **conference version (Conf #3)** still uses the earlier working title *"Synthesis and Nitrogen-Vacancy Magnetometry of ferromagnetic MnSb."*

**Authors** — Nurul Azam, Jeffrey Rable, Rajnandini Sharma, Salihu Ahmad, Syed Mohammad Shahed, Imrankhan Mulani, Wentao Liang, David Budil, Sugata Chowdhury, Alberto De la Torre, Arun Bansil, Swastik Kar
**DOI** — *(none yet — under review)*
**Page** — *(pending)*
**Image** — *(pending)*
**Tags** — Synthesis · Magnetism · MnSb · NV magnetometry · MBE

**Abstract**
*(to be added once available)*

---

*End of master publications list. Next step: the matching Conferences master (Part 2), then both get split into Astro content-collection files for the live site.*

---

# Part 2 — Theses

Theses are kept **separate from the peer-reviewed papers** and shown in their own block at the bottom of the Publications page (heading: "Theses & Dissertations"). They use the same card style, but with `Institution` in place of a journal venue and a link to the repository copy rather than a DOI. This is standard academic practice — a thesis isn't a journal article, so it shouldn't sit inside the numbered publication list, but it absolutely belongs on the page.

Please fill the blanks (title, year, institution, advisor, link). Leave anything unavailable blank — it gets a clean fallback.

### PhD Dissertation
- **Title** — Laser-Assisted Synthesis and Time-Resolved Growth Control of Two-Dimensional Quantum Materials
- **Degree** — Ph.D., Electrical & Computer Engineering
- **Year** — 2022 *(defended December 10, 2022)*
- **Institution** — Auburn University, Auburn, Alabama
- **Advisor** — Masoud Mahjouri-Samani (Committee Chair)
- **Committee** *(optional on site)* — Guofu Niu, Michael C. Hamilton, Mark L. Adams, Marcelo A. Kuroda
- **Link** — https://www.proquest.com/openview/aa441aba1ac4ad3f16082d1c53bc6ee9/1?pq-origsite=gscholar&cbl=18750&diss=y
- **Image** *(optional)* — *(none — uses fallback tile)*
- **Keywords** — 2D Materials, Quantum Materials, TMDC, Laser-assisted Synthesis, Time-resolved Synthesis, Vacancy Tailoring
- **Tags** — Thesis · Synthesis · Laser-assisted synthesis (LAST) · Vacancy engineering · TMDCs
- **Abstract** — *(title page only; full abstract available via the ProQuest link — add later if desired)*

### Master's Thesis
- **Title** — Locking a Laser Beam on a Dielectric Surface Using a New Optoelectronic Technique
- **Degree** — M.S., Electrical Engineering
- **Year** — 2017 *(August 2017)*
- **Institution** — Lamar University, Beaumont, Texas
- **Advisor** — Cristian Bahrim (Supervising Professor)
- **Committee** *(optional on site)* — Gleb Tcheslavski, G. N. Reddy
- **Link** — https://www.proquest.com/openview/3759db60e2c83741e1383dca7251ee7d/1?pq-origsite=gscholar&cbl=18750
- **Image** *(optional)* — *(none — uses fallback tile)*
- **Tags** — Thesis · Optics · Laser physics
- **Abstract** — *(title page only; available via the ProQuest link — add later if desired)*

> No PDF of either thesis will be hosted on the site — same rule as the papers. The link points out to the institutional repository (or wherever the official copy lives).
