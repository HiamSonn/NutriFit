"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import ReadyScreen from "./ready";
import WorkoutScreen from "./step";

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
];

export default function WorkoutProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleNext = () => {
    if (currentStep < workoutSteps.length - 1)
      setCurrentStep((curr) => curr + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((curr) => curr - 1);
  };

  const step = workoutSteps[currentStep];

  return (
    <div className="h-[90vh] bg-teal-50 p-4 px-20 flex items-center justify-center">
      <Settings
        className="absolute top-20 right-20 text-gray-500 cursor-pointer"
        size={40}
      />
      {!isReady ? (
        <ReadyScreen
          stepTitle={step.title}
          stepCount={workoutSteps.length}
          onReady={() => setIsReady(true)}
        />
      ) : (
        <WorkoutScreen
          step={step}
          currentStep={currentStep}
          totalSteps={workoutSteps.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}
