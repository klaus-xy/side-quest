import { Separator } from "@/components/ui/separator";
import React from "react";

const QuestLogs = () => {
  return (
    <section>
      <div className="flex justify-start items-center gap-2 my-4">
        <h4 className="text-primary text-xs">[+] Quest Logs</h4>
        <Separator className="flex-1" />
      </div>
    </section>
  );
};

export default QuestLogs;
