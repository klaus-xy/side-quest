import LogItem from "@/components/items/log-item";
import { Separator } from "@/components/ui/separator";
import React from "react";

const QuestLogs = () => {
  return (
    <section>
      <div className="flex justify-start items-center gap-2 my-4">
        <h4 className="text-primary text-xs">[+] Quest Logs</h4>
        <Separator className="flex-1" />
      </div>

      {/* <div>
        <p className="text-muted-foreground text-xs italic">
          No quests have been completed yet. Once you complete quests, they will
          appear here.
        </p>
      </div> */}
      <div className="space-y-2">
        <LogItem />
        <LogItem />
        <LogItem />
      </div>
      <Separator className="mt-24" />
    </section>
  );
};

export default QuestLogs;
