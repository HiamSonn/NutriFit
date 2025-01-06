import React from "react";
import {Meal} from "@/components/meal";
export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-white ">
  
<div className="grid grid-cols-[0.5fr_11fr_0.5fr] ">
  <div></div>
  <div>
        <div className="grid grid-cols-2 gap-20 min-h-[100px] mt-10 "> 
          <div className="col-span-1 flex justify-between border border-grayborder px-4 py-2 rounded-md">
           
            <div className="flex flex-col justify-between">
              <h1 className="text-darkgreen font-bold text-2xl">Chế độ ăn</h1>
              <h1 className="text-gray text-sm">Cá nhân hóa thực đơn của bạn</h1>
            </div>
           <div className=" flex items-end">
              <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
                Xây dựng
              </button>
           </div>
           
          </div>
          <div className="col-span-1 flex justify-between border border-grayborder px-4 py-2 rounded-md">
           
            <div className="flex flex-col justify-between">
              <h1 className="text-darkgreen font-bold text-2xl">Thực đơn tuần này</h1>
              <h1 className="text-black">220.000 đ</h1>
              <h1 className="text-gray text-sm">11 nguyên liệu</h1>
            </div>
           <div className=" flex items-end">
              <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
               Xem chi tiết
              </button>
           </div>
           
          </div>
        </div>
        <div className="border-2 border-grayborder mt-10 space-y-5 p-4 rounded-md">
          <h1 className="text-darkgreen font-bold text-2xl">Gợi ý cho thực đơn hôm nay</h1>
          <h2 className="text-black">150 Kcal</h2>
          <div className="text-black space-x-2">
            <span>3 bữa</span>
            <span>200.000đ</span>
          </div>
          <div>
         <div className="grid grid-cols-3 gap-4">
            <Meal/>
            <Meal/>
            <Meal/>
         </div>
        </div>
        <div className="grid grid-cols-2 gap-20 min-h-[100px] mt-10 "> 
          <div className="col-span-1 ">
          </div>
          <div className="col-span-1  border border-grayborder px-4 py-2 rounded-md space-y-4">
           
            <div className="flex flex-col ">
              <h1 className="text-darkgreen font-bold text-xl">Tìm hiểu thêm các thực đơn do chúng tôi chuẩn bị</h1>
            </div>
           <div className=" flex justify-end">
              <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
               Khám phá
              </button>
           </div>
           
          </div>
        </div>
        </div>
       
  </div>
      <div></div>
</div>
  </div>
  );
}
