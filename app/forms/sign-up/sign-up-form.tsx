"use client";

import { Button } from "@/components/ui/button";
import AvatarSelectionForm from "./steps/avatar-selection-form";
import Header from "@/components/layout/header";
import { useState } from "react";
import { ArrowBigLeft, ChevronLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserInfoForm from "./steps/user-info-form";
import { PlayerData } from "@/components/cards/player-profile-card";

// ::::: FORM SCHEMAS ::::: //
const UserInfoFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  age: z.number().min(1, {
    message: "Age must be at least 1",
  }),
});

const AvatarSelectionFormSchema = z.object({
  avatar: z.string().min(1, {
    message: "Please select an avatar",
  }),
});
const SignUpFormSchema = UserInfoFormSchema.merge(AvatarSelectionFormSchema);

// ::::: FORM TYPES ::::: //
export type UserInfoFormData = z.infer<typeof UserInfoFormSchema>;
export type AvatarSelectionFormData = z.infer<typeof AvatarSelectionFormSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;

const SignUpForm = () => {
  // ::::: FORM INITIALIZATION ::::: //
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      // age: 0,
      avatar: "",
    },
  });

  const router = useRouter();

  // ::::: FORM STATES ::::: //
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === 1;

  const stepFields = {
    0: ["name", "age"],
    1: ["avatar"],
  } as const satisfies Record<number, (keyof SignUpFormData)[]>;

  // INITIALIZE NEW PLAYER
  const onSubmit = (data: SignUpFormData) => {
    // Handle the initialization logic here

    // Save the player data to localStorage
    let playerData: PlayerData = { identity: data, stats: { level: 1, xp: 0 } };
    localStorage.setItem("PLAYER", JSON.stringify(playerData));

    // Redirect to the home page
    router.push("/");
    console.log(data, "PLAYER INITIALIZED SUCCESSFULLY");
  };

  const handleNext = async () => {
    const isValid = await form.trigger(stepFields[currentStep as 0 | 1]);
    if (!isValid) return;

    if (isLastStep) {
      form.handleSubmit(onSubmit)();
    } else {
      setCurrentStep((step) => step + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        className="w-full flex flex-col justify-start items-center flex-1 relative"
      >
        {/* FORM STEPS */}

        {currentStep === 0 && <UserInfoForm form={form} />}

        {currentStep === 1 && <AvatarSelectionForm form={form} />}

        <div className="w-full max-w-md flex justify-center items-center mt-24 px-10 ">
          <Button
            type="submit"
            variant="outline"
            className="w-full font-eurostile uppercase tracking-[0.25em] text-lg p-4 py-6"
          >
            {isLastStep ? "Initialize" : "Next"}
          </Button>
        </div>
      </form>

      <div className="w-full flex justify-center items-center py-4">
        <span className="text-[0.6rem] text-muted-foreground uppercase">
          beta v0.0.1
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
