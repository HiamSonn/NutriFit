"use client";
import React from "react";
import {Meal} from "@/components/meal";
import { useRouter } from "next/navigation";
export default function NutritionPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white ">
  
<div className="grid grid-cols-[0.5fr_11fr_0.5fr] ">
  <div></div>
  <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-20 h-auto mt-10 "> 
          <div className="col-span-1 flex justify-between  p-3 rounded-md shadow-md ">
           
            <div className="flex flex-col justify-between">
              <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">Chế độ ăn</h1>
              <h1 className="text-gray text-sm">Cá nhân hóa thực đơn của bạn</h1>
            </div>
           <div className=" flex items-end lg:text-lg md:text-xs sm:text-xs text-xs">
              <button className="bg-lightgreen text-white py-1 lg:px-6 sm:px-6 px-6  md:px-3 rounded-lg font-bold " onClick={()=>router.push("/main-page/plan-page")}>
                Xây dựng
              </button>
           </div>
           
          </div>
          <div className="col-span-1 flex justify-between  p-3 rounded-md shadow-md">
           
            <div className="flex flex-col justify-between">
              <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">Thực đơn tuần này</h1>
              <h1 className="text-black">220.000 đ</h1>
              <h1 className="text-gray text-sm">11 nguyên liệu</h1>
            </div>
           <div className="flex items-end lg:text-lg md:text-xs sm:text-xs text-xs">
              <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold" onClick={()=>router.push("/main-page/nutrition-page/weekdiet")}>
               Xem chi tiết
              </button>
           </div>
           
          </div>
        </div>
        <div className=" mt-10 lg:space-y-5 md:space-y-4 sm:space-y-3 space-y-2 p-4 rounded-md shadow-md">
          <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-base">Gợi ý cho thực đơn hôm nay</h1>
          <h2 className="text-black font-bold lg:text-xl md:text-lg sm:text-sm text-xs ">150 Kcal</h2>
          <div className="text-black space-x-2 lg:text-base md:text-base sm:text-sm text-xs">
            <span>3 bữa</span>
            <span>200.000đ</span>
          </div>
          <div>
         <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-4">
            <Meal/>
            <Meal/>
            <Meal/>
         </div>
        </div>
       
        </div>
       
  </div>
      <div></div>
</div>
  </div>
  );
}
