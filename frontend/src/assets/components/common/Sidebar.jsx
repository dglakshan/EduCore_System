import { useEffect, useState } from "react";
import { use } from "react";
import {
  AttendanceIcon,
  CalendarIcon,
  DashboardIcon,
  EduCenterLogo,
  ResultsIcon,
  StudentsIcon,
  TimetableIcon,
} from "./Icons";
import { NavLink } from "react-router-dom";

const teacherNavItems = [
  {
    icon: <DashboardIcon size={16} />,
    name: "Dashboard",
    to: "/teacherportal/dashboard",
  },
  {
    icon: <StudentsIcon size={16} />,
    name: "My Students",
    to: "/teacherportal/mystudents",
  },
  {
    icon: <AttendanceIcon size={16} />,
    name: "Mark Attendance",
    to: "/teacherportal/markattendance",
  },
  {
    icon: <ResultsIcon size={16} />,
    name: "Enter Results",
    to: "/teacherportal/enterresult",
  },
  {
    icon: <CalendarIcon size={16} />,
    name: "My Schedule",
    to: "/teacherportal/myschedule",
  },
];

export const TeacherSideBar = () => {
  return (
    <div className="w-56 h-full flex flex-col bg-surface">
      <div className="h-16 border-b px-2 py-4 flex items-center border-border">
        <EduCenterLogo />
      </div>

      <div className=" w-full h-full flex flex-col gap-y-1 items-center px-3 pt-4">
        <div className="w-full h-52 rounded-card border border-teacher-border flex flex-col gap-y-2 items-center justify-center p-4 bg-teacher-muted text-muted-2">
          <div className="h-12 w-12 bg-gradient-brand rounded-avatar"></div>
          <div className="text-xs font-semibold capitalize">
            Ms. Malini Pieris
          </div>
          <div className="text-xs text-text-2  capitalize flex flex-col items-center justify-center">
            <span> Mathematics · Full-time</span>
            <span>TCH-001</span>
          </div>
          <div className="h-px w-full bg-border" />
          <div className="w-full h-fit flex items-center justify-between text-xs">
            <div className="flex flex-col items-center justify-center">
              <div className="text-teacher font-extrabold text-size-md ">3</div>
              <div className="text-text-2">classes</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-teacher font-extrabold text-size-md ">
                96
              </div>
              <div className="text-text-2">Students</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-teacher font-extrabold text-size-md ">
                4.9
              </div>
              <div className="text-text-2">Rating</div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit text-[12.5px] text-muted font-medium mt-4 px-1.5">
          main menu
        </div>
        {teacherNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `${isActive ? "bg-teacher-muted text-teacher font-medium" : "text-muted-2 hover:bg-surface-2 hover:text-text-2"} w-full h-9 mx-2 rounded-icon text-size-base transition-all duration-(--duration-fast) ease-in `
            }
          >
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center justify-start gap-x-1 px-3 overflow-hidden">
                {isActive && (
                  <div className="absolute -right-px h-1/2 w-1 bg-teacher rounded-btn" />
                )}
                <div>{item.icon}</div>
                <div className="pb-px">{item.name}</div>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export const TeacherSideBarSkeleton = () => {
  return (
    <div className="w-56 h-full flex flex-col bg-surface">
      <div className="h-16 border-b px-2 py-4 flex items-center border-border">
        <EduCenterLogo />
      </div>

      <div className=" w-full h-full flex flex-col gap-y-1 items-center px-3 pt-4 animate-pulse">
        <div className="w-full h-52 rounded-card  flex flex-col gap-y-2 items-center justify-center p-4 bg-teacher-muted animate-pulse"></div>
        <div className="h-8.75"></div>
        {teacherNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className="bg-teacher-muted w-full h-9 rounded-icon animate-pulse"
          ></NavLink>
        ))}
      </div>
    </div>
  );
};
