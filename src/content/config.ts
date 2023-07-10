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
    link: z.string(),
  }),
});
const experienceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    sortOrder: z.number(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  services: serviceCollection,
  work: workCollection,
  experience: experienceCollection,
};
