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

export const collections = { writing, research, software };
