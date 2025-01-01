"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import ReadyScreen from "./ready";
import WorkoutScreen from "./step";
import PauseScreen from "./pause";
import FinishScreen from "./finish";
import SettingScreen from "../setting";
import ExerciseDetails from "./discription";
import { useRouter } from "next/navigation";

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
    title: "Nhảy dây",
    subtitle: "Nhảy bước nhỏ",
    reps: -1,
    time: 20,
    imageUrl: "/exercise.png",
  },
];

type ScreenType = "ready" | "workout" | "pause" | "finish";

export default function WorkoutProgress() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("ready");
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isDiscriptionOpen, setIsDiscriptionOpen] = useState(false);

  const handleOpenSettings = () => {
    setIsSettingOpen((prev) => !prev); // Chuyển đổi trạng thái mở/đóng
  }; // Mở Settings
  const handleCloseSettings = () => setIsSettingOpen(false); // Đóng Settings

  const handleOpenDiscriptions = () => setIsDiscriptionOpen(true); // Đóng Settings
  const handleCloseDiscriptions = () => setIsDiscriptionOpen(false); // Đóng Settings

  const step = workoutSteps[currentStep];

  const handleNext = () => {
    if (currentScreen === "ready") {
      setCurrentScreen("workout");
    } else if (currentScreen === "workout") {
      if (currentStep < workoutSteps.length - 1) {
        setCurrentStep((curr) => curr + 1);
        setCurrentScreen("pause");
      } else {
        setCurrentScreen("finish");
      }
    } else if (currentScreen === "pause") {
      setCurrentScreen("workout");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((curr) => curr - 1);
    }
  };

  const handleFinish = () => {
    router.push("/main-page/practice-page/workout-info");
  };

  return (
    <div
      className={`h-[90vh] p-4 px-20 flex items-center justify-center ${
        currentScreen === "pause"
          ? "bg-teal-500"
          : currentScreen === "finish"
          ? "bg-gradient-to-b from-teal-500 to-teal-50"
          : "bg-teal-50"
      }`}
    >
      {!(currentScreen === "finish") && !isDiscriptionOpen && (
        <Settings
          className={`absolute top-20 right-20 cursor-pointer ${
            currentScreen === "pause" ? "text-white" : "text-gray-500"
          }`}
          size={40}
          onClick={handleOpenSettings} // Mở màn hình Settings
        />
      )}

      {/* Giao diện bài tập */}
      {!isSettingOpen && !isDiscriptionOpen && (
        <>
          {currentScreen === "ready" && (
            <ReadyScreen
              stepTitle={step.title}
              stepCount={workoutSteps.length}
              onReady={handleNext}
              onOpenDiscription={handleOpenDiscriptions}
            />
          )}
          {currentScreen === "workout" && (
            <WorkoutScreen
              step={step}
              currentStep={currentStep}
              totalSteps={workoutSteps.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onOpenDiscription={handleOpenDiscriptions}
            />
          )}
          {currentScreen === "pause" && (
            <PauseScreen
              step={step}
              currentStep={currentStep}
              totalSteps={workoutSteps.length - 1}
              restTime={20}
              onContinue={handleNext}
              onSkip={handleNext}
              onOpenDiscription={handleOpenDiscriptions}
            />
          )}
          {currentScreen === "finish" && (
            <FinishScreen onFinish={handleFinish} />
          )}
        </>
      )}
      {isSettingOpen && <SettingScreen onClose={handleCloseSettings} />}
      {isDiscriptionOpen && (
        <ExerciseDetails step={step} onClose={handleCloseDiscriptions} />
      )}
    </div>
  );
}
