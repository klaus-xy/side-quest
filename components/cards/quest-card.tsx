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

interface QuestCardProps {
  title: string;
  description: string;
  category: string;
  xp: number;
  tier: number;
}

const QuestCard = ({
  title = " Quest Title",
  description = " Quest Description.",
  category = "Category",
  xp = 25,
  tier = 1,
}: QuestCardProps) => {
  const handleCompleteQuest = () => {};
  return (
    <Card className="rounded-none border">
      <CardHeader>
        <div className="flex justify-between">
          <span className="text-xs">🍵 {category}</span>
          <span className="text-xs text-muted-foreground">
            Tier {tier} / Easy
          </span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-start gap-16 py-2"></div>
      </CardContent>
      <CardFooter>
        <span className="w-full flex justify-between text-primary">
          +{xp} XP
        </span>
        <CardAction className="flex justify-end gap-2">
          <Button variant={"outline"}>Abandon</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button onClick={handleCompleteQuest}>Complete</Button>
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
          </Dialog>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default QuestCard;
