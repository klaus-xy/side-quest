import ProfileCard from "@/components/cards/player-profile-card";
import { Button } from "@/components/ui/button";
import Quests from "./sections/quests";
import Summary from "./sections/summary";
import QuestLogs from "./sections/questLogs";
import SignUpPage from "./pages/sign-up-page";
import Loading from "./loading";

export default function Home() {
  return (
    <div>
      {/* <SignUpPage /> */}
      {/* <Loading /> */}
      <Summary />
      <Quests />
      <QuestLogs />
    </div>
  );
}
