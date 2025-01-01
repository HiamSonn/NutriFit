"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("Lịch");

  return (
    <div className="min-h-screen bg-white p-4 px-20">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-md w-64">
        <h1 className="text-lg font-bold text-black">Tháng 11/2024</h1>
        <button className="text-teal-500 text-lg">📅</button>
      </header>

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
        <div className="bg-gray-300 h-40 rounded-md"></div>

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
                    <button className="text-teal-500 ml-auto font-bold">
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
