"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SettingScreen from "../setting";

interface WorkoutStep {
  id: number;
  title: string;
  subtitle?: string;
  reps?: number;
  time?: number;
  imageUrl: string;
}

const workoutSteps: WorkoutStep[] = [
  {
    id: 1,
    title: "Bước cao",
    subtitle: "Mỗi bên x9",
    reps: 18,
    time: -1,
    imageUrl: "/exercise.png",
  },
  // Thêm các bước khác tại đây
  {
    id: 2,
    title: "Nhảy dây",
    subtitle: "Nhảy bước nhỏ",
    reps: -1,
    time: 20,
    imageUrl: "/exercise.png",
  },
  {
    id: 3,
    title: "Bước cao",
    subtitle: "Mỗi bên x9",
    reps: 18,
    time: -1,
    imageUrl: "/exercise.png",
  },
];

export default function WorkoutList() {
  const router = useRouter();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleOpenSettings = () => {
    setIsSettingOpen((prev) => !prev); // Chuyển đổi trạng thái mở/đóng
  }; // Mở Settings
  const handleCloseSettings = () => setIsSettingOpen(false); // Đóng Settings

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "Không xác định";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <div className="min-h-screen bg-white p-4 px-20">
      {!isSettingOpen && (
        <>
          {/* Header Summary */}
          <header className="bg-blue-50 rounded-lg p-4 mb-4 mt-4">
            <h2 className="text-lg font-semibold text-teal-600 mb-2 px-20">
              Thứ 4
            </h2>
            <div className="flex justify-between text-gray-600 w-2/3 px-20">
              <div>
                <span className="font-medium">Động tác</span>
                <span className="ml-2 text-teal-600 font-semibold">10</span>
              </div>
              <div>
                <span className="font-medium">Thời gian</span>
                <span className="ml-2 text-teal-600 font-semibold">
                  10 phút
                </span>
              </div>
              <div>
                <span className="font-medium">Calo</span>
                <span className="ml-2 text-teal-600 font-semibold">100</span>
              </div>
            </div>
          </header>

          {/* Settings Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <div className="flex justify-between items-center px-20">
              <div>
                <h3 className="text-lg font-semibold text-teal-600">
                  Cài đặt luyện tập
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Âm nhạc& Huấn luyện viên& Bộ hen giờ...
                </p>
              </div>
              <button
                onClick={handleOpenSettings}
                className="px-12 py-2 font-bold text-teal-500 border-2 border-teal-500 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
              >
                Cài đặt
              </button>
            </div>
          </div>

          {/* Exercises List */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-teal-600 mb-4 px-20">
              Bài tập
            </h3>

            <div className="space-y-4 px-20">
              {workoutSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center space-x-4 py-2 border-b border-gray-200"
                >
                  {/* Hình ảnh bài tập */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Thông tin bài tập */}
                  <div className="flex-1">
                    <h4 className="font-medium text-black">{step.title}</h4>
                    <span className="text-sm text-gray-500">
                      {step.reps && step.reps > 0
                        ? `${step.reps} reps`
                        : step.time && step.time > 0
                        ? formatTime(step.time)
                        : "Không xác định"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end px-20">
              <button
                onClick={() => {
                  router.push("/main-page/practice-page/workout-progress");
                }}
                className="px-12 py-2 font-bold text-teal-500 border-2 border-teal-500 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </>
      )}
      {isSettingOpen && (
        <div className="flex justify-center items-center">
          <SettingScreen onClose={handleCloseSettings} />{" "}
        </div>
      )}
    </div>
  );
}
