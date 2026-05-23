import { Route, Routes, useLocation } from "react-router-dom";

import { TopBar } from "../assets/components/common/Topbar";
import { TeacherDashBoard } from "./Dashboard";
import { useEffect, useState } from "react";
import {
  TeacherSideBar,
  TeacherSideBarSkeleton,
} from "../assets/components/common/Sidebar";
import { ThemeSwitch } from "../assets/components/common/RoleLoginComponets/Theme/ThemeSwitch";
import { useTeacherLoading } from "../assets/components/hooks/useTeacherLoad";
// import { useAutch } from "../assets/components/hooks/useAuth";

const navItems = [
  { to: "/teacherportal/dashboard", name: "Dashboard" },
  { to: "/teacherportal/mystudents", name: "My Students" },
  { to: "/teacherportal/markattendance", name: "Mark Attendance" },
  { to: "/teacherportal/enterresult", name: "Enter Results" },
  { to: "/teacherportal/myschedule", name: "My Schedule" },
];

export const TeacherPortal = () => {
  const [name, setName] = useState("Dashboard");
  const { loading, setLoading } = useTeacherLoading(true);
  // const { user, setUser, loading } = useAutch();

  const location = useLocation();
  useEffect(() => {
    const currentItem = navItems.find((item) => item.to === location.pathname);
    if (currentItem) {
      setName(currentItem.name);
    }
  }, [location.pathname]);
  return (
    <div className="w-full flex min-h-screen bg-bg ">
      <div className="w-fit h-full hidden lg:block fixed left-0 transition-all duration-(--duration-slow) ease-in">
        {loading ? <TeacherSideBarSkeleton /> : <TeacherSideBar />}
      </div>
      <div className="w-full h-full lg:pl-56">
        <div className="w-full h-fit sticky z-50 top-0">
          <TopBar name={name} />
        </div>
        <div className="w-full min-h-screen p-4 ">
          <Routes>
            <Route path="/dashboard" element={<TeacherDashBoard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
