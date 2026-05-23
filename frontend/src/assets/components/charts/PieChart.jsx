import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "10-A", value: 2, color: "#ff6b8a" }, // Pink (Teacher/Danger accent)
  { name: "11-A", value: 3, color: "#a78bfa" }, // Lavender (Secondary accent)
  { name: "12-A", value: 10, color: "#38bdf8" }, // Sky (Info accent)
];

export const PieCustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-24 h-14 flex flex-col py-2 px-2 items-start justify-between bg-black rounded-chip">
        <div className="text-white text-size-md">{payload[0].name}</div>
        <div className="w-full h-fit flex items-center justify-between">
          <div
            className="w-3 h-3 border border-white rounded-xs"
            style={{
              backgroundColor: payload[0].color,
            }}
          />
          <div className="text-size-xs text-muted">
            {payload[0].value} Studets
          </div>
        </div>
      </div>
    );
  }
};

export const PieChartComponent = ({ innerRadiusValue, outerRadiusValue }) => {
  return (
    <ResponsiveContainer width={110} height={110}>
      <PieChart>
        <Tooltip content={<PieCustomTooltip />} />
        <Pie
          data={data}
          innerRadius={innerRadiusValue}
          outerRadius={outerRadiusValue}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {data.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={item.color}
              className="translate-0.5 transition-all duration-(--duration-fast) ease-in crusor-pointer"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
