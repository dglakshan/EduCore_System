import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "../hooks/useTheme";

const attendanceData = [
  { day: "Mon 14", present: 24, late: 4, absent: 2 },
  { day: "Tue 15", present: 22, late: 6, absent: 1 },
  { day: "Wed 16", present: 25, late: 4, absent: 3 },
  { day: "Thu 17", present: 35, late: 2, absent: 1 },
  { day: "Fri 18", present: 43, late: 3, absent: 9 },
];

export const LineChartComponent = () => {
  const { theme } = useTheme();
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={attendanceData}>
        <defs>
          <linearGradient id="colorPresent" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="5%" stopColor="#3dd9a4" stopOpacity={1} />
            <stop offset="95%" stopColor="#3dd9a4" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        {theme == "dark" && <CartesianGrid vertical={false} stroke="#15151d" />}

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          fontSize={10}
          tick={{ dy: 5 }}
          style={{ letterSpacing: "0.1px" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ dx: -4 }}
          fontSize={11}
        />
        <Tooltip trigger="hover" shared={true} cursor={false} />
        <Area
          type="monotone"
          dataKey="present"
          fill="url(#colorPresent)"
          stroke="#3dd9a4"
          strokeWidth={3}
          isAnimationActive={true}
          animationDuration={1}
          animationEasing="ease"
          activeDot={false}
          dot={(props) => {
            const { cx, cy, index } = props;
            return (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r={5}
                fill="#3dd9a4"
                stroke="#000000"
                strokeWidth={2}
                style={{
                  outline: "none",
                  transition: "all 0.3s ease",
                  pointerEvents: "all",
                }}
                onMouseEnter={(e) => e.target.setAttribute("r", "8")}
                onMouseLeave={(e) => e.target.setAttribute("r", "5")}
              />
            );
          }}
          style={{ outline: "none" }}
          tabIndex={-1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
