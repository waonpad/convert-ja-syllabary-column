"use client";

import { createCtx } from "@/utils/create-ctx";
import type { Post } from "@prisma/client";
import { type ReactNode, useState } from "react";

const [createdUseOptimisticPosts, SetOptimisticPostsProvider] = createCtx<ReturnType<typeof useOptimisticPostsCtx>>();

export { SetOptimisticPostsProvider };

export const useOptimisticPosts = createdUseOptimisticPosts;

export const useOptimisticPostsCtx = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const resetPosts = () => {
    setPosts([]);
  };

  return {
    posts,
    addPost,
    resetPosts,
  };
};

export const OptimisticPostsProvider = ({ children }: { children: ReactNode }) => {
  const optimisticPosts = useOptimisticPostsCtx();

  return <SetOptimisticPostsProvider value={optimisticPosts}>{children}</SetOptimisticPostsProvider>;
};
