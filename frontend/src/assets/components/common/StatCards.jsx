import { useEffect, useState } from "react";
import { Badge } from "./Badge";
import {
  CalendarIcon,
  CheckIcon,
  CloseIcon,
  LateIcon,
  TimerIcon,
} from "./Icons";
import { PieChartComponent } from "../charts/PieChart";

export const StatCardOneConnent = ({
  allCount,
  totolStudents,
  present,
  late,
  absent,
}) => {
  const P = present || 0.001;
  const L = late || 0.001;
  const A = absent || 0.001;

  const [gridWidths, setGridWidths] = useState(`0.001fr ${P}fr ${L}fr`);

  useEffect(() => {
    const timmer = setTimeout(() => setGridWidths(`${P}fr ${L}fr ${A}fr`), 100);
    return () => clearTimeout(timmer);
  }, [present, late, absent, totolStudents]);
  return (
    <div className="w-full h-full flex flex-col bg-transparent">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline">
          <span className="text-size-2xl font-extrabold text-text-2">
            {allCount}
          </span>
          <span className="text-size-lg font-medium text-muted-2">
            /{totolStudents}
          </span>
        </div>
        <div className="flex items-center justify-center rounded-btn p-2.5 bg-teacher-muted text-accent-pink">
          <CalendarIcon />
        </div>
      </div>
      <div className="w-full h-fit flex items-center text-size-sm-2 text-muted-2 justify-start">
        Today's Attendance
      </div>
      <div className="flex items-start gap-x-1 mt-1">
        <Badge
          icon={<CheckIcon size={10} />}
          number={present}
          text={"Present"}
          bg_color={"bg-att-present-muted"}
          text_color={"text-att-present"}
        />
        <Badge
          icon={<TimerIcon size={10} />}
          number={late}
          text={"Late"}
          bg_color={"bg-att-late-muted"}
          text_color={"text-att-late"}
        />
        <Badge
          icon={<CloseIcon size={10} />}
          number={absent}
          text={"Absent"}
          bg_color={"bg-att-absent-muted"}
          text_color={"text-att-absent"}
        />
      </div>
      <div
        className="w-full grid gap-x-0.5 h-[4.5px] bg-transparent mt-2"
        style={{
          gridTemplateColumns: gridWidths,
          transition: "grid-template-columns 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="h-full bg-att-present rounded-card " />

        <div className="h-full bg-att-late rounded-card " />
        <div className="h-full bg-att-absent rounded-card " />
      </div>
    </div>
  );
};

export const StatCardTwoConnent = ({ attendanceAvg }) => {
  const [fillBar, setFillBar] = useState("0");

  useEffect(() => {
    const timmer = setTimeout(() => setFillBar(attendanceAvg), 100);
    return () => clearTimeout(timmer);
  }, [attendanceAvg]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-size-3xl text-att-present font-extrabold">
            {attendanceAvg}%
          </div>
          <div className="text-size-sm-2 text-muted-2 leading-6 ">
            Attendance Rate
          </div>
        </div>
        <div className="flex items-center justify-center rounded-btn p-2.5 bg-student-muted text-att-present">
          <CalendarIcon />
        </div>
      </div>
      <div className="text-size-xs text-muted-2">↑ 3% from last week</div>
      <div className="w-full h-[4.5px] bg-surface-3 rounded-card">
        <div
          className={`bg-att-present h-full rounded-card`}
          style={{
            width: `${fillBar}%`,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
};

export const StatCardThreeConnent = ({
  nextClassTime,
  _class,
  roomNumber,
  subject,
  duration,
  totolStudents,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-1">
      <div className="w-full flex items-baseline justify-between">
        <div className="flex flex-col">
          <span className="text-size-3xl text-att-late font-extrabold">
            {nextClassTime}
          </span>
          <span className="text-size-sm-2 text-muted-2 leading-2 ml-px">
            Next Class
          </span>
        </div>
        <div className="flex items-center justify-center rounded-btn p-2.5 bg-att-late-muted text-att-late">
          <LateIcon />
        </div>
      </div>
      <div className="text-text-2 font-medium text-size-sm-2 mt-2.5">
        Class {_class}
      </div>
      <div className="text-size-xs text-muted-2">
        {subject}.{roomNumber}
      </div>
      <div className="flex gap-x-1">
        <div className="w-fit h-fit rounded-btn text-att-late px-1 text-size-xs bg-att-late-muted">
          In {duration}
        </div>
        <div className="text-size-xs text-muted-2">
          {totolStudents} Students
        </div>
      </div>
    </div>
  );
};

export const StatCardFoureConnent = ({
  totolStudents,
  classOneTotalStudents,
  classOneName,
  classTowTotalStudents,
  classTwoName,
  classThreeTotalStudents,
  classThreeName,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <div className="w-full flex items-baseline justify-between ">
        <span className="text-size-base font-bold text-text-2">
          Students by Class
        </span>
        <span className="text-size-xs text-muted-2">Total {totolStudents}</span>
      </div>
      <div className="w-full h-full flex gap-x-1">
        <div className="h-full flex items-center justify-center w-full ">
          <div className="w-full h-full relative">
            <PieChartComponent innerRadiusValue={35} outerRadiusValue={50} />
            <span className="flex flex-col items-center justify-center absolute top-8.5 left-8 ">
              <span className="text-size-lg font-extrabold text-text-2">6</span>
              <span className="text-muted-2 text-size-sm-2 leading-4">
                Students
              </span>
            </span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-0.5">
          <div className="flex items-center justify-center gap-x-3">
            <div className="w-2.5 h-2.5 rounded-xs bg-accent-pink" />
            <div className="text-size-sm-2 font-semibold">{classOneName}</div>
            <div className="ml-5 text-size-xs">
              {classOneTotalStudents} Students
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-3">
            <div className="w-2.5 h-2.5 rounded-xs bg-accent" />
            <div className="text-size-sm-2 font-semibold">{classTwoName}</div>
            <div className="ml-5 text-size-xs">
              {classTowTotalStudents} Students
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-3">
            <div className="w-2.5 h-2.5 rounded-xs bg-accent-sky" />
            <div className="text-size-sm-2 font-semibold">{classThreeName}</div>
            <div className="ml-5 text-size-xs">
              {classThreeTotalStudents} Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
