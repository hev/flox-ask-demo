import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Same shape @hevmind/ask expects: title + group drive the index and digest.
// Nested ids (concepts/environments, man/flox-install) preserve flox.dev/docs's
// URL structure. `group`/`order` carry each page's position in Flox's mkdocs.yml
// nav so the sidebar reads in the same sequence as the official site.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    group: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { docs };
