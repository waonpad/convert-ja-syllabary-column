import { ConvertJaSyllabaryColumn } from "@/components/convert-ja-syllabary-column";
import { ConvertedPostListContainer } from "@/components/converted-post-list-container";

export default async function Page() {
  "use cache";

  return (
    <div className="flex flex-col gap-6">
      <ConvertJaSyllabaryColumn />
      <ConvertedPostListContainer />
    </div>
  );
}
