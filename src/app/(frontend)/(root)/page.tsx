import { ConvertJaSyllabaryColumn } from "@/components/convert-ja-syllabary-column";
import { ConvertedPostList } from "@/components/converted-post-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  return (
    <div>
      <ConvertJaSyllabaryColumn />
      <ConvertedPostList />
    </div>
  );
}
