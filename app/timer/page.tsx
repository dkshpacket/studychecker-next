"use client"

import { useEffect, useState } from "react"

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(0) // in secs
    const [timeoutId, setTimeoutId] = useState<number | null>(null)


    const interval = 1000; // milliseconds
    let expected = Date.now() + interval;

    function step() {
        const dt = Date.now() - expected; // Calculate drift time
        // Do what needs to be done (e.g., update state, perform actions)
        setTimeLeft(prevTime => prevTime - 1); // Update elapsed time in seconds

        expected += interval;
        window.setTimeout(step, Math.max(0, interval - dt)); // Adjust interval based on drift
    }
    const startTimer = () => {
        const id = window.setTimeout(step, interval);
        setTimeoutId(id);
    };


    const handleClear = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeLeft(0);
        expected = Date.now() + interval;
    };

    return (
        <div>
            <h1 className="font-bold text-6xl text-center text-dankook transition hover:rotate-180 w-fit mx-auto  font-red-500">
                단붕타임
            </h1>


            <div className="text-9xl font-extrabold text-center mt-4">
                {Math.floor(timeLeft / 3600)}시간    {Math.floor(timeLeft / 60 % 60)}분 {Math.floor(timeLeft % 60)}초
            </div>
            <div className="flex gap-4 text-4xl mt-12 mx-auto justify-center">
                <button onClick={() => {
                    setTimeLeft(t => t + 60)


                }} className=" w-40 border  transition hover:scale-150 hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4">
                    1분
                </button>

                <button onClick={() => {
                    setTimeLeft(t => t + 600)


                }} className="w-40 border  transition hover:scale-150 hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4">
                    10분
                </button>

                <button onClick={() => {
                    setTimeLeft(t => t + 3600)


                }} className="w-40 border transition hover:scale-150  hover:bg-neutral-200 hover:shadow-xl bg-neutral-100 px-8 rounded-full font-bold p-4">
                    1시간
                </button>

            </div>
            <button onClick={() => {
                startTimer()

            }} className=" mt-16 mx-auto block w-50  border transition border-green-300 hover:scale-150 hover:bg-green-300 hover:shadow-2xl bg-green-200 px-12 rounded-full text-7xl font-bold p-6">
                {timeoutId == null ? '고고씽' : '타임스또뿌!'}
            </button>

            <button onClick={() => {
                handleClear()

            }} className="mt-4 hover:text-6xl hover:text-white bg-red-500 w-full rounded-full">
                retry
            </button>
        </div>
    )
}
export default Timer