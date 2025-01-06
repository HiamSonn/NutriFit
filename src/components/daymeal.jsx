'use client';
import React from "react";
import {Meal} from "@/components/meal";
import {useState} from 'react';
const DayMeal = ({day}) => {
    const [show, setShow] = useState(true);
    return (    
        <div className="border border-grayborder mt-10  p-4 rounded-md space-y-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-darkgreen font-bold text-xl">{day}</h1>
            <div className="space-x-2">
              <span>5 nguyên liệu</span>
              <span className="text-gray">200.000 đ</span>
            </div>
          </div>
          <div className=" flex items-end">
            <button onClick={()=>setShow(!show)} className="bg-lightgreen text-white px-8 py-2 rounded-lg font-bold">
             {show? "Ẩn bớt": "Xem chi tiết"}
            </button>
          </div>
        </div>
        {show&&(<div className="grid grid-cols-3 gap-4">
          <Meal />
          <Meal />
          <Meal />
        </div>)}
      </div>
    );
}
export default DayMeal;