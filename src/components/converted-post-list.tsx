import { CACHE_TAG_POSTS } from "@/caching/tags";
import { prisma } from "@/lib/prisma/client";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { ConvertedPostListItem } from "./converted-post-list-item";
import { ConvertedPostListItemsOptimistic } from "./converted-post-list-items-optimistic";

const getPosts = async () => {
  "use cache";
  cacheTag(CACHE_TAG_POSTS);

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return { posts, getPostsAt: Date.now() };
};

/**
 * 何個目の投稿から非表示にしておくか
 */
const BEGINNING_OF_COLLAPSED_POSTS = 15;

export const ConvertedPostList = async () => {
  "use cache";

  const { posts, getPostsAt } = await getPosts();

  const isCollapsePosts = posts.length >= BEGINNING_OF_COLLAPSED_POSTS;

  return (
    <>
      {isCollapsePosts && <input type="checkbox" id="show-all" className="hidden" />}
      <ol className="converted-post-list flex flex-col gap-2">
        <ConvertedPostListItemsOptimistic getPostsAt={getPostsAt} />
        {posts.map((post) => (
          <ConvertedPostListItem key={post.id} post={post} />
        ))}
      </ol>
      <div className="flex gap-1">
        {/* ページトップに飛ぶ */}
        <a href="#top" className="flex-1 rounded-md border-2 border-black p-3 text-center font-bold sm:p-4">
          <span>古典インドを投稿しよう！</span>
        </a>
        {isCollapsePosts && (
          <div className="rounded-md border-2 border-black">
            <label htmlFor="show-all" className="flex h-full cursor-pointer items-center px-4 sm:px-8">
              全て表示
            </label>
          </div>
        )}
      </div>
      <style>
        {`
          /* 変換前は最初非表示 */
          .converted-post-list label .post-input {
            display: none;
          }
          /* チェックされたら変換前を表示 */
          .converted-post-list input:checked + label .post-input {
            display: block;
          }
          /* チェックされたら変換後を非表示 */
          .converted-post-list input:checked + label .post-converted {
            display: none;
          }
          ${
            isCollapsePosts
              ? `
          /* 6件目以降は最初非表示 */
          .converted-post-list > *:nth-child(n+${BEGINNING_OF_COLLAPSED_POSTS}) {
            display: none;
          }
          /* 全て表示ボタンを押したら全て表示 */
          #show-all:checked ~ .converted-post-list > *:nth-child(n+${BEGINNING_OF_COLLAPSED_POSTS}) {
            display: block;
          }
          /* 全て表示ボタンを押したらボタンを非表示 */
          #show-all:checked ~ div > div:has(label[for="show-all"]) {
            display: none;
          }
          `
              : ""
          }
        `}
      </style>
    </>
  );
};
