import { prisma } from "@/lib/prisma/client";

// TODO: 見た目いい感じにする
export const ConvertedPostList = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.input}</div>
          <div>{post.converted}</div>
        </div>
      ))}
    </div>
  );
};
