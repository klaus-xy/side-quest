import QuestCard from "@/components/cards/quest-card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Quests = () => {
  return (
    <section>
      <div className="flex justify-start items-center gap-2 my-4">
        <h4 className="text-primary text-xs">Quests</h4>
        <Separator className="" />
      </div>
      {/* QUEST LIST */}
      <div className="space-y-4">
        <QuestCard />
        <QuestCard />
      </div>
    </section>
  );
};

export default Quests;
