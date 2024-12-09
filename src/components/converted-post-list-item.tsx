import type { Post } from "@prisma/client";

export type Props = {
  post: Post;
};

export const ConvertedPostListItem = ({ post }: Props) => {
  return (
    <>
      <li className="rounded-md border-[1.5px] border-black p-2">
        <input type="checkbox" id={`toggle-${post.id}`} className="hidden" />
        <label htmlFor={`toggle-${post.id}`} className="block cursor-pointer">
          {/* 変換前は最初非表示 */}
          <span className="post-input hidden whitespace-pre-wrap">{post.input}</span>
          <span className="post-converted whitespace-pre-wrap">{post.converted}</span>
        </label>
      </li>
    </>
  );
};
