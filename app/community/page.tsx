import { Card } from "@/components/card";
import { Post } from "./post";
import { Pencil } from "lucide-react";
import { db } from "@/lib/db";
import Link from "next/link";
import { SubmitButton } from "@/components/submit-button";
import { cn } from "@/lib/utils";

export const categories = {
  chat: "자유",
  question: "질문",
  study: "공부",
};

const CommunityPage = async ({ searchParams }) => {
  const posts = await db.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    where: {
      deleted: false,
      category: searchParams.filter as any,
    },
  });

  return (
    <Card>
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-bold">커뮤니티</h1>
        <Link href="/community/new">
          <SubmitButton size={"sm"} className="flex items-center gap-1 ">
            <Pencil className="w-3 h-3" />글 쓰기
          </SubmitButton>
        </Link>
      </div>

      <div className="flex gap-1 mt-4 text-xs">
        <Link
          href="/community"
          className={cn(
            "rounded-full mr-2 px-3 py-1 border",
            !searchParams.filter && "bg-black text-white"
          )}
        >
          전체
        </Link>
        <Link
          href="/community?filter=chat"
          className={cn(
            "rounded-full px-3 py-1 border",
            searchParams.filter == "chat" && "bg-black text-white"
          )}
        >
          자유
        </Link>{" "}
        <Link
          href="/community?filter=question"
          className={cn(
            "rounded-full px-3 py-1 border",
            searchParams.filter == "question" && "bg-black text-white"
          )}
        >
          질문
        </Link>{" "}
        <Link
          href="/community?filter=study"
          className={cn(
            "rounded-full px-3 py-1 border",
            searchParams.filter == "study" && "bg-black text-white"
          )}
        >
          공부
        </Link>
      </div>
      <div className="divide-y mt-2 ">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </Card>
  );
};

export default CommunityPage;
