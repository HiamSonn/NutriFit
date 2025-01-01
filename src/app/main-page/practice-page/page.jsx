"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function PracticePage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  // Đóng calendar khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hàm format ngày thành dd/MM
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
  };

  // Lấy ngày đầu tuần (Thứ 2)
  const getWeekStart = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  // Lấy ngày cuối tuần (Chủ nhật)
  const getWeekEnd = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? 0 : 7);
    return new Date(d.setDate(diff));
  };

  const weekStart = getWeekStart(date);
  const weekEnd = getWeekEnd(date);

  const formatDateRange = () => {
    return `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  };

  // Tạo mảng các ngày trong tháng hiện tại
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Thêm các ngày trống từ đầu tháng
    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    // Thêm các ngày trong tháng
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-4 px-20">
      {/* Header */}
      <header className="flex justify-between space-x-6 bg-white py-6">
        {/* Phần 1 */}
        <div className="flex items-center space-x-4 bg-white rounded-md p-4 shadow-md w-2/5">
          <div className="flex flex-col space-y-2 flex-grow px-4">
            <p className="font-semibold text-teal-600 text-2xl">
              3 ngày liên tục
            </p>
            <p className="text-gray-500 text-sm">Bạn đã tập 20 lần</p>
          </div>
          <button
            onClick={() => {
              router.push("/main-page");
            }}
            className="text-teal-500 font-bold px-4"
          >
            ➔
          </button>
        </div>

        {/* Phần 2 */}
        <div className="flex items-center space-x-4 bg-white rounded-md p-4 shadow-md w-2/5">
          <div className="flex flex-col space-y-2 flex-grow px-4">
            <p className="font-semibold text-teal-600 text-2xl">
              Chế độ luyện tập
            </p>
            <p className="text-gray-500 text-sm">
              Cá nhân hóa chế độ luyện tập
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/main-page/plan-page");
            }}
            className="bg-teal-500 font-bold text-white rounded-md py-2 px-4 hover:bg-teal-600"
          >
            Xây dựng
          </button>
        </div>
      </header>

      {/* TimeLine */}
      <section className="mt-6">
        <div className="bg-white shadow-md rounded-md p-8">
          {/* History Items */}
          <div className="space-y-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 border border-black rounded-lg flex items-center gap-6 hover:bg-gray-50"
              >
                <span className="text-black">{formatDateRange()}</span>
                <Calendar className="h-4 w-4" color="black" />
              </button>

              {isOpen && (
                <div
                  ref={calendarRef}
                  className="absolute top-12 left-0 bg-white text-black border border-black rounded-lg shadow-lg p-4 z-50"
                >
                  <div className="grid grid-cols-7 gap-1">
                    {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium p-2"
                      >
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(date).map((day, index) => (
                      <div
                        key={index}
                        className={`text-center p-2 ${
                          day
                            ? "hover:bg-gray-100 cursor-pointer rounded-md " +
                              (day.getDate() === date.getDate() &&
                              day.getMonth() === date.getMonth()
                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                : "")
                            : ""
                        }`}
                        onClick={() => day && handleSelect(day)}
                      >
                        {day ? day.getDate() : ""}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-gray-400 w-1/3">Thứ 2</p>
                <p className="text-gray-500">Chưa hoàn thành</p>
              </div>
              <p className="text-teal-500 font-bold px-8">✗</p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-teal-500 w-1/3">Thứ 3</p>
                <p className="text-teal-600">Đã hoàn thành</p>
              </div>
              <p className="text-teal-500 font-bold px-8">✓</p>
            </div>
            <div className="flex items-center justify-between bg-teal-50 border-2 border-teal-500 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-teal-600 w-1/3">Hôm nay</p>
                <p className="text-teal-600">
                  10 động tác - 10 phút - 500 calo
                </p>
              </div>
              <p className="text-teal-600">Tập ngay</p>
              <button
                onClick={() => {
                  router.push("/main-page/practice-page/workout-info");
                }}
                className="text-teal-500 font-bold px-8"
              >
                ➔
              </button>
            </div>
            <div
              onClick={() => {
                router.push("/main-page/practice-page/rest-day");
              }}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
            >
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-black w-1/3">Thứ 5</p>
                <p className="text-gray-500">Nghỉ ngơi</p>
              </div>
              <p className="text-teal-500 font-bold px-8"></p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-black w-1/3">Thứ 6</p>
                <p className="text-gray-500">
                  10 động tác - 10 phút - 500 calo
                </p>
              </div>
              <p className="text-teal-500 font-bold px-8"></p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-black w-1/3">Thứ 7</p>
                <p className="text-gray-500">
                  10 động tác - 10 phút - 500 calo
                </p>
              </div>
              <p className="text-teal-500 font-bold px-8"></p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 px-8 flex-grow">
                <p className="font-bold text-black w-1/3">Chủ nhật</p>
                <p className="text-gray-500">
                  10 động tác - 10 phút - 500 calo
                </p>
              </div>
              <p className="text-teal-500 font-bold px-8"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
