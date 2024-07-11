"use client";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { deletePost } from "./delete-post";

export const AdminPanel = ({ postId }) => {
  return (
    <Card>
      <h2 className="text-red-500 font-bold "> 관리자 패널</h2>
      <div className="flex mt-2">
        <Button
          onClick={async () => {
            deletePost(postId);
          }}
          variant={"destructive"}
        >
          삭제
        </Button>
      </div>
    </Card>
  );
};
