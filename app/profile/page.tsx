import { Card } from "@/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Info } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: session.user?.id,
    },
  });

  return (
    <div className="space-y-4">
      <div className="header-img -mx-4 w-auto">
        <img
          src="https://static.solved.ac/profile_bg/dksh2023/dksh2023b.jpg"
          className="min-h-24 bg-cover bg-center rounded-lg"
        />
      </div>
      <div className="flex gap-4 flex-wrap sm:flex-nowrap">
        <Card className="flex gap-4 w-full ">
          <Avatar className="h-24 w-24 lg:h-28 lg:w-28  drop-shadow select-none border-2 ">
            <AvatarImage
              className="bg-white"
              src={session?.user?.image as string}
              alt={session?.user?.name || "User"}
            />
            <AvatarFallback className="text-6xl">
              <Skeleton />
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-xl lg:text-2xl mt-2 lg:mt-4">
              {session?.user?.name ?? session?.user?.email}
            </div>

            <div className="text-gray-600 mt-2">2학년 2반</div>
          </div>
        </Card>
        <Card className="max-w-xs  w-full">
          <div className="font-bold text-lg">자습시간 통계</div>

          <div className="text-sm mt-2 grid grid-cols-2">
            <h3 className="font-medium">오늘</h3>
            <div className="text-right">32시간 30분</div>

            <h3 className="font-medium">이번주</h3>
            <div className="text-right">173시간 23분</div>

            <h3 className="font-medium">이번달</h3>
            <div className="text-right">39430시간 36분</div>
          </div>
          <div className="flex justify-between w-full mt-2 items-center ">
            <button className="w-6 h-6 p-1 rounded-full flex items-center justify-center hover:bg-secondary">
              <Info size={12} />
            </button>

            <Button size={"sm"} variant={"ghost"}>
              자세히
            </Button>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-bold">최근 게시물</h2>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default ProfilePage;
