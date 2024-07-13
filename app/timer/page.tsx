"use client";

import { Card } from "@/components/card";
import { useEffect, useMemo, useState } from "react";
import { createTimeModel, useTimeModel } from "react-compound-timer";
const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);

  const timer = useMemo(
    () =>
      createTimeModel({
        initialTime: secondsLeft * 1000 + 999,
        direction: "backward",
        startImmediately: false,
      }),
    []
  );

  const { value, start, stop, reset } = useTimeModel(timer);

  return (
    <Card>
      <h1 className="font-bold text-2xl transition hover:rotate-180 w-fit font-red-500">
        타이머
      </h1>

      <div className="text-4xl font-extrabold tabular-nums text-center mt-4 whitespace-nowrap">
        {value.h}시간 {value.m}분 {value.s}초
      </div>

      <div className="flex gap-4 text-4xl mt-12 mx-auto justify-center">
        <button
          onClick={() => {
            setSecondsLeft((t) => {
              timer.changeTime(t * 1000 + 60 * 1000 + 999);
              return t + 60;
            });
          }}
          className=" w-40 border  transition hover:scale-150 hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4"
        >
          1분
        </button>

        <button
          onClick={() => {
            setSecondsLeft((t) => {
              timer.changeTime(t * 1000 + 10 * 60 * 1000 + 999);
              return t + 10 * 60;
            });
          }}
          className="w-40 border  transition hover:scale-150 hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4"
        >
          10분
        </button>

        <button
          onClick={() => {
            setSecondsLeft((t) => {
              timer.changeTime(t * 1000 + 60 * 60 * 1000 + 999);
              return t + 60 * 60;
            });
          }}
          className="w-40 border transition hover:scale-150  hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4"
        >
          1시간
        </button>
      </div>
      {secondsLeft != 0 && (
        <button
          onClick={() => {
            start();
          }}
          className=" mt-16 mx-auto block w-50  border transition border-green-300 hover:scale-150 hover:bg-green-300 hover:shadow-2xl bg-green-200 px-12 rounded-full text-7xl font-bold p-6"
        >
          {secondsLeft != 0 ? "고고씽" : "타임스또뿌!"}
        </button>
      )}

      <button
        onClick={() => {
          setSecondsLeft(0);
          stop();
          reset();
        }}
        className="mt-4 hover:text-2xl hover:text-white bg-red-500 w-full rounded-full"
      >
        AC
      </button>
    </Card>
  );
};
export default Timer;
