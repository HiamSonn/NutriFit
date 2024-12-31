"use client";

import { useRouter } from "next/navigation";

export default function PracticePage() {
  const router = useRouter();

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
          <button className="bg-teal-500 font-bold text-white rounded-md py-2 px-4 hover:bg-teal-600">
            Xây dựng
          </button>
        </div>
      </header>

      {/* TimeLine */}
      <section className="mt-6">
        <div className="bg-white shadow-md rounded-md p-8">
          {/* History Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md w-1/3">
              <div className="flex items-center space-x-4 px-8">
                <h1 className="font-bold text-black">Tuần này</h1>
              </div>
              <button className="text-teal-500 text-lg px-8">📅</button>
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
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
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
