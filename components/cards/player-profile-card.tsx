"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import useTypewriter, { TypingCursor } from "@/app/hooks/use-typewriter";
import { SITE_STATUS } from "@/lib/site-status";

export interface PlayerIdentity {
  name: string;
  age: number;
  avatar: string;
}

export interface PlayerStats {
  level: number;
  xp: number;
  // status: string;
}

export interface PlayerData {
  identity: PlayerIdentity;
  stats: PlayerStats;
}
const EMPTY_PLAYER_DATA: PlayerData = {
  identity: { name: "NULL ::/", age: 0, avatar: "" },
  stats: { level: 0, xp: 0 },
};

const PlayerProfileCard = () => {
  // :::::: PLAYER INFO :::::: //
  const [playerData, setPlayerData] = useState<PlayerData>(EMPTY_PLAYER_DATA);

  const fetchPlayerData = async () => {
    if (typeof window === "undefined") return EMPTY_PLAYER_DATA;
    const playerData = JSON.parse(localStorage.getItem("PLAYER") || "{}");
    setPlayerData(playerData);
  };

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const typingLines = [playerData.identity.name];
  const { currentText } = useTypewriter({
    lines: typingLines,
    typingInterval: 100,
    startDelay: 600,
  });

  return (
    <Card className="rounded-none border">
      <CardContent>
        <div className="flex flex-col">
          {/* TOP SECTION*/}
          <div className="relative flex justify-start gap-12 py-2">
            {/* XP and Level */}
            <div className="relative w-28 h-28 shrink-0 flex flex-col items-center justify-center font-bold border-6 rounded-full">
              <Avatar className="w-8 h-8 absolute -top-4 -right-6 outline-2 outline-offset-1 outline-primary">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                {/* <AvatarImage src="/images/cool-klaus.jpg" /> */}
                <AvatarImage src={playerData.identity.avatar} />
                <AvatarFallback>::</AvatarFallback>
                <AvatarBadge
                  className={` animate-pulse ${SITE_STATUS === "online" ? "bg-primary" : SITE_STATUS === "maintenance" ? "bg-amber-500" : "bg-muted-foreground"}`}
                />
              </Avatar>
              <div className="text-center">
                Level <span className="text-4xl block font-eurostile">01</span>
              </div>
            </div>

            {/* Name and Info */}
            <div className="flex flex-col justify-start gap-2 py-2  ">
              <h3 className="w-max min-w-full min-h-8 text-lg text-primary font-eurostile">
                {currentText}
                <TypingCursor cursorChar="⋮" />
              </h3>
              <Badge
                variant="outline"
                className="absolute -top-2 right-0 text-[10px] font-semibold border-amber-500 uppercase"
              >
                {/* Wild */}
                {/* Wild Cat */}
                Quest Hunter
              </Badge>

              <div className="flex ">
                {/* RANK */}
                <Badge
                  variant="outline"
                  className="w-10 h-10 flex flex-col justify-center items-center gap-0 rounded  text-[0.45rem] "
                >
                  <span className="text-2xl text-cyan-500 font-eurostile">
                    B
                  </span>
                  <span className=""> RANK </span>
                </Badge>

                {/* PROGRESS TRACKER */}
                {/* <span className="text-[0.6rem] text-primary">
                24/100 XP to Next Level
              </span>
              <span className="text-xs text-primary font-semibold">
                5200 XP
              </span> */}
                {/* <Progress value={25} className="w-full rounded-none" /> */}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION*/}
          <div>
            <div>
              {/* PLAYERSTATS */}
              <div className="flex text-[0.55rem] text-center uppercase gap-1">
                <span className="text-amber-500 font-semibold">
                  [⚡] Streak <span>05</span> <br />{" "}
                </span>
                <span className="text-muted-foreground font-semibold">
                  [🧑🏽‍🎤] Quests Completed 25
                </span>
                <span className="text-muted-foreground font-semibold">
                  [🧑🏽] Quests Forfeited 00
                </span>
              </div>
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

export default PlayerProfileCard;
