"use client";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { submitComment } from "./submit-comment";
import { startTransition, useState } from "react";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/submit-button";

export const CommentMaker: React.FC<{ postId: number }> = async ({
  postId,
}) => {
  return (
    <Card className="p-4">
      <form
        action={async (formData) => {
          await submitComment(formData, postId);
          (
            document.querySelector("#commentcontent")! as HTMLTextAreaElement
          ).value = "";
        }}
      >
        <textarea
          id="commentcontent"
          placeholder="댓글을 입력해주세요."
          name="content"
          className="border p-4 h-24 stretch block focus:outline-none resize-none rounded-sm w-full"
        />
        <div className="w-full flex justify-end">
          <SubmitButton className="mt-2" size={"sm"}>
            등록
          </SubmitButton>
        </div>
      </form>
    </Card>
  );
};
