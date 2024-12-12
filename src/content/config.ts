import { defineCollection, z } from "astro:content";
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
};
