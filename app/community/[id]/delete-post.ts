"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const deletePost = async (postId: number) => {
  const session = await auth();

  console.log(session);
  if (!session?.user?.admin) {
    return "관리자만 사용할 수 있습니다.";
  }

  await db.post.update({
    where: {
      id: postId,
    },
    data: {
      deleted: true,
    },
  });
};
