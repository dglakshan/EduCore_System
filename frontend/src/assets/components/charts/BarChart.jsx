import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "../hooks/useTheme";

const data = [
  { name: "10-A", Avg: 44, color: "#FF6B8A" },
  { name: "11-A", Avg: 26, color: "#A78BFA" },
  { name: "12-A", Avg: 80, color: "#38BDF8" },
];

export const BarCustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-24 h-14 flex flex-col py-2 px-2 items-start justify-between bg-overlay backdrop:backdrop-blur-3xl rounded-chip">
        <div className="text-white text-size-md">{payload[0].payload.name}</div>
        <div className="w-full h-fit flex items-center justify-between">
          <div
            className="w-3 h-3 border border-white rounded-xs"
            style={{
              backgroundColor: payload[0].payload.color,
            }}
          />
          <div className="text-size-base text-muted">
            Avg: {payload[0].payload.Avg}%
          </div>
        </div>
      </div>
    );
  }
};

export const BarChartComponent = () => {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%" f>
      <BarChart
        data={data}
        style={{ outline: "none" }}
        accessibilityLayer={false}
        tabIndex={-1}
      >
        {theme == "dark" && <CartesianGrid vertical={false} stroke="#15151d" />}
        <XAxis axisLine={false} tickLine={false} fontSize={11} dataKey="name" />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          fontSize={11}
        />
        <Tooltip cursor={false} style={{}} content={<BarCustomTooltip />} />
        <Bar
          style={{ outline: "none" }}
          accessibilityLayer={false}
          tabIndex={-1}
          dataKey="Avg"
          radius={[10, 10, 0, 0]}
          barSize={130}
        >
          {data.map((item, index) => (
            <Cell key={`item-${index}`} fill={item.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
