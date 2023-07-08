import { z, defineCollection } from 'astro:content';

const serviceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});
const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  services: serviceCollection,
  work: workCollection,
};
