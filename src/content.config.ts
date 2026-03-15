import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const reading = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/reading' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    author: z.string().optional(),
    source: z.string().optional(),
    description: z.string().optional(),
    dateAdded: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, projects, reading };
