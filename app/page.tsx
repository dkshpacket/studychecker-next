import { Streak } from "@/components/streak";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <main className="space-y-4">
        <div className="flex justify-between mb-8 px-4 items-center">
          <h1 className="text-4xl italic font-extrabold">
            단붕이 생활
            <br /> 도우미 V1
          </h1>

          <img
            className="h-16 shadow-lg shadow-indigo-100 w-16 rounded-full"
            src="https://avatars.githubusercontent.com/u/31413538?v=4"
            alt="단붕이"
          />
        </div>
        <div className="p-6 border rounded-xl space-y-4 bg-white">
          <div className="flex justify-between">
            <h2 className="font-bold text-gray-600">현재 시각</h2>
            <div className="text-sm text-gray-700">4월 9일 · 10시 37분</div>
          </div>

          <h2 className="text-2xl font-bold">자율학습 3교시</h2>
          <div>
            <div className="h-3 w-full bg-indigo-100 overflow-hidden rounded">
              <div className="h-full w-2/3 bg-indigo-500 rounded"></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-indigo-600">
              <div>9시</div>
              <div>10시</div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border rounded-xl">
          <h2 className="font-bold text-gray-600">학습 통계 데이터</h2>
          <p className="text-gray-700">
            자신의 공부 시간에 대한 다양한 통계를 볼 수 있어요
          </p>

          <button className="bg-white border mt-4 py-2 px-8 text-sm rounded-md">
            확인하기 &rarr;
          </button>
        </div>

        <div className="p-6 border rounded-xl space-y-4 bg-white">
          <h2 className="font-bold text-gray-600">자율학습 스트릭</h2>
          <div className="text-2xl font-bold">현재 10일</div>

          <div
            className={cn(
              "flex flex-wrap items-center max-w-sm justify-between gap-3"
            )}
          >
            <Streak studied> 월 </Streak>
            <Streak studied> 화 </Streak>
            <Streak studied> 수 </Streak>
            <Streak studied> 목 </Streak>
            <Streak future> 금 </Streak>
            <Streak future> 토 </Streak>
          </div>
        </div>

        <div className="p-6 border bg-white rounded-xl gap-2">
          대학수학능력시험
          <div className="flex items-baseline justify-between">
            <div>
              <div className="font-bold text-4xl mt-1">D-670</div>
            </div>
            <div className="text-gray-700">2025년 11월 13일</div>
          </div>
        </div>
      </main>
    </main>
  );
}
