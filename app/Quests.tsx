import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

const Quests = () => (


    <div className="p-6   bg-white rounded-xl gap-2">
        <h2 className="font-bold text-gray-600 flex items-center gap-1 ">
            데일리 단붕 퀘스트
        </h2>

        <div className="flex flex-col divide-y gap-2 mt-2 px-2">
            <Quest title="출석하기" done>
                접속하기
            </Quest>

            <Quest title="오장원 숭배하기">
                오멘
            </Quest>
        </div>
    </div>
)



const Quest: React.FC<{ title: string, children: ReactNode, done?: boolean }> = ({
    title,
    children,
    done = false
}) => (
    <div className=" flex gap-8 justify-between py-3 ">
        <div className="">
            <span className="font-bold">{title}</span>
            <span className="text-xs ml-4">{children}
            </span>
        </div>

        <div>
            <CheckCircle className={done ? " text-blue-500" : 'text-gray-400'} />
        </div>
    </div>
)

export default Quests