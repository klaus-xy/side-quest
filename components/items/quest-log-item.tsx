import {
  QuestStatus,
  questStatusAccentVariants,
  questStatusVariants,
} from "@/lib/quests";
import { cn } from "@/lib/utils";
import React from "react";

interface LogItemProps {
  title: string;
  summary?: string;
  timestamp?: string;
  status: QuestStatus;
}

const QuestLogItem = ({
  title = "Quest Title",
  summary,
  timestamp,
  status = "Completed",
}: LogItemProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 ronded border bor bg-muted/10 text-xs relative">
      <div
        className={cn(
          "w-1 h-full absolute top-0 left-0",
          questStatusAccentVariants({ status }),
        )}
      ></div>
      {/* QUEST TITLE AND SUMMARY */}
      <p>👽 {title}</p>

      {/* TIMESTAMP AND STATUS */}
      <div
        className={cn(
          "flex justify-between items-center",
          questStatusVariants({ status }),
        )}
      >
        <span className="text-xs">[ Quest {status} ]</span>
        <span className="text-xs ">[ 2023-08-15 14:32:10 ]</span>
      </div>
    </div>
  );
};

export default QuestLogItem;
