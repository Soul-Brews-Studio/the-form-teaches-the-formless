import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const chapters = defineCollection({
  loader: glob({ pattern: "*.md", base: "./chapters" }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { chapters };
