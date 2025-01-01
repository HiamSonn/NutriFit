"use client";

import React, { useState } from "react";

interface WorkoutCompleteProps {
  onFinish: () => void;
}

const WorkoutComplete: React.FC<WorkoutCompleteProps> = ({ onFinish }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="w-full bg-gradient-to-b from-teal-500 to-teal-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white mb-6">
        Tập luyện đã hoàn thành !
      </h1>

      {/* Stats Card */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-teal-500 mb-2">10</p>
            <p className="text-xl text-gray-600">Động tác</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500 mb-2">10 phút</p>
            <p className="text-xl text-gray-600">Thời gian</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500 mb-2">100</p>
            <p className="text-xl text-gray-600">Calo</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Feedback Section */}
        <div className="w-1/2 bg-white rounded-xl p-6 mb-6 shadow-lg space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-2">
              Bạn cảm thấy thế nào ?
            </h2>
            <p className="text-xl text-gray-500 mb-4">
              Phản hồi của bạn sẽ giúp chúng tôi cung cấp các bài tập phù hợp
              hơn cho bạn
            </p>
          </div>

          <div className="flex justify-around items-center mb-4">
            <button
              onClick={() => setSelectedMood("hard")}
              className={`flex flex-col items-center ${
                selectedMood === "hard"
                  ? "text-black font-bold"
                  : "text-gray-400 font-bold"
              }`}
            >
              <span className="text-6xl mb-2">😥</span>
              <span className="text-xl">Quá khó</span>
            </button>

            <button
              onClick={() => setSelectedMood("normal")}
              className={`flex flex-col items-center ${
                selectedMood === "normal"
                  ? "text-black font-bold"
                  : "text-gray-400 font-bold"
              }`}
            >
              <span className="text-6xl mb-2">😊</span>
              <span className="text-xl">Bình thường</span>
            </button>

            <button
              onClick={() => setSelectedMood("easy")}
              className={`flex flex-col items-center ${
                selectedMood === "easy"
                  ? "text-black font-bold"
                  : "text-gray-400 font-bold"
              }`}
            >
              <span className="text-6xl mb-2">😄</span>
              <span className="text-xl">Quá dễ</span>
            </button>
          </div>
        </div>

        {/* Metrics Update Section */}
        <div className="flex-grow bg-white rounded-xl p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Cập nhật chỉ số
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xl text-gray-600">Cân nặng</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="text-black w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="0.0"
                />
                <span className="text-xl ml-2 text-teal-500">Kg</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-xl text-gray-600">Chiều cao</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="text-black w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="0.0"
                />
                <span className="text-xl ml-2 text-teal-500">Cm</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-xl text-gray-600">Nhịp tim</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="text-black w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="0"
                />
                <span className="text-xl ml-2 text-teal-500">Bpm</span>
              </div>
            </div>

            <button className="w-full py-3 bg-blue-50 text-xl text-teal-500 rounded-lg mt-4 hover:bg-blue-100 transition-colors">
              Lưu
            </button>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={onFinish}
        className="w-full py-4 bg-teal-500 text-white rounded-full text-lg font-medium hover:bg-teal-600 transition-colors"
      >
        Tiếp theo
      </button>
    </div>
  );
};

export default WorkoutComplete;
