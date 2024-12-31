"use client";

import React, { useState, useEffect } from "react";

interface WorkoutStep {
  id: number;
  title: string;
  subtitle?: string;
  reps?: number;
  time?: number;
  imageUrl: string;
}

interface PauseScreenProps {
  step: WorkoutStep;
  currentStep: number;
  totalSteps: number;
  restTime?: number; // Thời gian nghỉ tính bằng giây
  onContinue: () => void;
  onSkip: () => void;
}

const PauseScreen: React.FC<PauseScreenProps> = ({
  step,
  currentStep,
  totalSteps,
  restTime = 20, // Mặc định 20 giây
  onContinue,
  onSkip,
}) => {
  const [timeLeft, setTimeLeft] = useState(restTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onContinue();
    }
  }, [timeLeft, onContinue]);

  // Format thời gian dạng MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-teal-500 min-h-screen w-full text-white p-6 flex items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-8 w-1/2 px-20">
        {/* Header */}
        <div>
          <p className="text-5xl font-bold mb-2">
            TIẾP THEO {currentStep + 2}/{totalSteps + 1}
          </p>
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold text-black">Bước cao</h1>
            <button className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-sm">
              ?
            </button>
          </div>
          <p className="text-6xl text-black font-bold mt-2">
            {step.reps && step.reps > 0
              ? `x${step.reps}`
              : step.time && step.time > 0
              ? formatTime(step.time)
              : "Không xác định"}
          </p>
        </div>

        {/* Main Image */}
        <div className="bg-white rounded-lg p-4 w-full max-w-sm">
          <img
            src={step.imageUrl}
            alt={step.title}
            className="w-full h-48 object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 text-center">
        <h2 className="text-6xl font-bold mb-2">NGHỈ NGƠI</h2>
        <p className="text-8xl font-bold mb-6">{formatTime(timeLeft)}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setTimeLeft((prev) => prev + 10)}
            className="px-20 py-4 bg-teal-200/30 font-bold text-2xl rounded-full hover:bg-teal-400/40 transition-colors"
          >
            +10s
          </button>
          <button
            onClick={onSkip}
            className="px-16 py-4 bg-white font-bold text-2xl text-teal-500 rounded-full hover:bg-gray-100 transition-colors"
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default PauseScreen;
