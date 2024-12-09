import { OptimisticPostsProvider } from "@/hooks/use-optimistic-posts";
import { WatchUnhandledError } from "@/lib/error-boundary/watch-unhandled-error";
import type { ReactNode } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WatchUnhandledError />
      <OptimisticPostsProvider>{children}</OptimisticPostsProvider>
    </>
  );
};
