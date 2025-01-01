"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ThumbsDown,
  Pause,
  Play,
  Check,
} from "lucide-react";

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
  onOpenDiscription: () => void;
}

const WorkoutScreen: React.FC<WorkoutScreenProps> = ({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onOpenDiscription,
}) => {
  const [timeLeft, setTimeLeft] = useState(step.time || 0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  // Trạng thái để kiểm soát like và dislike
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "Không xác định";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null; // Khai báo biến timer ngoài useEffect

    if (timeLeft > 0 && isTimerRunning) {
      // Nếu thời gian còn lại và bộ đếm đang chạy, bắt đầu bộ đếm
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && step.time && step.time > 0) {
      // Nếu bộ đếm về 0 và có thời gian, gọi onNext
      onNext();
    }

    return () => {
      if (timer) {
        clearInterval(timer); // Dọn dẹp bộ đếm khi component bị unmount hoặc bộ đếm dừng
      }
    };
  }, [timeLeft, isTimerRunning, onNext, step.time]);

  useEffect(() => {
    // Reset the timer whenever the step changes
    setTimeLeft(step.time || 0);
    setIsTimerRunning(true); // Reset timer to running state when changing steps
  }, [step]);

  const handleTimerToggle = () => {
    setIsTimerRunning((prev) => !prev); // Toggle timer state
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Nếu dislike đang được chọn, bỏ chọn
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Nếu like đang được chọn, bỏ chọn
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
          {
            step.time && step.time > 0
              ? formatTime(timeLeft) // Hiển thị thời gian còn lại nếu có bộ đếm
              : step.reps && step.reps > 0
              ? `x${step.reps}` // Hiển thị số lần thực hiện nếu có reps
              : "Không xác định" // Hiển thị fallback nếu không có reps hoặc thời gian
          }
        </div>
        <div className="flex justify-center space-x-5">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">{step.title}</div>
            {step.subtitle && (
              <p className="text-2xl text-gray-500">{step.subtitle}</p>
            )}
          </div>
          <button
            onClick={onOpenDiscription}
            className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-gray-500 text-lg hover:bg-gray-50 transition-colors"
          >
            ?
          </button>
        </div>
        <div className="text-center space-x-10">
          <button
            onClick={handleLikeClick}
            className="hover:scale-110 transition-transform"
          >
            <Heart
              size={40}
              className={liked ? "text-red-500" : "text-gray-300"}
            />
          </button>
          <button
            onClick={handleDislikeClick}
            className="hover:scale-110 transition-transform"
          >
            <ThumbsDown
              size={40}
              className={disliked ? "text-black" : "text-gray-300"}
            />
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
          className="px-36 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors flex items-center justify-center"
          onClick={step.time && step.time > 0 ? handleTimerToggle : onNext}
        >
          {step.time && step.time > 0 ? (
            isTimerRunning ? (
              <Pause size={48} />
            ) : (
              <Play size={48} />
            )
          ) : (
            <Check size={48} />
          )}
        </button>

        <button
          onClick={onNext}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight size={80} className="text-gray-600" />
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
