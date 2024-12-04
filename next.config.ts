import type { NextConfig } from "next";
import "./src/config/env/client";
import "./src/config/env/server";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

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
  },
  pageExtensions: ["ts", "tsx"].flatMap((extension) => {
    const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
    return isDevServer ? [`dev.${extension}`, extension] : extension;
  }),
});

export default nextConfig;
