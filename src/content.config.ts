import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const nonBlank = z.string().trim().min(1);
const webUrl = z.url().refine((value) => /^https?:\/\//.test(value), {
  message: 'Use an HTTP or HTTPS URL',
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: nonBlank,
    summary: nonBlank,
    highlights: z.array(nonBlank).min(1),
    techStack: z.array(nonBlank).min(1),
    reason: nonBlank,
    screenshots: z.array(z.object({ src: nonBlank, alt: nonBlank })).min(1),
    repository: webUrl.optional(),
    live: webUrl.optional(),
  }),
});

export const collections = { projects };
