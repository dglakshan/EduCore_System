import { BarChartComponent } from "../charts/BarChart";

export const MainWidgetCardOne = ({ termNumber }) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-2 bg-transparent">
      <div className="flex flex-col pl-7">
        <div className="text-size-md font-bold text-text-2">
          Class Performance
        </div>
        <div className="text-size-sm text-muted-2">
          Average scoues by class :{" "}
          <span className="text-size-sm-2">Term {termNumber}</span>
        </div>
      </div>
      <BarChartComponent />
    </div>
  );
};
