import { cn } from "@/lib/utils";
import { Apple, Award, Frown, LandPlot } from "lucide-react";
import { ReactNode } from "react";

export const Streak = ({ studied, future, children }:{
  studied: boolean;
  future: boolean;
  children:ReactNode
}) => (
  <div className="flex flex-col items-center text-gray-500">
    {children}
    <div
      className={cn(
        "rounded-full mt-1 w-10 h-10 text-xl font-semibold text-gray-500 flex items-center justify-center",
        studied
          ? "bg-blue-500  text-white "
          : future
          ? "bg-gray-100 text-gray-400 "
          : "bg-white text-gray-500 border"
      )}
    >
      {/* {studied || future ? <Check/>: <Frown/>} */}
      {
        studied ?<Award/> :(future? <><LandPlot/></>:<Frown/>)
      }
    </div>
  </div>
);
