import { ConvertJaSyllabaryColumn } from "@/components/convert-ja-syllabary-column";
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
      {/* TODO: 画面が寂しいのでどうにかしたい */}
    </div>
  );
}
