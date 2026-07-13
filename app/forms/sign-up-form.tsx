"use client";

import {
  FieldGroup,
  FieldDescription,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useTypewriter, { TypingCursor } from "../hooks/use-typewriter";

interface SignUpFormProps {
  className?: string;
}
const SignUpForm = ({ className }: SignUpFormProps) => {
  const typingLines = ["New Player"];
  const { currentText } = useTypewriter({
    lines: typingLines,
    typingInterval: 100,
    startDelay: 600,
  });
  return (
    <div
      className={`w-full flex flex-col justify-center items-center max-w-md  p-6 mx-2 ${className}`}
    >
      <span className="text-[0.7rem] text-primary uppercase font-semibold tracking-[0.3em]">
        [ Welcome ]
      </span>
      <h1 className="min-h-10 mb-4">
        {currentText}
        <TypingCursor cursorChar="⋮" />
      </h1>

      <form className="w-full">
        <FieldGroup>
          <FieldDescription className="text-xs">
            <span className="font-medium text-primary">Side Quest OS™</span> has
            identified you as an unregistered player in the System. Provide your
            identification data to initialize your player profile.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                [Player Name]
              </FieldLabel>
              <Input
                id="checkout-7j9-card-name-43j"
                placeholder="Evil Rabbit"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                [Age]
              </FieldLabel>
              <Input
                id="checkout-7j9-card-number-uw1"
                placeholder="18"
                required
              />
              {/* <FieldDescription>Enter your birthday</FieldDescription> */}
            </Field>
          </FieldGroup>
          {/* <FieldSeparator /> */}
        </FieldGroup>
      </form>
    </div>
  );
};

export default SignUpForm;
