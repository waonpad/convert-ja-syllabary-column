import { prisma } from "@/lib/prisma/client";

export const ConvertedPostList = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <ol className="converted-post-list grid gap-2">
        {posts.map((post) => (
          <li key={post.id} className="rounded-md border-[1.5px] border-black p-2">
            <input type="checkbox" id={`toggle-${post.id}`} className="hidden" />
            <label htmlFor={`toggle-${post.id}`} className="block cursor-pointer">
              {/* 変換前は最初非表示 */}
              <span className="post-input hidden whitespace-pre">{post.input}</span>
              <span className="post-converted whitespace-pre">{post.converted}</span>
            </label>
          </li>
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
