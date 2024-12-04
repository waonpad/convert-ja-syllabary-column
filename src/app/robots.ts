import { clientEnv } from "@/config/env/client";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clientEnv.NEXT_PUBLIC_HOST_URL}/sitemap.xml`,
  };
}
