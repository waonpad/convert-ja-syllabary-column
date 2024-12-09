import { Suspense } from "react";
import { ConvertedPostList } from "./converted-post-list";

export const ConvertedPostListContainer = async () => {
  "use cache";

  return (
    <section className="flex flex-col gap-2">
      <header className="flex flex-col justify-between gap-1 sm:flex-row">
        <h1 className="font-bold text-lg">様々な古典インド</h1>
        <span className="inline-flex items-end text-sm">クリックすると古典インドっぽくする前を表示できます 🐘</span>
      </header>
      <Suspense fallback={<div>読み込み中...</div>}>
        <ConvertedPostList />
      </Suspense>
      {/* ページトップに飛ぶ */}
      <a href="#top" className="rounded-md border-2 border-black p-4 text-center font-bold">
        <span>古典インドを投稿してみよう！</span>
      </a>
    </section>
  );
};
