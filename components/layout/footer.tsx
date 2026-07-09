import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { DiscIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex  flex-col items-center justify-center py-4 gap-5">
      <Separator className="w-full mt-4 mb-10 bg-primary/50" />
      <div className="flex flex-col items-center justify-center">
        <span className="text-lg font-eurostile uppercase">
          Side Quest .Inc
        </span>
        <span className="text-[0.6rem] text-muted-foreground uppercase">
          [ Join Side-Quest .Inc ]
        </span>
      </div>

      {/* SOCIALS */}
      {/* <div className="flex gap-4 mt-4">
        <Button variant="ghost" size="sm">
          Twitter
        </Button>
        <Button variant="ghost" size="sm">
          <DiscIcon size={16} />
        </Button>
        <Button variant="ghost" size="sm">
          GitHub
        </Button>
      </div> */}

      {/* LEGAL */}
      {/* <div className="flex gap-2 mt-4">
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
      </div> */}

      <span className="text-[0.6rem] text-muted-foreground mt-4 uppercase">
        &copy; {new Date().getFullYear()} Side Quest.Inc // All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
