"use client";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
export default function PlanPage() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="grid grid-cols-[0.5fr_11fr_0.5fr] mt-10">
      <div></div>
      <div className="space-y-10">
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-10  rounded-md">
            <div className="flex justify-between">
              <h1 className="text-darkgreen font-bold text-2xl">Mục tiêu</h1>
            </div>
            <div className="border border-grayborder p-10 rounded-md shadow-md  space-y-10 ">
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
                      disabled={!isEditing}
                      className={`p-2 outline-none bg-white text-center w-11 ${
                        isEditing
                          ? "border border-grayborder rounded-md"
                          : "border-none"
                      }`}
                      value={100}
                    />
                    <span>kg</span>
                    <EditIcon
                      className="text-black cursor-pointer"
                      onClick={() => setIsEditing(!isEditing)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                  <h1>Thời gian hoàn thành</h1>
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
            <h1 className="text-darkgreen font-bold text-2xl">Lịch sử</h1>
            <div className="border border-grayborder p-10 rounded-md shadow-md ">
              <div className="flex justify-between">
                <div className="space-y-5">
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
