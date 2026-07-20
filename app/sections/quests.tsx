"use client";

import QuestCard from "@/components/cards/quest-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Quest, QUEST_CATEGORIES } from "@/lib/quests";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Quests = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  const handleInitiateQuest = (id: Quest["id"]) => {
    // Rebuild and Mutate Quests State
    setQuests((prevQuests) => {
      const updatedQuests = prevQuests.map((quest) =>
        quest.id === id
          ? { ...quest, status: "Initiated" as Quest["status"] }
          : quest,
      );
      // Push changes to Update LocalStorage/DB
      localStorage.setItem("QUESTS", JSON.stringify(updatedQuests));
      return updatedQuests;
    });

    // Notify [Player] about the Quest status
    const quest = quests.find((quest) => quest.id === id);
    toast(`Quest :: ${quest?.title} has been initiated.`, {
      description: " Quest description. You've got one hour. Let's do this!",
    });
  };

  const handleCompleteQuest = (id: Quest["id"]) => {
    // Rebuild and Mutate Quests State
    setQuests((prevQuests) => {
      const updatedQuests = prevQuests.map((quest) =>
        quest.id === id
          ? { ...quest, status: "Completed" as Quest["status"] }
          : quest,
      );
      // Push changes to Update LocalStorage/DB
      localStorage.setItem("QUESTS", JSON.stringify(updatedQuests));
      return updatedQuests;
    });

    // Notify [Player] about the Quest status
    const quest = quests.find((quest) => quest.id === id);
    toast(`Quest :: ${quest?.title} has been Completed!`, {
      description: `You've earned ${quest?.xp} XP!`,
    });
  };
  const handleAbandonQuest = (id: Quest["id"]) => {
    // Rebuild and Mutate Quests State
    setQuests((prevQuests) => {
      const updatedQuests = prevQuests.map((quest) =>
        quest.id === id
          ? { ...quest, status: "Abandoned" as Quest["status"] }
          : quest,
      );
      // Push changes to Update LocalStorage/DB
      localStorage.setItem("QUESTS", JSON.stringify(updatedQuests));
      return updatedQuests;
    });

    // Notify [Player] about the Quest status
    const quest = quests.find((quest) => quest.id === id);
    toast(`Quest :: ${quest?.title} has been abandonded.`, {
      description: "You can try again later!",
    });
  };

  useEffect(() => {
    // Fetch All Quests
    const quests = JSON.parse(localStorage.getItem("QUESTS") || "[]");
    setQuests(quests);
  }, []);

  return (
    <section>
      {/* QUEST FILTERS */}
      {/* Toggle Filters */}
      <div className="flex justify-start items-center my-4 gap-4 flex-wrap">
        {QUEST_CATEGORIES.map((category) => (
          <Button
            key={category.value}
            variant={category.active ? "default" : "outline"}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <Accordion
        className="max-w-lg space-y-4"
        type="multiple"
        defaultValue={["active-quests", "new-quests"]}
      >
        {/* ACTIVE QUESTS */}
        <AccordionItem value="active-quests">
          <div className="flex justify-start items-center gap-2 my-4">
            {/* ACCORDION TRIGGER */}
            <AccordionTrigger showIcon={false}>
              <h4 className="text-primary text-xs">[+] Active Quests</h4>
            </AccordionTrigger>
            <Separator className="flex-1" />
          </div>
          {/* ACTIVE QUEST LIST */}
          <AccordionContent className="space-y-4 ">
            {quests.length === 0 && <p>No active quests found.</p>}
            {quests
              .filter((quest) => quest.status === "Initiated")
              .map((quest) => (
                <QuestCard
                  key={quest.id}
                  title={quest.title}
                  description={quest.description}
                  category={quest.category}
                  xp={quest.xp}
                  tier={quest.tier}
                  status={quest.status}
                  onQuestAbandon={() => handleAbandonQuest(quest.id)}
                  onQuestComplete={() => handleCompleteQuest(quest.id)}
                />
              ))}
          </AccordionContent>
        </AccordionItem>

        {/* NEW QUESTS */}
        <AccordionItem value="new-quests">
          <div className="flex justify-start items-center gap-2 my-4">
            {/* ACCORDION TRIGGER */}
            <AccordionTrigger showIcon={false}>
              <h4 className="text-primary text-xs">[+] New Quests</h4>
            </AccordionTrigger>
            <Separator className="flex-1" />
          </div>
          {/* NEW QUESTS LIST */}
          <AccordionContent className="space-y-4">
            {quests.length === 0 && <p>No new quests found.</p>}
            {quests
              .filter((quest) => quest.status === "New")
              .map((quest) => (
                <QuestCard
                  key={quest.id}
                  title={quest.title}
                  description={quest.description}
                  category={quest.category}
                  xp={quest.xp}
                  tier={quest.tier}
                  status={quest.status}
                  onQuestInitiate={() => handleInitiateQuest(quest.id)}
                />
              ))}
          </AccordionContent>
        </AccordionItem>

        {/* ABANDONED QUESTS */}
        <AccordionItem value="abandoned-quests">
          <div className="flex justify-start items-center gap-2 my-4">
            {/* ACCORDION TRIGGER */}
            <AccordionTrigger showIcon={false}>
              <h4 className="text-destructive text-xs">[+] Abandoned Quests</h4>
            </AccordionTrigger>
            <Separator className="flex-1" />
          </div>
          {/* NEW QUESTS LIST */}
          <AccordionContent className="space-y-4">
            {quests.length === 0 && <p>No abandoned quests found.</p>}
            {quests
              .filter((quest) => quest.status === "Abandoned")
              .map((quest) => (
                <QuestCard
                  key={quest.id}
                  title={quest.title}
                  description={quest.description}
                  category={quest.category}
                  xp={quest.xp}
                  tier={quest.tier}
                  status={quest.status}
                  onQuestInitiate={() => handleInitiateQuest(quest.id)}
                />
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Quests;
