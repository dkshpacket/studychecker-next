'use client'
import moment from 'moment'

const Calender = () => (
    <div className="p-8   bg-white rounded-xl gap-2">
        <h2 className="font-bold text-gray-600">2025학년도 대학수학능력시험</h2>
        <div className="flex items-baseline justify-between">
            <div>
                <div className="font-bold text-4xl mt-1">D-
                    {Math.ceil(moment.duration(moment('2024-11-14').diff(moment())).asDays())}
                </div>
            </div>
            <div className="text-gray-700">2024년 11월 14일</div>
        </div>
    </div>
)

export default Calender