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
  },
  experimental__runtimeEnv: {},
});
