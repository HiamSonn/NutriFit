"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Heart,
  MessageSquare,
} from "lucide-react";

interface WorkoutStep {
  id: number;
  title: string;
  subtitle?: string;
  reps?: number;
  imageUrl: string;
}

const workoutSteps: WorkoutStep[] = [
  {
    id: 1,
    title: "Bước cao",
    subtitle: "Mỗi bên x9",
    reps: 18,
    imageUrl: "/workout-1.png", // Thay bằng URL thực tế của bạn
  },
  // Thêm các bước khác tại đây
];

export default function WorkoutProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleNext = () => {
    if (currentStep < workoutSteps.length - 1) {
      setCurrentStep((curr) => curr + 1);
      setIsReady(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((curr) => curr - 1);
      setIsReady(false);
    }
  };

  const step = workoutSteps[currentStep];

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-4">
      {!isReady ? (
        // Màn hình "Đã sẵn sàng luyện tập"
        <div className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-8 relative">
          <h2 className="text-xl font-semibold text-teal-500">
            Đã sẵn sàng luyện tập
          </h2>

          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-teal-500 flex items-center justify-center">
              <span className="text-4xl">{currentStep + 1}</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-medium">{step.title}</h3>
            <button
              onClick={() => setIsReady(true)}
              className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
            >
              Bắt đầu
            </button>
          </div>

          <Settings
            className="absolute top-4 right-4 text-gray-500 cursor-pointer"
            size={24}
          />
          <ChevronRight
            className="absolute top-1/2 right-4 text-gray-500 cursor-pointer hover:text-gray-700"
            size={32}
            onClick={handleNext}
          />
        </div>
      ) : (
        // Màn hình tập luyện
        <div className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-6 relative">
          <div className="relative w-full">
            <img
              src={step.imageUrl}
              alt={step.title}
              className="w-48 h-48 object-contain mx-auto"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold">
              x {step.reps}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-medium">{step.title}</h3>
            {step.subtitle && <p className="text-gray-500">{step.subtitle}</p>}
          </div>

          <div className="w-full flex justify-center space-x-4 items-center">
            <button
              onClick={handlePrevious}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={currentStep === 0}
            >
              <ChevronLeft
                size={24}
                className={
                  currentStep === 0 ? "text-gray-300" : "text-gray-600"
                }
              />
            </button>

            <button
              className="px-16 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              onClick={handleNext}
            >
              Hoàn thành
            </button>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={currentStep === workoutSteps.length - 1}
            >
              <ChevronRight
                size={24}
                className={
                  currentStep === workoutSteps.length - 1
                    ? "text-gray-300"
                    : "text-gray-600"
                }
              />
            </button>
          </div>

          <div className="flex space-x-2 absolute bottom-4 right-4">
            <button className="hover:scale-110 transition-transform">
              <Heart className="text-red-500" />
            </button>
            <button className="hover:scale-110 transition-transform">
              <MessageSquare className="text-gray-500" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex space-x-2 w-full mt-4">
            {workoutSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
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
      )}
    </div>
  );
}
