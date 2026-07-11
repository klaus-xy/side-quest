"use client";

import { SITE_STATUS, SITE_STATUS_LABEL } from "@/lib/site-status";
import useTypewriter from "@/app/hooks/use-typewriter";

const Header = () => {
  const typingLines = [SITE_STATUS_LABEL[SITE_STATUS]];
  const { currentText } = useTypewriter({
    lines: typingLines,
    typingInterval: 65,
    startDelay: 2500,
  });
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-1  uppercase pb-6">
      <span
        className={` text-[0.5rem] tracking-[0.8em] ${SITE_STATUS === "online" ? "text-primary" : SITE_STATUS === "maintenance" ? "text-amber-500" : "text-muted-foreground"}`}
      >
        [{currentText}]
      </span>
      <h1>Side Quest .Inc</h1>
      <h2 className="text-primary text-[0.7rem] font-medium">
        Tired of normal life? Join Side-Quest.
      </h2>
    </div>
  );
};

export default Header;
