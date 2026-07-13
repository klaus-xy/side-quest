"use client";

import { Button } from "@/components/ui/button";
import AvatarSelectionForm from "../forms/avatar-selection-form";
import SignUpForm from "../forms/sign-up-form";
import Header from "@/components/layout/header";
import { useState } from "react";
import { ArrowBigLeft, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === 1;
  const handleNext = () => {
    // Handle the next button logic here
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
    console.log("Next button clicked");
  };

  const handlePrevious = () => {
    // Handle the back button logic here
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }

    console.log("Back button clicked");
  };

  // INITIALIZE NEW PLAYER
  const handleSubmit = () => {
    // Handle the initialization logic here
    router.push("/");
    console.log("PLAYER INITIALIZED SUCCESSFULLY");
  };
  return (
    <div className="w-full h-dvh flex flex-col justify-start items-center absolute inset-0 bg-background py-10">
      {/* BACK BUTTON */}
      {currentStep > 0 && (
        <div
          onClick={handlePrevious}
          className="absolute top-4 left-4 cursor-pointer border-3 border-primary p-2 rounded-full"
        >
          <ChevronLeft size={24} className="stroke-3" />
        </div>
      )}
      <div className="w-full flex flex-col justify-start items-center flex-1">
        {/* FORM STEPS */}

        {currentStep === 0 && <SignUpForm />}

        {currentStep === 1 && <AvatarSelectionForm />}

        <div className="w-full flex justify-center items-center mt-24 px-10 ">
          <Button
            variant="outline"
            className="w-full font-eurostile uppercase tracking-[0.25em] text-lg p-4 py-6"
            onClick={isLastStep ? handleSubmit : handleNext}
          >
            {isLastStep ? "Initialize" : "Next"}
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-4">
        <span className="text-[0.6rem] text-muted-foreground uppercase">
          beta v0.0.1
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
