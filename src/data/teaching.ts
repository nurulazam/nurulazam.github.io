// Teaching page content. Edit copy here; layout lives in src/pages/teaching/index.astro.

export const TEACHING_INTRO = {
  title: "Teaching",
  lede:
    "I teach the way I do research: students learn by building, measuring, and analyzing real systems. " +
    "My training spans electrical engineering, optics, and quantum materials, and I bring that range " +
    "into both the classroom and the laboratory.",
};

export const TEACHING_STATS: { value: string; label: string }[] = [
  { value: "3", label: "universities as teaching assistant" },
  { value: "21", label: "students mentored and trained across four institutions" },
  { value: "3", label: "new courses in development" },
];

export const PHILOSOPHY: { heading: string; body: string }[] = [
  {
    heading: "Rigor and support work together.",
    body:
      "Students arrive with different preparation, not different potential. Clear structure and steady " +
      "practice make difficult material accessible without lowering the bar. I build short concept checks, " +
      "regular low-stakes problem sets, and discussion into every course, so students practice reasoning in " +
      "class instead of only watching it, and misunderstandings show up early instead of on an exam.",
  },
  {
    heading: "Meet students where they are.",
    body:
      "For undergraduates, I combine clear lectures with group problem-solving, demonstrations, and visual " +
      "tools such as crystal models and band diagrams. For graduate students, I use physical pictures and " +
      "guided discussion to connect formal results to what an experiment actually measures. I began " +
      "developing this approach during pedagogy training for physics teaching assistants at Georgia State " +
      "University, and I have refined it since through teaching and research mentoring.",
  },
  {
    heading: "Learn with real data.",
    body:
      "My research gives me authentic examples. A diffraction pattern from one of my films is a direct " +
      "picture of the reciprocal lattice. A momentum-resolved photoemission map shows what a Fermi surface " +
      "looks like. A Raman spectrum from an air-exposed film shows how a surface reaction can produce a " +
      "signal that looks intrinsic. Students take ownership of an idea once they see it decide an " +
      "experimental result.",
  },
  {
    heading: "Build the tools.",
    body:
      "My students design, build, and run their own instruments and write the software that connects them. " +
      "These are the skills the semiconductor and quantum workforce needs.",
  },
];

export const EXPERIENCE: {
  role: string;
  institution: string;
  courses: string[];
  body: string;
}[] = [
  {
    role: "Graduate Teaching Assistant",
    institution: "Auburn University",
    courses: [
      "Fundamentals of Electrical Engineering",
      "Digital Logic Circuits (ELEC 2200)",
      "Microelectronics",
      "Laser-Material Interactions",
    ],
    body:
      "As teaching assistant for Prof. Emeritus Victor P. Nelson's Digital Logic Circuits, I saw how " +
      "structured homework, periodic quizzes, and active in-class engagement improved both performance " +
      "and long-term understanding.",
  },
  {
    role: "Graduate Teaching Assistant",
    institution: "Georgia State University",
    courses: ["Electricity and Electromagnetism"],
    body:
      "I led problem-solving sessions and completed the department's pedagogy training for physics " +
      "teaching assistants.",
  },
  {
    role: "Graduate Teaching Assistant",
    institution: "Lamar University",
    courses: ["Modern Optics and Electro-Optics Laboratories"],
    body:
      "I guided students through hands-on optics and electro-optics experiments, from alignment and " +
      "measurement to analysis.",
  },
  {
    role: "Math Tutor, College Readiness Program",
    institution: "Lamar University",
    courses: ["College Geometry", "College Algebra"],
    body:
      "I tutored students from many academic and cultural backgrounds, which shaped my belief that " +
      "structure and encouragement matter as much as content.",
  },
  {
    role: "Instrument and Facility Training",
    institution: "Northeastern University",
    courses: [
      "Magnetron Sputtering",
      "Ultra-High-Vacuum Operation",
      "MBE and Momentum Microscopy",
    ],
    body:
      "I train incoming students and staff on our integrated growth and characterization platform. " +
      "Explaining why a bakeout matters, or why a film's stoichiometry drifts, works far better at the " +
      "chamber with real data in hand than as a rule to memorize.",
  },
];

