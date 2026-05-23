import { useEffect, useState } from "react";
import {
  CalendarIcon,
  CheckIcon,
  PeriodIcon,
  StarIcon,
  StudentsIcon,
} from "../assets/components/common/Icons";

import { teacherData } from "../assets/components/services/teacherService";
import { use } from "react";
import { useTeacherLoading } from "../assets/components/hooks/useTeacherLoad";
import { StatCardContainer } from "../assets/components/common/StatCardContainer";
import {
  StatCardFoureConnent,
  StatCardOneConnent,
  StatCardThreeConnent,
  StatCardTwoConnent,
} from "../assets/components/common/StatCards";
import { PieChart } from "recharts";
import { MainWidgetContainer } from "../assets/components/common/MainWidgetContainer";
import { BarChartComponent } from "../assets/components/charts/BarChart";
import { MainWidgetCardOne } from "../assets/components/common/MainWidgetCard0ne";
import { MainWidgetCardTwo } from "../assets/components/common/MainWidgetCardTwo";

export const AdminDashBoard = () => {
  return (
    <section>
      <div>Admin Dashborad</div>
    </section>
  );
};

export const TeacherDashBoard = () => {
  const { loading, setLoading } = useTeacherLoading(true);
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    const getTeacher = async () => {
      try {
        const response = await teacherData();
        console.log(response.dashBoardData);
        setTeacher(response.dashBoardData);
      } catch {
        console.log("Teacher fetch error");
      } finally {
        setLoading(false);
      }
    };
    getTeacher();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-grid-gap bg-bg">
      <div className="grid h-fit grid-cols-2 lg:grid-cols-4 gap-grid-gap ">
        <StatCardContainer
          fromColor={"from-att-absent-muted"}
          viaColor={"via-att-absent"}
          toColor={"to-att-absent-muted"}
          content={
            <StatCardOneConnent
              allCount={52}
              totolStudents={60}
              present={10}
              late={30}
              absent={20}
            />
          }
        />
        <StatCardContainer
          fromColor={"from-att-present-muted"}
          viaColor={"via-att-present"}
          toColor={"to-att-present-muted"}
          content={<StatCardTwoConnent attendanceAvg={29} />}
        />

        <StatCardContainer
          fromColor={"from-att-late-muted"}
          viaColor={"via-att-late"}
          toColor={"to-att-late-muted"}
          content={
            <StatCardThreeConnent
              nextClassTime={"10.30"}
              roomNumber={106}
              _class={"11 A"}
              subject={"Mathematics"}
              duration={"1h 30m"}
              totolStudents={20}
            />
          }
        />
        <StatCardContainer
          fromColor={"from-admin-muted"}
          viaColor={"via-admin"}
          toColor={"to-att-admin-muted"}
          content={<StatCardFoureConnent totolStudents={20} />}
        />
      </div>
      <div className="w-full h-[350px] grid grid-cols-1 gap-grid-gap md:grid-cols-2">
        <MainWidgetContainer content={<MainWidgetCardOne termNumber={2} />} />
        <MainWidgetContainer
          content={<MainWidgetCardTwo className={"10-A"} />}
        />
      </div>
    </div>
  );
};
