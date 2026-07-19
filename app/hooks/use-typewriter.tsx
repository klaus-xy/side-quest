"use client";

import { useEffect, useState } from "react";

interface UseTypewriterProps {
  lines: string[];
  typingInterval?: number;
  startDelay?: number;
  delayBetweenLines?: number;
  replaceFunction?: (input: string) => string;
}

interface TypingCursorProps {
  cursorChar?: string;
  blinkSpeed?: number;
}
export const TypingCursor = ({ cursorChar = "_" }: TypingCursorProps) => {
  return (
    // <motion.span
    //   animate={{
    //     opacity: [1, 0],
    //     // scaleY: [1, 0.2],
    //     transition: {
    //       ease: ["easeIn", "easeOut"],
    //       duration: 0.25,
    //       repeat: Infinity,
    //       repeatType: "reverse",
    //     },
    //   }}
    // >
    <span className="animate-pulse">{cursorChar}</span>
    // </motion.span>
  );
};

const useTypewriter = ({
  lines,
  typingInterval = 50,
  startDelay = 0,
  delayBetweenLines = 50,
  replaceFunction,
}: UseTypewriterProps) => {
  const [currentLineIndex, setCurrentLine] = useState(0); // current line index
  const [currentText, setCurrentText] = useState(""); // updates current text for each line
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(startDelay === 0);

  // Waits startDelay ms before typing begins.
  useEffect(() => {
    if (startDelay === 0) return;
    const delay = setTimeout(() => setHasStartedTyping(true), startDelay);
    return () => clearTimeout(delay);
  }, [startDelay]);

  // Updates current text.
  useEffect(() => {
    if (!hasStartedTyping) return;
    // Get current modified line to type
    if (currentLineIndex < lines.length) {
      const lineToType = replaceFunction
        ? replaceFunction(lines[currentLineIndex])
        : lines[currentLineIndex];

      if (currentText.length < lineToType.length) {
        const delay = setTimeout(() => {
          setCurrentText(lineToType.slice(0, currentText.length + 1)); // update current text
        }, typingInterval);
        return () => clearTimeout(delay);
      } else {
        setIsLineComplete(true);
      }
    }
    // console.log("Line ", currentLineIndex, " is complete.");
  }, [currentText, currentLineIndex, hasStartedTyping]);

  // Updates current line.
  useEffect(() => {
    if (isLineComplete) {
      const delay = setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLine((prevLineIndex) => prevLineIndex + 1); // increment line index
          setCurrentText(""); // reset current text
          setIsLineComplete(false); // reset line completion status
        } else {
          setIsTypingComplete(true);
          // console.log("Typing is complete.");
        }
      }, delayBetweenLines);

      return () => clearTimeout(delay);
    }
    // console.log("New Line ", currentLineIndex, " is being typed.");
  }, [isLineComplete, currentLineIndex]);

  // RETURN PAYLOAD ////////
  return { currentLineIndex, currentText, isTypingComplete };
};

export default useTypewriter;
