"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface ReadyScreenProps {
  stepTitle: string;
  stepCount: number;
  onReady: () => void;
}

const ReadyScreen: React.FC<ReadyScreenProps> = ({
  stepTitle,
  stepCount,
  onReady,
}) => {
  return (
    <div className="w-full flex-1 p-6 flex flex-col items-center space-y-8 relative">
      <h2 className="text-3xl font-semibold text-teal-500">
        Đã sẵn sàng luyện tập
      </h2>

      <div className="relative">
        <div className="w-24 h-24 rounded-full border-2 border-teal-500 flex items-center justify-center">
          <span className="text-black text-4xl">{stepCount}</span>
        </div>
      </div>

      <div className="flex justify-center space-x-5">
        <div className="text-center">
          <h3 className="text-black text-3xl">{stepTitle}</h3>
        </div>
        <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-gray-500 text-lg hover:bg-gray-50 transition-colors">
          ?
        </button>
      </div>

      <ChevronRight
        className="absolute top-16 right-4 text-gray-500 cursor-pointer hover:text-gray-700"
        size={80}
        onClick={onReady}
      />
    </div>
  );
};

export default ReadyScreen;
