"use client";

import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import useTypewriter, { TypingCursor } from "@/app/hooks/use-typewriter";

const UserProfileCard = () => {
  const typingLines = ["KLAUS 117"];
  const { currentText } = useTypewriter({
    lines: typingLines,
    typingInterval: 100,
  });
  return (
    <Card className="rounded-none border">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader> */}
      <CardContent>
        <div className="relative flex justify-start gap-14 py-2">
          {/* XP and Level */}

          <div className="relative w-28 aspect-square flex flex-col items-center justify-center font-bold border-6 rounded-full">
            <Avatar className="w-8 h-auto absolute -top-4 -right-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              {/* <AvatarImage src="/images/cool-klaus.jpg" /> */}
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="animate-pulse bg-amber-500" />
            </Avatar>
            <div className="text-center">
              Level <span className="text-4xl block">01</span>
            </div>
          </div>

          {/* Name and Info */}
          <div className="flex flex-col justify-around">
            <h3 className="w-max min-w-full min-h-9 text-primary">
              {currentText}
              {/* <TypingCursor /> */}
            </h3>
            <Badge
              variant="outline"
              className="absolute -top-2 right-0 text-[10px] border-amber-500 "
            >
              Novice
            </Badge>
            {/* <Progress value={25} className="w-full rounded-none" /> */}
            <div className="text-xs">
              <span>
                ⚡Max Streak :: <span>01</span> <br />{" "}
              </span>
              <span
                className="text-muted-foreground font-semibold
              "
              >
                🧑🏽‍🎤 Quests Completed :: 25
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default UserProfileCard;
