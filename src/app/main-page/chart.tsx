// ChartComponents.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface CalendarGridProps {
  date: Date;
}

interface ChartSectionProps {
  selected: string;
  date: Date;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ date }) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const sampleDates = [
    new Date(date.getFullYear(), date.getMonth(), 5),
    new Date(date.getFullYear(), date.getMonth(), 10),
    new Date(date.getFullYear(), date.getMonth(), 15),
  ];

  const isHighlighted = (day: Date) => {
    return sampleDates.some(
      (sampleDate) =>
        sampleDate.getDate() === day.getDate() &&
        sampleDate.getMonth() === day.getMonth() &&
        sampleDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="bg-white p-2 rounded-md shadow w-full max-w-3xl">
      <div
        className="grid grid-cols-7 gap-x-4 gap-y-1"
        style={{ rowGap: "4px" }}
      >
        {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day) => (
          <div
            key={day}
            className="text-center font-medium p-2 text-gray-800"
            style={{ minWidth: "50px" }}
          >
            {day}
          </div>
        ))}
        {getDaysInMonth(date).map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 ${
              day
                ? `cursor-pointer rounded-md ${
                    isHighlighted(day)
                      ? "bg-teal-200 text-green-800"
                      : "text-gray-500 hover:bg-gray-100"
                  }`
                : ""
            }`}
            style={{ minWidth: "50px" }}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DurationChart: React.FC = () => {
  const data = [
    { month: "T1", duration: 120 },
    { month: "T2", duration: 150 },
    { month: "T3", duration: 180 },
    { month: "T4", duration: 140 },
    { month: "T5", duration: 160 },
    { month: "T6", duration: 190 },
    { month: "T7", duration: 200 },
    { month: "T8", duration: 170 },
    { month: "T9", duration: 155 },
    { month: "T10", duration: 165 },
    { month: "T11", duration: 185 },
    { month: "T12", duration: 175 },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow h-full">
      <BarChart width={800} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#14b8a6" name="Phút" />
      </BarChart>
    </div>
  );
};

export const CaloriesChart: React.FC = () => {
  const data = [
    { month: "T1", calories: 12000 },
    { month: "T2", calories: 15000 },
    { month: "T3", calories: 18000 },
    { month: "T4", calories: 14000 },
    { month: "T5", calories: 16000 },
    { month: "T6", calories: 19000 },
    { month: "T7", calories: 20000 },
    { month: "T8", calories: 17000 },
    { month: "T9", calories: 15500 },
    { month: "T10", calories: 16500 },
    { month: "T11", calories: 18500 },
    { month: "T12", calories: 17500 },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow h-full">
      <BarChart width={800} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="calories" fill="#14b8a6" name="Calo" />
      </BarChart>
    </div>
  );
};

export const ChartSection: React.FC<ChartSectionProps> = ({
  selected,
  date,
}) => {
  const renderChart = () => {
    switch (selected) {
      case "Lịch":
        return <CalendarGrid date={date} />;
      case "Thời lượng":
        return <DurationChart />;
      case "Calo":
        return <CaloriesChart />;
      default:
        return null;
    }
  };

  return <div className="mt-6 flex justify-center">{renderChart()}</div>;
};
