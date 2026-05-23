import { use, useState } from "react";
import { LineChartComponent } from "../charts/LineChart";

export const MainWidgetCardTwo = () => {
  const [_class, setClass] = useState("");
  const handleClass = (e) => {
    setClassName(e);
  };
  return (
    <div className="w-full h-full flex flex-col bg-transparent">
      <div className="w-full h-fit flex items-center justify-between">
        <div className="ml-4 pb-3">
          <div className="text-size-md text-text font-bold">
            Last 5-Day Attendance
          </div>
          <div className="text-size-sm-2 text-muted-2">
            Class . Present/Late/Absent
          </div>
        </div>
        <div className="flex gap-x-1">
          {/* {classArray.map((item)=>{

          })} */}
        </div>
      </div>
      <LineChartComponent />
    </div>
  );
};
