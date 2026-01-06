import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    pagenumber: z.number(),
    description: z.string(),
    category: z.string(),
    formato: z.string(),
  })
});


export const collections = { books };