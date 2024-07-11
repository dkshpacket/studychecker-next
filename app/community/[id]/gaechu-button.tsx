"use client";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

export const GaechuButton = ({ gaechued }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="mx-auto group  bg-dankook text-white rounded-full flex items-center justify-center flex-col aspect-square w-16 h-16 text-center "
    >
      <svg
        className="mx-auto h-6"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="42.04825"
        height="40.2"
        viewBox="0,0,42.04825,40.2"
      >
        <g transform="translate(-218.96759,-158.9)">
          <g
            className={cn(
              gaechued
                ? "fill-yellow-400"
                : "fill-white group-hover:fill-yellow-200"
            )}
            data-paper-data='{"isPaintingLayer":true}'
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
          >
            <path d="M260.2,176.7l-8.2,8l1.8,11.3c0.2,1 -0.2,2 -1,2.6c-0.4,0.3 -1,0.5 -1.5,0.5c-0.4,0 -0.8,-0.1 -1.2,-0.3l-10.1,-5.3l-10.2,5.3c-0.4,0.2 -0.8,0.3 -1.2,0.3c-0.5,0 -1,-0.2 -1.5,-0.5c-0.8,-0.6 -1.2,-1.6 -1,-2.6l1.9,-11.2l-8.2,-8c-0.8,-0.7 -1,-1.7 -0.7,-2.7c0.3,-1 1.1,-1.7 2.1,-1.8l11.3,-1.6l5.1,-10.3c0.5,-0.9 1.4,-1.5 2.4,-1.5c1,0 2,0.6 2.4,1.5l5.1,10.3l11.3,1.6c1,0.2 1.8,0.8 2.1,1.8c0.3,0.9 0,2 -0.7,2.6z" />
          </g>
        </g>
      </svg>
      <span className="text-xs mt-1">개발자</span>
    </button>
  );
};
