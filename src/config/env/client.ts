import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {
    /**
     * アプリケーション名
     *
     * @example
     * "My App"
     */
    NEXT_PUBLIC_APP_NAME: z.string().min(1),
    /**
     * ホストURL
     *
     * @example
     * "https://example.com"
     * "http://localhost:3000"
     */
    NEXT_PUBLIC_HOST_URL: z.string().url(),
    /**
     * GitHubのリポジトリ名
     *
     * @example
     * "microsoft/TypeScript"
     */
    NEXT_PUBLIC_GITHUB_REPOSITORY: z.string().min(1),
    /**
     * クソアプリ Advent Calendar 2024の記事のURL
     */
    NEXT_PUBLIC_KUSO_APP_ADVENT_CALENDAR_2024_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
    NEXT_PUBLIC_GITHUB_REPOSITORY: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY,
    NEXT_PUBLIC_KUSO_APP_ADVENT_CALENDAR_2024_URL: process.env.NEXT_PUBLIC_KUSO_APP_ADVENT_CALENDAR_2024_URL,
  },
});
