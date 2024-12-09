import { ExternalLink } from "@/components/external-link";
import { clientEnv } from "@/config/env/client";
import { AppProvider } from "@/providers/app-provider";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  "use cache";

  return (
    <>
      <AppProvider>
        <main className="mx-auto flex w-[96%] max-w-screen-lg grow flex-col py-2">{children}</main>
        <footer className="mx-auto flex w-[96%] max-w-screen-lg flex-col justify-center gap-1 py-2 sm:flex-row sm:gap-3">
          <ExternalLink
            href={`https://github.com/${clientEnv.NEXT_PUBLIC_GITHUB_REPOSITORY}`}
            className="text-center text-blue-500 text-sm underline hover:text-blue-600 sm:text-base"
          >
            GitHubリポジトリ
          </ExternalLink>
          <div className="hidden text-sm sm:block sm:text-base">/</div>
          <ExternalLink
            href={clientEnv.NEXT_PUBLIC_KUSO_APP_ADVENT_CALENDAR_2024_URL}
            className="text-center text-blue-500 text-sm underline hover:text-blue-600 sm:text-base"
          >
            クソアプリ Advent Calendar 2024の記事
          </ExternalLink>
        </footer>
      </AppProvider>
    </>
  );
}
