import LogItem from "@/components/items/log-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
      <div className="flex flex-col items-center justify-center gap-2 mt-8">
        <span className="text-muted-foreground text-center text-xs">
          Progress is saved locally and persists across sessions.
        </span>
        <Button variant="destructive" className="mt-4 uppercase text-xs">
          // wipe all data
        </Button>
      </div>
    </section>
  );
};

export default QuestLogs;
