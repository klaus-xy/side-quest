import QuestCard from "@/components/cards/quest-card";
import LogItem from "@/components/items/log-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { QUESTS } from "@/lib/quests";

const QuestLogs = () => {
  return (
    <section>
      {/* QUESTS LOGS */}
      <Accordion
        className="max-w-lg space-y-4"
        type="multiple"
        defaultValue={["quest-logs"]}
      >
        <AccordionItem value="quest-logs">
          <div className="flex justify-start items-center gap-2 my-4">
            {/* ACCORDION TRIGGER */}
            <AccordionTrigger showIcon={false}>
              <h4 className="text-primary text-xs">[+] Quests Logs</h4>
            </AccordionTrigger>
            <Separator className="flex-1" />
          </div>
          {/* ACTIVE QUEST LIST */}
          <AccordionContent className="space-y-2">
            <LogItem />
            <LogItem />
            <LogItem />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* <div>
        <p className="text-muted-foreground text-xs italic">
          No quests have been completed yet. Once you complete quests, they will
          appear here.
        </p>
      </div> */}

      <Separator className="mt-24" />

      <div className="flex flex-col items-center justify-center gap-2 mt-8">
        <span className="text-muted-foreground text-center text-xs">
          Progress is saved locally and persists across sessions.
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="mt-4 uppercase text-xs">
              // wipe all data
            </Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle className="text-destructive font-eurostile ">
                Delete Protocol :: Initiated
              </DialogTitle>
              <DialogDescription className="text-xs">
                Wiping your data is irreversable and permanent. This will reset
                your progress. Side Quest .Inc will not be able to help you
                recover your progress. Are you sure you want to continue?
              </DialogDescription>
            </DialogHeader>

            <div>
              <span className="text-destructive ">
                Enter [Player Name] to confirm delete
              </span>
              <Input id="age" placeholder="Player Name" required type="text" />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button variant="destructive" type="submit">
                Confirm Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default QuestLogs;
