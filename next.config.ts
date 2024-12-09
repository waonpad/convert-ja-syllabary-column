import type { NextConfig } from "next";
import "./src/config/env/client";
import "./src/config/env/server";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { INFINITE_CACHE } from "next/dist/lib/constants";

const nextConfig = (
  phase: string,
  {
    defaultConfig,
  }: {
    defaultConfig: NextConfig;
  },
): NextConfig => ({
  ...defaultConfig,
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
  },
  experimental: {
    typedRoutes: true,
    dynamicIO: true,
    reactCompiler: true,
    // https://nextjs.org/docs/canary/app/api-reference/functions/cacheLife#default-cache-profiles
    cacheLife: {
      // キャッシュのデフォルト設定を上書き
      default: {
        stale: undefined,
        // 明示的にrevalidateするまでは無限にキャッシュする
        revalidate: INFINITE_CACHE,
        expire: INFINITE_CACHE,
      },
    },
  },
  pageExtensions: ["ts", "tsx"].flatMap((extension) => {
    const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
    return isDevServer ? [`dev.${extension}`, extension] : extension;
  }),
});

export default nextConfig;
