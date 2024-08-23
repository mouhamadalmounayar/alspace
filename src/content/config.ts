import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.date(),
    category: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
