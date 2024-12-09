import { OptimisticPostsProvider } from "@/components/convert-ja-syllabary-column";
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
