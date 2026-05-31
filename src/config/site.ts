// SINGLE SOURCE OF TRUTH for site-wide metadata, navigation, and links.
// Components must read from here — never hard-code nav items or stray buttons.

export const SITE = {
  title: 'Nurul Azam',
  tagline: 'Quantum materials: synthesis, spectroscopy, and scientific software',
  description:
    'Dr. Nurul Azam grows quantum materials (MBE & laser-assisted synthesis), studies them with ' +
    'momentum microscopy and Raman spectroscopy, and builds the software and AI workflows to ' +
    'understand and optimise them.',
  url: 'https://nurulazam.github.io',
  author: 'Nurul Azam',
  lang: 'en',
  // Hero identity line — keep it concrete and specific.
   identity: 'Booting a recursive machine: synthesise, probe, and infer!',
  analytics: {
    // GoatCounter endpoint. Register at https://www.goatcounter.com/ and paste your URL here.
    // Leave empty ('') to disable. Stats live in your private dashboard — no on-page counter.
    goatcounter: 'https://nurul-azam.goatcounter.com/count',
  },
} as const;

// Primary navigation — the ONLY place nav items are defined.
export const NAV: { label: string; href: string }[] = [
  { label: 'Research', href: '/research/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Software', href: '/software/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'About', href: '/about/' },
];

// Exactly ONE primary call-to-action site-wide.
export const PRIMARY_CTA = { label: 'Work with me', href: '/contact/' } as const;

// Secondary links (footer only).
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=bNYGvEcAAAAJ&hl=en' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-9721-5141' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nurulazam/' },
  { label: 'GitHub', href: 'https://github.com/nurulazam' },
];

// Writing categories — keep in sync with the schema in content.config.ts.
export const WRITING_CATEGORIES = [
  'Research Highlights',
  'Technique Explainers',
  'Mentoring Philosophy',
  'Field Notes',
  'News',
] as const;
