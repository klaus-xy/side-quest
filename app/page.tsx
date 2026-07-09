import ProfileCard from "@/components/cards/user-profile-card";
import { Button } from "@/components/ui/button";
import Quests from "./sections/quests";
import Summary from "./sections/summary";
import QuestLogs from "./sections/questLogs";

export default function Home() {
  return (
    <div>
      <Summary />
      <Quests />
      <QuestLogs />

      <div className="flex flex-col items-center justify-center gap-2 mt-8">
        <span className="text-muted-foreground text-center text-xs">
          Progress is saved locally and persists across sessions.
        </span>
        <Button variant="destructive" className="mt-4 uppercase text-xs">
          // wipe all data
        </Button>
      </div>
    </div>
  );
}
