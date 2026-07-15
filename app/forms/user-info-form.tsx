"use client";

import {
  FieldGroup,
  FieldDescription,
  FieldError,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useTypewriter, { TypingCursor } from "../hooks/use-typewriter";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Dice1, Dices, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import useRandomNameGenerator from "../hooks/useRandomNameGenerator";
import { Controller, UseFormReturn } from "react-hook-form";
import { SignUpFormData } from "../pages/sign-up-page";

interface SignUpFormProps {
  className?: string;
  form: UseFormReturn<SignUpFormData>;
}
const UserInfoForm = ({ className, form }: SignUpFormProps) => {
  const typingLines = ["New Player"];
  const { currentText } = useTypewriter({
    lines: typingLines,
    typingInterval: 100,
    startDelay: 600,
  });
  const { generateRandomName } = useRandomNameGenerator();

  const { control } = form;

  return (
    <div
      className={`w-full flex flex-col justify-center items-center max-w-md  p-6 mx-2 ${className}`}
    >
      <span className="text-[0.7rem] text-primary uppercase font-semibold tracking-[0.3em]">
        [ Welcome ]
      </span>
      <h1 className="min-h-10 mt-2 mb-4 text-center text-3xl">
        {currentText}
        <TypingCursor cursorChar="⋮" />
      </h1>

      <div className="w-full mt-8">
        <FieldGroup>
          <FieldGroup>
            {/* PLAYER NAME FORM FIELD */}
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.invalid}>
                  <FieldLabel htmlFor="player-name">[Player Name]</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="player-name"
                      placeholder="Evil Rabbit"
                      aria-invalid={!!fieldState.invalid}
                      {...field}
                    />
                    <InputGroupAddon align="inline-end">
                      <Button
                        variant="link"
                        size="icon"
                        className="p-0"
                        type="button"
                        onClick={() => field.onChange(generateRandomName())}
                        aria-label="Generate random player name"
                      >
                        <Dices />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            {/* AGE FORM FIELD */}
            <Controller
              control={control}
              name="age"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.invalid}>
                  <FieldLabel htmlFor="age">[Age]</FieldLabel>
                  <Input
                    id="age"
                    placeholder="16"
                    type="number"
                    aria-invalid={!!fieldState.invalid}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  {/* <FieldDescription>Enter your birthday</FieldDescription> */}
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </FieldGroup>
          {/* <FieldSeparator /> */}
          <FieldDescription className="text-xs">
            <span className="font-medium text-primary">Side Quest OS™</span> has
            identified you as an unregistered player in the System. Provide your
            identification data to initialize your player profile.
          </FieldDescription>
        </FieldGroup>
      </div>
    </div>
  );
};

export default UserInfoForm;
