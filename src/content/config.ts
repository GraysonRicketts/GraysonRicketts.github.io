import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
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
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    repoUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const reading = defineCollection({
  type: 'data',
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
