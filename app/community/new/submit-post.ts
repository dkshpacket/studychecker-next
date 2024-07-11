"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { checkBannedWords } from "@/lib/filter";
import { redirect } from "next/navigation";

export const submitPost = async (prevState, formData) => {
  console.log(formData);
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  if (!formData.get("title") || !formData.get("content")) {
    return "제목과 내용을 입력해주세요.";
  }

  if (!["chat", "question", "study"].includes(formData.get("category"))) {
    return "카테고리를 선택해주세요";
  }
  try {
    checkBannedWords(formData.get("title") as string);
    checkBannedWords(formData.get("content") as string);
  } catch (e: any) {
    return e.message;
  }

  const newPost = await db.post.create({
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
      category: formData.get("category"),
      authorId: session.user?.id as string,
    },
  });

  redirect(`/community/${newPost.id}`);
};
