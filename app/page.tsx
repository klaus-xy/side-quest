import ProfileCard from "@/components/cards/user-profile";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="">
      <ProfileCard />

      {/* QUEST FILTERS */}
      {/* Toggles */}

      {/* ACTIVE QUESTS */}
      <div className="flex justify-start items-center p-4 gap-4 flex-wrap">
        <Button variant="default">All Quests</Button>
        <Button variant="default">Social</Button>
        <Button variant="outline">Unusual</Button>
        <Button variant="outline">Fitness</Button>
      </div>
    </section>
  );
}
