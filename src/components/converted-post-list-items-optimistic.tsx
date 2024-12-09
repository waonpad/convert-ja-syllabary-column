"use client";

import { useOptimisticPosts } from "@/hooks/use-optimistic-posts";
import { usePrevious } from "@/utils/hooks/use-previous";
import { useEffect } from "react";
import { ConvertedPostListItem } from "./converted-post-list-item";

export type Props = {
  /**
   * 楽観的更新によって表示している投稿をクリアするトリガー
   *
   * 例:
   * 1. 投稿を取得した時刻を渡す
   * 2. 投稿を再取得するまで変わらない
   * 3. 変わった ＝ 楽観的更新で表示していた投稿が実際に作成された
   * 4. 楽観的更新で表示していた投稿をクリアする
   */
  getPostsAt: number;
};

export const ConvertedPostListItemsOptimistic = ({ getPostsAt }: Props) => {
  const { posts, resetPosts } = useOptimisticPosts();

  const prevGetPostsAt = usePrevious(getPostsAt);

  const isPostsUpdated = prevGetPostsAt !== getPostsAt;

  useEffect(() => {
    if (isPostsUpdated) {
      resetPosts();
    }
  }, [isPostsUpdated, resetPosts]);

  return <>{!isPostsUpdated && posts.map((post) => <ConvertedPostListItem key={post.id} post={post} />)}</>;
};
