// Astro 5 Content Collections. Typed frontmatter = build fails loudly on bad content,
// which is exactly what we want for easy debugging.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseFields = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
};

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    ...baseFields,
    category: z.enum([
      'Research Highlights',
      'Technique Explainers',
      'Mentoring Philosophy',
      'Field Notes',
      'News',
    ]),
    tags: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    ...baseFields,
    // Dual-axis browsing: the same entry is reachable "by material" and "by physics".
    material: z.array(z.string()).default([]), // e.g. ['WSe2', 'NiTe2', 'MnSb']
    physics: z.array(z.string()).default([]),  // e.g. ['Laser synthesis', 'Topology']
    status: z.enum(['published', 'in-progress']).default('published'),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/software' }),
  schema: z.object({
    ...baseFields,
    kind: z.enum(['Research Tools & Scientific Software', 'Build Log', 'Project']),
    repo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
  }),
});

// Publications: peer-reviewed papers. The abstract lives in the Markdown body.
// Deliberately NOT built on baseFields — papers carry `year` (not `date`) and have
// no `description`; the page derives everything it needs from these fields.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string().optional(),
    status: z.enum(['published', 'under-review', 'in-preparation']).default('published'),
    doi: z.string().optional(),            // bare identifier, e.g. '10.1021/acsnano.3c02280'
    url: z.string().url().optional(),      // canonical page; falls back to the DOI link
    image: z.string().optional(),          // TOC graphic under /public/images/pubs/
    imageAlt: z.string().optional(),
    topics: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    techniques: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

// Theses: institutional work, shown in their own block at the bottom of /publications.
const theses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/theses' }),
  schema: z.object({
    title: z.string(),
    degree: z.string(),
    institution: z.string(),
    year: z.number(),
    advisor: z.string().optional(),
    url: z.string().url().optional(),      // repository / ProQuest page
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, research, software, publications, theses };
