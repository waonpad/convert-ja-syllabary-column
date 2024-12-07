import { serverEnv } from "@/config/env/server";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true;

const connectionString = serverEnv.DB_PRISMA_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // @ts-ignore
    adapter,
  });

if (serverEnv.APP_ENV === "development") globalForPrisma.prisma = prisma;
