"use client";

import React from "react";

interface FinishScreenProps {
  onRestart: () => void;
}

const FinishScreen: React.FC<FinishScreenProps> = ({ onRestart }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-teal-500">Hoàn thành!</h2>
      <p className="text-lg text-gray-600">
        Bạn đã hoàn thành tất cả các bước!
      </p>
      <button
        className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
        onClick={onRestart}
      >
        Bắt đầu lại
      </button>
    </div>
  );
};

export default FinishScreen;
