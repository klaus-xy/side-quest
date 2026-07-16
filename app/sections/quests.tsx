import QuestCard from "@/components/cards/quest-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { QUEST_CATEGORIES, QUESTS } from "@/lib/quests";

const Quests = () => {
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

      {/* ACTIVE QUESTS */}
      <Accordion
        className="max-w-lg space-y-4"
        type="multiple"
        defaultValue={["active-quests", "new-quests"]}
      >
        <AccordionItem value="active-quests">
          <div className="flex justify-start items-center gap-2 my-4">
            {/* ACCORDION TRIGGER */}
            <AccordionTrigger showIcon={false}>
              <h4 className="text-primary text-xs">[+] Active Quests</h4>
            </AccordionTrigger>
            <Separator className="flex-1" />
          </div>
          {/* ACTIVE QUEST LIST */}
          <AccordionContent className="space-y-4">
            {" "}
            {QUESTS.filter((quest) => quest.status === "Initiated").map(
              (quest) => (
                <QuestCard
                  key={quest.title}
                  title={quest.title}
                  description={quest.description}
                  category={quest.category}
                  xp={quest.xp}
                  tier={quest.tier}
                  newQuest={false}
                />
              ),
            )}
          </AccordionContent>
        </AccordionItem>

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
            {" "}
            {QUESTS.filter((quest) => quest.status === "New").map((quest) => (
              <QuestCard
                key={quest.title}
                title={quest.title}
                description={quest.description}
                category={quest.category}
                xp={quest.xp}
                tier={quest.tier}
                newQuest={false}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Quests;
``;
