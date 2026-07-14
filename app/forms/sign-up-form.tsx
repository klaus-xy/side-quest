"use client";

import { useState } from "react";
import {
  FieldGroup,
  FieldDescription,
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
import { Dice1, Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import useRandomNameGenerator from "../hooks/useRandomNameGenerator";

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
  const { generateRandomName } = useRandomNameGenerator();

  const [playerName, setPlayerName] = useState("");
  return (
    <div
      className={`w-full flex flex-col justify-center items-center max-w-md  p-6 mx-2 ${className}`}
    >
      <span className="text-[0.7rem] text-primary uppercase font-semibold tracking-[0.3em]">
        [ Welcome ]
      </span>
      <h1 className="min-h-10 mb-4 text-center text-3xl">
        {currentText}
        <TypingCursor cursorChar="⋮" />
      </h1>

      <form className="w-full mt-8">
        <FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="player-name">[Player Name]</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="player-name"
                  placeholder="Evil Rabbit"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  required
                />
                <InputGroupAddon align="inline-end">
                  <Button
                    variant="link"
                    size="icon"
                    className="p-0"
                    type="button"
                    onClick={() => setPlayerName(generateRandomName())}
                    aria-label="Generate random player name"
                  >
                    <Dices />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="age">[Age]</FieldLabel>
              <Input id="age" placeholder="18" required type="number" />
              {/* <FieldDescription>Enter your birthday</FieldDescription> */}
            </Field>
          </FieldGroup>
          {/* <FieldSeparator /> */}
          <FieldDescription className="text-xs">
            <span className="font-medium text-primary">Side Quest OS™</span> has
            identified you as an unregistered player in the System. Provide your
            identification data to initialize your player profile.
          </FieldDescription>
        </FieldGroup>
      </form>
    </div>
  );
};

export default SignUpForm;
