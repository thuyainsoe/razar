import { defineCollection, z } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1, "Title is required"), // Ensures title is a string and not empty
    description: z.string().min(1, "Description is required"), // Description must be a string and not empty
    publishedDate: z.string().transform((date) => new Date(date)), // Converts publishedDate to a Date object
    tags: z.array(z.string()).nonempty("At least one tag is required"), // Array of tags, at least one required
    coverImage: z.string(), // URL validation for the cover image
    author: z.string().min(1, "Author is required"), // Author name is required
    keywords: z.string().optional(),
    draft: z.boolean().optional(), // Optional draft flag
  }),
});

const player = defineCollection({
  schema: z.object({
    name: z.string(),
    nickname: z.string(),
    image: z.string().optional(), // Image can be optional
    age: z.number(),
    nationality: z.string(),
    born: z.string(),
    about: z.string(),
  }),
});

export const collections = {
  player,
  blog,
};
