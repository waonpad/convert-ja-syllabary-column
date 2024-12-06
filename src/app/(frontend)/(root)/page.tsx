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
    <div className="flex flex-col gap-8">
      <ConvertJaSyllabaryColumn />
      <section className="flex flex-col gap-2">
        <header>
          <h1 className="font-bold text-lg">様々な古典インド</h1>
        </header>
        <ConvertedPostList />
      </section>
    </div>
  );
}
