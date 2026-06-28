import ProfileCard from "@/components/cards/user-profile";
import { Button } from "@/components/ui/button";
import Quests from "./sections/quests";
import Summary from "./sections/summary";

export default function Home() {
  return (
    <div>
      <Summary />
      <Quests />
    </div>
  );
}
