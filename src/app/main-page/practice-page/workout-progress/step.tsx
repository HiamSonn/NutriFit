"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Heart, MessageSquare } from "lucide-react";

interface WorkoutStep {
  id: number;
  title: string;
  subtitle?: string;
  reps?: number;
  time?: number;
  imageUrl: string;
}

interface WorkoutScreenProps {
  step: WorkoutStep;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

const WorkoutScreen: React.FC<WorkoutScreenProps> = ({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}) => {
  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "Không xác định";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="relative w-full mt-12 mb-12">
        <img
          src={step.imageUrl}
          alt={step.title}
          className="w-48 h-48 object-contain mx-auto"
        />
      </div>

      <div className="flex justify-between text-center space-x-20">
        <div className="text-6xl font-bold text-black">
          {step.reps && step.reps > 0
            ? `x${step.reps}`
            : step.time && step.time > 0
            ? formatTime(step.time)
            : "Không xác định"}
        </div>
        <div className="flex justify-center space-x-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">{step.title}</div>
            {step.subtitle && (
              <p className="text-2xl text-gray-500">{step.subtitle}</p>
            )}
          </div>
          <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-gray-500 text-lg hover:bg-gray-50 transition-colors">
            ?
          </button>
        </div>
        <div className="text-center space-x-10">
          <button className="hover:scale-110 transition-transform">
            <Heart size={40} className="text-red-500" />
          </button>
          <button className="hover:scale-110 transition-transform">
            <MessageSquare size={40} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center space-x-4 items-center">
        <button
          onClick={onPrevious}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={currentStep === 0}
        >
          <ChevronLeft
            size={80}
            className={currentStep === 0 ? "text-gray-300" : "text-gray-600"}
          />
        </button>

        <button
          className="px-36 py-6 bg-teal-500 text-white text-2xl rounded-full hover:bg-teal-600 transition-colors"
          onClick={onNext}
        >
          Hoàn thành
        </button>

        <button
          onClick={onNext}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={currentStep === totalSteps - 1}
        >
          <ChevronRight
            size={80}
            className={
              currentStep === totalSteps - 1 ? "text-gray-300" : "text-gray-600"
            }
          />
        </button>
      </div>

      <div className="flex space-x-2 absolute bottom-4 right-4"></div>

      {/* Progress indicators */}
      <div className="flex space-x-2 w-full mt-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-3 flex-1 rounded-full transition-colors ${
              index === currentStep
                ? "bg-teal-500"
                : index < currentStep
                ? "bg-teal-200"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutScreen;
