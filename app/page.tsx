import { Streak } from "@/components/streak";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
// import { Clock } from "lucide-react";
import Image from "next/image";
import Quests from "./Quests";
import TimeInfo from "./TimeInfo";
import Calandar from "./Calendar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main>
      <main className="space-y-4">
        <TimeInfo />

        <div className="p-6 bg-white   rounded-xl">
          <h2 className="font-bold ">학습 통계 데이터</h2>
          <p className="text-gray-700">
            자신의 공부 시간에 대한 다양한 통계를 볼 수 있어요
          </p>

          <button className="bg-white  border mt-4 py-2 px-8 text-sm rounded-md">
            확인하기 &rarr;
          </button>
        </div>

        <div className="p-6   rounded-xl space-y-4 bg-white">
          <h2 className="font-bold text-gray-600">자율학습 스트릭</h2>
          <div className="text-2xl font-bold">현재 0일</div>

          <div
            className={cn(
              "flex flex-wrap items-center max-w-sm justify-between gap-3"
            )}
          >
            <Streak studied> 월 </Streak>
            <Streak studied> 화 </Streak>
            <Streak> 수 </Streak>
            <Streak future> 목 </Streak>
            <Streak future> 금 </Streak>
            <Streak future> 토 </Streak>
          </div>
        </div>

        <Quests />

        <Calandar />
      </main>
    </main>
  );
}

export const metadata = {
  title: "단붕이 생활 도우미",
};
