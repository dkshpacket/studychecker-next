"use client";
import { Progress } from "@/components/ui/progress";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";

const timeTable = {
  1: [17, 19],
  2: [19, 21],
  3: [21, 22],
  0: ["용인", "서울특별"],
};

const TimeInfo = () => {
  const [timeText, setTimeText] = useState(
    moment().format("M월 D일 • H시 m분")
  );
  const [period, setPeriod] = useState<number>(() => {
    const hour = moment().hour();
    if (timeTable[1][0] <= hour && hour < timeTable[1][1]) {
      return 1;
    } else if (timeTable[2][0] <= hour && hour < timeTable[2][1]) {
      return 2;
    } else if (timeTable[3][0] <= hour && hour < timeTable[3][1]) {
      return 3;
    } else {
      return 0;
    }
  });
  const [progress, setProgress] = useState(() => {
    const hour = moment().hour();
    const hourplusmin = hour * 60 + moment().minutes();

    if (timeTable[1][0] <= hour && hour < timeTable[1][1]) {
      return ((hourplusmin - timeTable[1][0] * 60) / (2 * 60)) * 100;
    } else if (timeTable[2][0] <= hour && hour < timeTable[2][1]) {
      return ((hourplusmin - timeTable[2][0] * 60) / (2 * 60)) * 100;
    } else if (timeTable[3][0] <= hour && hour < timeTable[3][1]) {
      return ((hourplusmin - timeTable[3][0] * 60) / (1 * 60)) * 100;
    } else {
      return 0;
    }
  });

  const update = useCallback(() => {
    setTimeText(moment().format("M월 D일 • H시 m분"));

    const hour = moment().hour();
    const hourplusmin = hour * 60 + moment().minutes();

    if (timeTable[1][0] <= hour && hour < timeTable[1][1]) {
      setPeriod(1);

      setProgress(((hourplusmin - timeTable[1][0] * 60) / (2 * 60)) * 100);
    } else if (timeTable[2][0] <= hour && hour < timeTable[2][1]) {
      setPeriod(2);

      setProgress(((hourplusmin - timeTable[2][0] * 60) / (2 * 60)) * 100);
    } else if (timeTable[3][0] <= hour && hour < timeTable[3][1]) {
      setPeriod(3);

      setProgress(((hourplusmin - timeTable[3][0] * 60) / (1 * 60)) * 100);
    } else {
      setPeriod(0);
    }
  }, []);

  useEffect(() => {
    update();
    setInterval(() => {
      update();
    }, 1000);
  }, []);

  return (
    <div className="p-6   rounded-xl space-y-4 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold  text-xl  ">현재 시각</h2>
      </div>

      <h2 className="text-2xl font-bold flex justify-between">
        <span>
          자율학습{" "}
          <button onClick={() => period == 0 && setProgress((p) => p + 1)}>
            {period}
          </button>
          교시{" "}
        </span>{" "}
        <span className="text-gray-500 hidden lg:block font-normal text-sm">
          {period == 0 && "현재는 자율학습 운영시간이 아닙니다요"}
        </span>{" "}
      </h2>

      <div>
        <Progress
          value={progress}
          className="w-full bg-blue-100 h-3 rounded-md "
        />
        <div className="flex justify-between mt-2 text-sm text-blue-600">
          <div>{timeTable[period][0]}시</div>
          <div>{timeTable[period][1]}시</div>
        </div>
      </div>
      {/*06월 13일 · 09시 53분*/}
      <div className="  text-dankook" suppressHydrationWarning>
        {timeText}
      </div>
    </div>
  );
};

export default TimeInfo;
