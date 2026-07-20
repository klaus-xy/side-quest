"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import {
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "../ui/dialog";
import { toast } from "sonner";
import { QuestStatus } from "@/lib/quests";
import { useState } from "react";
import { set } from "zod";

interface QuestCardProps {
  title: string;
  description: string;
  category: string;
  xp: number;
  tier: number;
  status?: QuestStatus;
  onQuestInitiate?: () => void;
  onQuestComplete?: () => void;
  onQuestAbandon?: () => void;
}

const QuestCard = ({
  title = " Quest Title",
  description = " Quest Description.",
  category = "Category",
  xp = 25,
  tier = 1,
  status = "New",
  onQuestInitiate,
  onQuestAbandon,
  onQuestComplete,
}: QuestCardProps) => {
  return (
    <Card className="rounded-none border">
      <CardHeader>
        <div className="flex justify-between">
          <span className="text-xs">🍵 {category}</span>
          <span className="text-xs text-muted-foreground">
            Tier {tier} / Easy
          </span>
        </div>
        <CardTitle className="font-eurostile">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <div className="flex justify-start gap-16 py-2"></div>
      </CardContent> */}
      <CardFooter>
        <span className="w-full flex justify-between text-primary font-semibold">
          +{xp} XP
        </span>
        <CardAction className="flex justify-end gap-2">
          <Button
            variant={"outline"}
            className={`${status === "Initiated" ? "visible" : "hidden"}`}
            onClick={onQuestAbandon}
          >
            Abandon
          </Button>
          <Button
            variant={status === "Abandoned" ? "destructive" : "default"}
            onClick={
              status === "New"
                ? onQuestInitiate
                : status === "Abandoned"
                  ? onQuestInitiate
                  : onQuestComplete
            }
          >
            {status === "New"
              ? "Initiate"
              : status === "Abandoned"
                ? "Re-Initiate"
                : "Complete"}
          </Button>
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button
                onClick={newQuest ? handleInitiateQuest : handleCompleteQuest}
              >
                {newQuest ? "Initiate" : "Complete"}
              </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Quest Completed!</DialogTitle>
                <DialogDescription>
                  You have successfully completed the quest.
                </DialogDescription>
              </DialogHeader>

              <div>
                <p>
                  Complete Time ::{" "}
                  <span className="text-primary"> 24mins::5secs</span>
                </p>
                <p>
                  Complete Date ::{" "}
                  <span className="text-primary">
                    {new Date().toLocaleTimeString()}
                  </span>
                </p>
              </div>
            </DialogContent>
          </Dialog> */}
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default QuestCard;
