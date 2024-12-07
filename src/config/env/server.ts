import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    APP_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.string(),
  },
  experimental__runtimeEnv: {},
});
