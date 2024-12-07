import { ConvertJaSyllabaryColumn } from "@/components/convert-ja-syllabary-column";
import { ConvertedPostListContainer } from "@/components/converted-post-list-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  "use cache";

  return (
    <div className="flex flex-col gap-8">
      <ConvertJaSyllabaryColumn />
      <ConvertedPostListContainer />
    </div>
  );
}
