import { serverEnv } from "@/config/env/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * https://nextjs.org/docs/app/api-reference/functions/revalidatePath
 *
 * https://vercel.com/docs/cron-jobs/manage-cron-jobs
 */
export const GET = async (request: NextRequest) => {
  if (serverEnv.APP_ENV === "production") {
    const authHeader = request.headers.get("authorization");

    if (authHeader !== `Bearer ${serverEnv.CRON_SECRET}`) {
      return NextResponse.json(
        {
          message: "Invalid authorization header",
        },
        {
          status: 401,
        },
      );
    }
  }

  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path or tag to revalidate",
  });
};
