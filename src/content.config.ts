import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Link groups rendered on the home page, sorted by `order`.
const links = defineCollection({
  loader: file('src/data/links.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    order: z.number().int(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.url(),
      }),
    ),
  }),
});

export const collections = { links };
