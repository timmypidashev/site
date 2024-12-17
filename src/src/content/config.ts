import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      date: z.string(),
    }),
  }),
}
