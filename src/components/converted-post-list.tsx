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

export const ConvertedPostList = async () => {
  "use cache";

  const { posts, getPostsAt } = await getPosts();

  return (
    <>
      <ol className="converted-post-list flex flex-col gap-2">
        <ConvertedPostListItemsOptimistic getPostsAt={getPostsAt} />
        {posts.map((post) => (
          <ConvertedPostListItem key={post.id} post={post} />
        ))}
      </ol>
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
        `}
      </style>
    </>
  );
};
