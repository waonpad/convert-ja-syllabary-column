"use server";

import { CACHE_TAG_POSTS } from "@/caching/tags";
import { convertJaSyllabaryColumnPartOfCharacters } from "@/lib/convert-ja-syllabary/convert-column";
import { prisma } from "@/lib/prisma/client";
import { type CreatePost, createPostSchema } from "@/schemas/posts";
import type { Post } from "@prisma/client";
import { revalidateTag } from "next/cache";
import type { typeToFlattenedError } from "zod";

export const createConvertedPost = async (
  formData: FormData,
): Promise<{ data: Post; error: null } | { data: null; error: typeToFlattenedError<CreatePost>["fieldErrors"] }> => {
  const { data: validated, error } = createPostSchema.safeParse({
    input: formData.get("input"),
    column: formData.get("column"),
  });

  if (error) {
    return {
      data: null,
      error: error.flatten().fieldErrors,
    };
  }

  const converted = convertJaSyllabaryColumnPartOfCharacters({
    characters: validated.input,
    column: validated.column,
  });

  const createdPost = await prisma.post.create({
    data: {
      input: validated.input,
      column: validated.column,
      converted,
    },
  });

  revalidateTag(CACHE_TAG_POSTS);

  return {
    data: createdPost,
    error: null,
  };
};
