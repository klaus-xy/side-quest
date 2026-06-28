import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileCard = () => {
  return (
    <Card className="rounded-none border">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader> */}
      <CardContent>
        <div className="flex justify-start gap-16 py-2">
          {/* XP and Level */}

          <div className="relative w-28 aspect-square flex flex-col items-center justify-center font-bold border-6 rounded-full">
            <Avatar className="w-8 h-auto absolute -top-4 -right-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="animate-pulse" />
            </Avatar>
            Level <br /> 01
          </div>

          {/* Name and Info */}
          <div className="flex flex-col justify-center">
            <h3 className="w-max text-primary">KLAUS 117</h3>

            <div className="text-xs">
              <span>
                ⚡Streak :: 01 <br />{" "}
              </span>
              <span
                className="text-muted-foreground
              "
              >
                🧑🏽‍🎤 Quests Completed :: 25{" "}
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

export default ProfileCard;