export const COURSES: {
  group: string;
  items: { title: string; body: string }[];
}[] = [
  {
    group: "Undergraduate",
    items: [
      {
        title: "Introduction to Materials Science",
        body: "Crystal structure, defects, and phase behavior, illustrated with examples from thin-film growth.",
      },
      {
        title: "Semiconductor Devices",
        body:
          "Builds on my Ph.D. in electrical and computer engineering and my work on 2D transistors and " +
          "Fermi-level pinning.",
      },
      {
        title: "Electricity and Magnetism",
        body:
          "Grounded in my teaching experience and my M.S. research on electromagnetically induced transparency.",
      },
      {
        title: "Optics and Optics Laboratory",
        body: "Draws on years of building and running laser-based synthesis and spectroscopy systems.",
      },
      {
        title: "Electronic Instrumentation",
        body:
          "Combines my digital logic teaching with hands-on experience building laser, vacuum, and " +
          "data-acquisition systems.",
      },
    ],
  },
  {
    group: "Upper-Level and Graduate",
    items: [
      {
        title: "Electronic and Magnetic Materials",
        body:
          "Magnetism, spintronics, and electronic structure, connected to my work on magnetic and " +
          "altermagnetic thin films.",
      },
      {
        title: "Condensed Matter Physics",
        body:
          "Taught from an experimentalist's view of how photoemission, optics, and transport test the theory.",
      },
      {
        title: "Surface Science and Experimental Techniques",
        body: "Epitaxial growth, RHEED, XPS, photoemission, and ultra-high-vacuum practice.",
      },
    ],
  },
];

export const NEW_COURSES: { title: string; body: string; level: string }[] = [
  {
    title: "Quantum Materials: Synthesis and Spectroscopy",
    body:
      "This course follows a material from growth, by molecular beam epitaxy or laser-assisted synthesis, " +
      "to its magnetic, topological, and optical properties. It emphasizes growth kinetics, defects, and " +
      "far-from-equilibrium synthesis.",
    level: "Upper-level undergraduate and graduate",
  },
  {
    title: "Advanced Spectroscopy of Electronic Materials",
    body:
      "This course covers Raman, photoluminescence, X-ray photoelectron spectroscopy, and photoemission " +
      "and momentum microscopy, all taught through real datasets that students analyze themselves. Students " +
      "learn what each technique measures, where it can mislead, and how to combine techniques into a " +
      "consistent picture.",
    level: "Graduate",
  },
  {
    title: "AI-Guided Materials Discovery",
    body:
      "Students learn to turn growth and characterization data into machine-readable form and to build " +
      "simple models that suggest the next experiment. The course draws on software tools I develop for " +
      "connecting synthesis, characterization, and simulation.",
    level: "Upper-level undergraduate and graduate",
  },
];

export const MENTORING = {
  intro:
    "I have mentored and trained 21 undergraduate and graduate students across four institutions. I give " +
    "students ownership of real instruments and real questions early, set clear expectations, meet with " +
    "them regularly, and make sure their contributions are recognized through co-authorship and presentations.",
  outcomes: [
    "Supervised a graduate student's study of surface potential and work function in few-layer chromium " +
      "telluride, now accepted for publication in 2D Materials.",
  ],
  approach: [
    {
      heading: "Hands-on from the start",
      body: "Students run growth and characterization tools themselves under guidance, rather than watching from the side.",
    },
    {
      heading: "Open access",
      body:
        "Research experience in my lab does not depend on prior connections or preparation. I actively " +
        "welcome students from underrepresented backgrounds.",
    },
    {
      heading: "Skills that transfer",
      body:
        "Students leave with instrument, software, and communication skills useful in academia, national " +
        "laboratories, and industry.",
    },
  ],
  // Link text for the writing-category link. The page only renders it when at least one
  // non-draft "Mentoring Philosophy" post exists, so it never points at an empty filter.
  philosophyLink: "Read my writing on mentoring philosophy",
};

export const OUTREACH =
  "I have taken part in STEM outreach in Auburn, Alabama and Beaumont, Texas, introducing students to " +
  "science and engineering through demonstrations and conversations about research careers. I believe " +
  "early, hands-on exposure is one of the most effective ways to widen who sees a future in science.";
