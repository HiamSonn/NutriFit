"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import ReadyScreen from "./ready";
import WorkoutScreen from "./step";
import PauseScreen from "./pause";
import FinishScreen from "./finish";

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
  const [currentStep, setCurrentStep] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("ready");
  const step = workoutSteps[currentStep];

  const handleNext = () => {
    if (currentScreen === "ready") {
      setCurrentScreen("workout");
    } else if (currentScreen === "workout") {
      if (currentStep < workoutSteps.length - 1) {
        setCurrentScreen("pause");
      } else {
        setCurrentScreen("finish");
      }
    } else if (currentScreen === "pause") {
      setCurrentStep((curr) => curr + 1);
      setCurrentScreen("workout");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((curr) => curr - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setCurrentScreen("ready");
  };

  return (
    <div
      className={`h-[90vh] p-4 px-20 flex items-center justify-center ${
        currentScreen === "pause" ? "bg-teal-500" : "bg-teal-50"
      }`}
    >
      <Settings
        className={`absolute top-20 right-20 cursor-pointer ${
          currentScreen === "pause" ? "text-white" : "text-gray-500"
        }`}
        size={40}
      />
      {currentScreen === "ready" && (
        <ReadyScreen
          stepTitle={step.title}
          stepCount={workoutSteps.length}
          onReady={handleNext}
        />
      )}
      {currentScreen === "workout" && (
        <WorkoutScreen
          step={step}
          currentStep={currentStep}
          totalSteps={workoutSteps.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
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
        />
      )}
      {currentScreen === "finish" && <FinishScreen onRestart={handleRestart} />}
    </div>
  );
}
