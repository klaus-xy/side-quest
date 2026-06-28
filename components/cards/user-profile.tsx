import React from "react";
import { Card, CardContent } from "../ui/card";

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
          <div className=" w-28 aspect-square flex flex-col items-center justify-center border-6 rounded-full">
            Level <br /> 01
          </div>

          {/* Name and Info */}
          <div className="flex flex-col justify-center">
            <h3 className="w-max text-primary">KLAUS 117</h3>

            <div className="text-xs">
              <span>Streak 01 </span>
              <span>Quests Completed 25 </span>
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
