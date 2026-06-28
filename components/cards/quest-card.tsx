import React from "react";
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

const QuestCard = () => {
  return (
    <Card className="rounded-none border">
      <CardHeader>
        <span className="text-xs">🍵 Category</span>
        <CardTitle>Quest Title</CardTitle>
        <CardDescription>
          Quest Description. E.g Record a voice memo, about 30 seconds, of a
          melody or rhythm stuck in your head.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-start gap-16 py-2"></div>
      </CardContent>
      <CardFooter>
        <span className="w-full flex justify-between text-primary">+25 XP</span>
        <CardAction className="flex justify-end gap-2">
          <Button variant={"outline"}>Abandon</Button>
          <Button>Complete</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default QuestCard;
