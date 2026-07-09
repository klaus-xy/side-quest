import QuestCard from "@/components/cards/quest-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Quests = () => {
  return (
    <section>
      {/* QUEST FILTERS */}
      {/* Toggles */}
      <div className="flex justify-start items-center my-4 gap-4 flex-wrap">
        <Button variant="default">All Quests</Button>
        <Button variant="default">🤼‍♀️ Social</Button>
        <Button variant="outline">👽 Unusual</Button>
        <Button variant="outline">💪🏽 Physical</Button>
        <Button variant="outline">👩🏽‍💻 Tech </Button>
      </div>

      {/* ACTIVE QUESTS */}
      <div className="flex justify-start items-center gap-2 my-4">
        <h4 className="text-primary text-xs">[+] Active Quests</h4>
        <Separator className="flex-1" />
      </div>
      {/* QUEST LIST */}
      <div className="space-y-4">
        <QuestCard
          title="Sound Byte 🎶"
          description="Record a voice memo, about 30 seconds, of a melody or rhythm stuck in your head."
          category="Create"
          xp={25}
          tier={1}
          newQuest={false}
        />
        <QuestCard
          title="System Reboot 🤖"
          description="Drink a full glass of water right now."
          category="Physical"
          xp={50}
          tier={1}
        />
        <QuestCard
          title="Social Anxiety Who? 🤷🏽‍♀️"
          description="Spontaneously start to dance to background music in a coffee shop or a park."
          category="Social"
          xp={100}
          tier={2}
          newQuest={false}
        />

        {/* NEW QUESTS */}
        <div className="flex justify-start items-center gap-2 my-4">
          <h4 className="text-primary text-xs">[+] New Quests</h4>
          <Separator className="flex-1" />
        </div>
        <QuestCard
          title="Commitment 🧑‍🤝‍🧑"
          description="Push a new git commit -m Sponsored by SideQuest.inc."
          category="Tech"
          xp={20}
          tier={1}
          newQuest={true}
        />
        <QuestCard
          title="Touch Grass 🌱"
          description="Go on. Touch grass.  Touch grass.  Touch grass."
          category="Social"
          xp={100}
          tier={2}
        />
        <QuestCard
          title="Social Anxiety Who? v2 🦖"
          description="Go get groceries in a full superhero suit or dinosaur onesie just because you can... and it's comfortable."
          category="Social"
          xp={100}
          tier={3}
        />
        <QuestCard
          title="Social Anxiety Who? v3 👀"
          description="Look at a stranger's delicious food/snack and ask for a taste with absolute, zero-guilt confidence."
          category="Social"
          xp={100}
          tier={3}
        />
      </div>
    </section>
  );
};

export default Quests;
