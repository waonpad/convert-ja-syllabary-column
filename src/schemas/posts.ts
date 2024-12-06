import { z } from "zod";

const columnSchema = z.union([z.literal("あ"), z.literal("い"), z.literal("う"), z.literal("え"), z.literal("お")]);

export const postSchema = z.object({
  id: z.string(),
  input: z.string().trim().min(1),
  column: columnSchema,
  converted: z.string().trim().min(1),
  createdAt: z.string().datetime(),
});

export type Post = typeof postSchema._type;

export const createPostSchema = z
  .object({
    column: columnSchema,
  })
  .merge(
    postSchema.pick({
      input: true,
    }),
  );

export type CreatePost = typeof createPostSchema._type;
