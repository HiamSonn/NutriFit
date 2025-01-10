"use client";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
export default function PlanPage() {
 const [targeweight, setTargeweight] = useState(100);
  return (
    <div className="grid grid-cols-[0.5fr_11fr_0.5fr] mt-10">
      <div></div>
      <div className="lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
        <div className="grid lg:grid-cols-2 lg:gap-20 md:gap-16 sm:gap-12 gap-8">
          <div className="space-y-10  rounded-md">
            <div className="flex justify-between">
              <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">Mục tiêu</h1>
            </div>
            <div className=" lg:p-10 md:p-8 sm:p-6 p-3 rounded-md shadow-md  lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4 lg:text-xl md:text-lg sm:text-base text-sm ">
              <div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-darkgreen rounded border-grayborder cursor-pointer"
                    />
                    <span>Đạt được</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                     
                      className="p-1 outline-none bg-white text-center max-w-[100px] text-lightgreen"
                        
                      value={targeweight}
                      onChange={(e) => setTargeweight(e.target.value)}
                    />
                    <span className="text-lightgreen">kg</span>
                   
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray lg:text-lg md:text-base sm:text-sm text-xs ">
                  <h1  >Thời gian hoàn thành</h1>
                  <select className="border rounded-md p-2 border-grayborder">
                    <option value="1">Nhanh</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Chậm</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-darkgreen rounded border-grayborder cursor-pointer"
                />
                <span>Giảm tỉ lệ mỡ</span>
              </div>
              <div className="flex items-center gap-2 col-span-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-darkgreen rounded border-grayborder cursor-pointer"
                />
                <span>Tăng sức bền</span>
              </div>
              <div className="flex items-center gap-2 col-span-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-darkgreen rounded border-grayborder cursor-pointer"
                />
                <span>Tăng sức mạnh cơ bắp</span>
              </div>
              <div className="flex items-center gap-2 col-span-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-darkgreen rounded border-grayborder cursor-pointer"
                />
                <span>Sống lành mạnh</span>
              </div>
              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
                  Lưu
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">Lịch sử</h1>
            <div className="lg:p-10 md:p-8 sm:p-6 p-3 rounded-md shadow-md
             lg:max-h-[500px] max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar-track-gray-100
             lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
              <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                <div className="space-y-2">
                  <h1>17 Th11 - 23 Th11</h1>
                  <h1 className="text-lightgreen font-semibold">Đạt 70kg</h1>
                  <h1 className="text-gray">Thời gian 3 tháng</h1>
                </div>
                <div className="flex items-center ">
                    <div className="rounded-full border border-lightgreen w-10 h-10 flex items-center justify-center">
                      <CheckIcon className="text-lightgreen font-bold  w-10 h-10" />
                    </div>
                </div>
              </div>
              <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                <div className="space-y-2">
                  <h1>17 Th11 - 23 Th11</h1>
                  <h1 className="text-lightgreen font-semibold">Đạt 70kg</h1>
                  <h1 className="text-gray">Thời gian 3 tháng</h1>
                </div>
                <div className="flex items-center ">
                    <div className="rounded-full border border-lightgreen w-10 h-10 flex items-center justify-center">
                      <CheckIcon className="text-lightgreen font-bold  w-10 h-10" />
                    </div>
                </div>
              </div>
              <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                <div className="space-y-2">
                  <h1>17 Th11 - 23 Th11</h1>
                  <h1 className="text-lightgreen font-semibold">Đạt 70kg</h1>
                  <h1 className="text-gray">Thời gian 3 tháng</h1>
                </div>
                <div className="flex items-center ">
                    <div className="rounded-full border border-lightgreen w-10 h-10 flex items-center justify-center">
                      <CheckIcon className="text-lightgreen font-bold  w-10 h-10" />
                    </div>
                </div>
              </div>
              <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                <div className="space-y-2">
                  <h1>17 Th11 - 23 Th11</h1>
                  <h1 className="text-lightgreen font-semibold">Đạt 70kg</h1>
                  <h1 className="text-gray">Thời gian 3 tháng</h1>
                </div>
                <div className="flex items-center ">
                    <div className="rounded-full border border-lightgreen w-10 h-10 flex items-center justify-center">
                      <CheckIcon className="text-lightgreen font-bold  w-10 h-10" />
                    </div>
                </div>
              </div>
              <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                <div className="space-y-2">
                  <h1>17 Th11 - 23 Th11</h1>
                  <h1 className="text-lightgreen font-semibold">Đạt 70kg</h1>
                  <h1 className="text-gray">Thời gian 3 tháng</h1>
                </div>
                <div className="flex items-center ">
                    <div className="rounded-full border border-lightgreen w-10 h-10 flex items-center justify-center">
                      <CheckIcon className="text-lightgreen font-bold  w-10 h-10" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
