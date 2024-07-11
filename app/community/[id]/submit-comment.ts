"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { checkBannedWords } from "@/lib/filter";

export const submitComment = async (formData, postId) => {
  const session = await auth();

  if (!session) throw new Error("로그인이 필요합니다.");

  if (
    typeof formData.get("content") != "string" ||
    formData.get("content")?.trim().length < 1
  )
    throw new Error("댓글 내용을 입력해주세요.");

  checkBannedWords(formData.get("content") as string);

  await db.comment.create({
    data: {
      content: formData.get("content") as string,
      author: {
        connect: {
          id: parseInt(session.user?.id as string),
        },
      },
      post: {
        connect: {
          id: postId,
        },
      },
    },
  });

  revalidatePath(`/community/${postId}`);
};
