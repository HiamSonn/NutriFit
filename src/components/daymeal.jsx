"use client";
import React from "react";
import { Meal } from "@/components/meal";
import { useState } from "react";
const DayMeal = ({ day }) => {
  const [show, setShow] = useState(day === "Hôm nay");

  return (
    <div className="border border-grayborder mt-10  p-4 rounded-md space-y-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-sm">
            {day}
          </h1>
          <div className="space-x-2 lg:text-base md:text-base sm:text-sm text-xs">
            <span>5 nguyên liệu</span>
            <span className="text-gray">200.000 đ</span>
          </div>
        </div>
        <div className=" flex items-end lg:text-base md:text-base sm:text-sm text-xs">
          <button
            onClick={() => setShow(!show)}
            className="bg-lightgreen text-white lg:px-8 md:px-6 sm:px-4 px-3 py-2 rounded-lg font-bold"
          >
            {show ? "Ẩn bớt" : "Xem chi tiết"}
          </button>
        </div>
      </div>
      {show && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
          <Meal bua="Sáng" />
          <Meal bua="Trưa" />
          <Meal bua="Tối" />
        </div>
      )}
    </div>
  );
};
export default DayMeal;
