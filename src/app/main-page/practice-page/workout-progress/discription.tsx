import React, { useState } from "react";
import { X } from "lucide-react";

interface WorkoutStep {
  id: number;
  title: string;
  subtitle?: string;
  reps?: number;
  time?: number;
  imageUrl: string;
}

interface ExerciseDetailsProps {
  step: WorkoutStep;
  onClose: () => void;
}

export default function ExerciseDetails({
  step,
  onClose,
}: ExerciseDetailsProps) {
  const [selectedMode, setSelectedMode] = useState("2D"); // Trạng thái lưu nút được chọn

  const handleSelectMode = (mode: string) => {
    setSelectedMode(mode); // Cập nhật trạng thái khi nút được chọn
  };

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "Không xác định";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <div className="p-8 bg-white w-3/4 h-[80vh] rounded-lg shadow-md relative overflow-auto border border-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">{step.title}</h2>
        <button
          onClick={onClose}
          className="hover:bg-gray-100 p-1 rounded-full"
        >
          <X size={24} color="black" />
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Placeholder for 2D/Video */}
            <span className="text-gray-500">Video/2D Placeholder</span>
          </div>

          {/* Switch Buttons */}
          <div className="flex bg-gray-100 rounded-full ">
            <button
              onClick={() => handleSelectMode("2D")}
              className={`px-4 py-2 rounded-full focus:outline-none flex-1 ${
                selectedMode === "2D"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              2D
            </button>
            <button
              onClick={() => handleSelectMode("Video")}
              className={`px-4 py-2 rounded-full focus:outline-none flex-1 ${
                selectedMode === "Video"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Video
            </button>
            <button
              onClick={() => handleSelectMode("Muscle")}
              className={`px-4 py-2 rounded-full focus:outline-none flex-1 ${
                selectedMode === "Muscle"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Cơ bắp
            </button>
          </div>

          {/* Duration */}
          <div className="text-black flex justify-between items-center px-8">
            <span className="font-semibold text-2xl text-teal-600">
              Thời lượng:{" "}
            </span>
            <span className="text-2xl font-semibold">
              {
                step.time && step.time > 0
                  ? formatTime(step.time) // Hiển thị thời gian còn lại nếu có bộ đếm
                  : step.reps && step.reps > 0
                  ? `x${step.reps}` // Hiển thị số lần thực hiện nếu có reps
                  : "Không xác định" // Hiển thị fallback nếu không có reps hoặc thời gian
              }
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {/* Description */}
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl text-teal-600">Giới thiệu</h3>
            <p className="text-gray-600">
              Bắt đầu ở tư thế chống đẩy. Co gối phải về phía ngực và giữ chân
              trái thẳng, sau đó nhanh chóng chuyển sang chân khác. Bài tập này
              tăng cường nhiều nhóm cơ.
            </p>
          </div>

          {/* Target Area */}
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl text-teal-600">
              Vùng tập trung
            </h3>
            <div className="flex gap-2">
              <button className="px-8 py-2 bg-gray-100 text-gray-700 rounded-full focus:outline-none">
                Bụng
              </button>
              <button className="px-8 py-2 bg-gray-100 text-gray-700 rounded-full focus:outline-none">
                Cơ mông
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Ảnh minh họa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
