"use client";

import { OptimisticPostsProvider } from "@/hooks/use-optimistic-posts";
import { useWatchUnhandledError } from "@/lib/error-boundary/use-watch-unhandled-error";
import type { ReactNode } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  useWatchUnhandledError();

  return (
    <>
      <OptimisticPostsProvider>{children}</OptimisticPostsProvider>
    </>
  );
};
