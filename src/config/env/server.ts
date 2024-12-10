import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    /**
     * アプリケーションの実行環境
     */
    APP_ENV: z.enum(["development", "production", "test"]),
    /**
     * データベースのURL
     */
    DATABASE_URL: z.string(),
    /**
     * Cronジョブのシークレット
     */
    ...(process.env.APP_ENV === "production" && {
      CRON_SECRET: z.string().min(1),
    }),
  },
  experimental__runtimeEnv: {},
});
