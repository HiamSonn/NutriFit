"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChartSection } from "./chart";
export default function MainPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("Lịch");
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatMonthYear = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const handleYearChange = (increment) => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + increment);
    setDate(newDate);
  };

  const handleMonthSelect = (monthIndex) => {
    const newDate = new Date(date);
    newDate.setMonth(monthIndex);
    setDate(newDate);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-4 px-20">
      {/* Header */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex-grow px-4 py-2 border border-black rounded-lg flex items-center justify-center gap-6 hover:bg-gray-50"
      >
        <span className="text-black">{formatMonthYear(date)}</span>
        <Calendar className="h-4 w-4 text-black" />
      </button>

      {isOpen && (
        <div
          ref={pickerRef}
          className="absolute top-12 left-0 bg-white text-black border border-black rounded-lg shadow-lg p-4 z-50 min-w-[280px]"
        >
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleYearChange(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              &#8592;
            </button>
            <span className="font-medium">{date.getFullYear()}</span>
            <button
              onClick={() => handleYearChange(1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              &#8594;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => (
              <div
                key={month}
                className={`text-center p-2 cursor-pointer rounded-md hover:bg-gray-100 ${
                  index === date.getMonth()
                    ? "bg-black text-white hover:bg-gray-800"
                    : "text-black"
                }`}
                onClick={() => handleMonthSelect(index)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <nav className="flex justify-between space-x-8 mt-6 text-lg px-40">
        <button
          onClick={() => setSelected("Lịch")}
          className={`text-black hover:text-teal-600 focus:text-teal-600 focus:font-bold active:text-teal-600 active:font-bold ${
            selected === "Lịch" ? "text-teal-600 font-bold" : ""
          }`}
        >
          Lịch
        </button>
        <button
          onClick={() => setSelected("Thời lượng")}
          className={`text-black hover:text-teal-600 focus:text-teal-600 focus:font-bold active:text-teal-600 active:font-bold ${
            selected === "Thời lượng" ? "text-teal-600 font-bold" : ""
          }`}
        >
          Thời lượng
        </button>
        <button
          onClick={() => setSelected("Calo")}
          className={`text-black hover:text-teal-600 focus:text-teal-600 focus:font-bold active:text-teal-600 active:font-bold ${
            selected === "Calo" ? "text-teal-600 font-bold" : ""
          }`}
        >
          Calo
        </button>
      </nav>

      {/* Main Content */}
      <main className="mt-6">
        {/* Placeholder for Chart */}
        <ChartSection selected={selected} date={date} />

        {/* Weekly History */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-teal-600 mb-4">
            Lịch sử hàng tuần
          </h2>
          <div className="bg-white shadow-md rounded-md p-8">
            {/* History Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <div className="w-full space-y-3">
                  {/* Nhóm đầu tiên */}
                  <div className="px-4">
                    <h3 className="font-medium text-black">
                      17 Th11 - 23 Th11
                    </h3>
                    <p className="text-gray-500 text-sm">
                      5 lần tập · 2 công thức yêu thích
                    </p>
                  </div>

                  {/* Nhóm thứ hai với hình ảnh */}
                  <div className="flex items-center justify-between space-x-2 px-12">
                    <img
                      src="/fire.png"
                      alt="Description of image"
                      className="w-8 h-8"
                    />
                    <div className="w-4"></div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-black">
                        Luyện tập ngày 23/11
                      </h4>
                      <p className="text-gray-500 text-sm">
                        10 động tác - 10 phút - 500 calo
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        router.push("/main-page/practice-page/workout-info");
                      }}
                      className="text-teal-500 ml-auto font-bold"
                    >
                      ➔
                    </button>
                  </div>

                  {/* Nhóm thứ hai với hình ảnh */}
                  <div className="flex items-center justify-between space-x-2 px-12">
                    <img
                      src="/heart.png"
                      alt="Description of image"
                      className="w-8 h-8"
                    />
                    <div className="w-4"></div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-black">
                        Bữa sáng kiểu anh
                      </h4>
                      <p className="text-gray-500 text-sm">Nguyễn Văn A</p>
                    </div>
                    <button className="text-teal-500 ml-auto font-bold" onClick={() => router.push("/main-page/nutrition-page/meal")}>
                      ➔
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <div className="px-4">
                  <h4 className="font-medium text-black">25 Th11 - 30 Th11</h4>
                  <p className="text-gray-500 text-sm">...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
