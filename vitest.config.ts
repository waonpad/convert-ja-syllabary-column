import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: false,
    include: ["src/**/*.test.{ts,tsx}"],
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    setupFiles: ["src/testing/setup.ts"],
    passWithNoTests: true,
  },
});
