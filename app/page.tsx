"use client";
import Quests from "./sections/quests";
import Summary from "./sections/summary";
import QuestLogs from "./sections/questLogs";
import SignUpPage from "./pages/sign-up-page";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // TODO:: MAKE THIS A PROTECTED ROUTE WRAPPER TO AVOID MAKING THE WHOLE COMPONENT A CLIENT SIDE COMPONENT
  useEffect(() => {
    // const isInitialized = sessionStorage.getItem("PLAYER_INITIALIZED");
    const isInitialized = localStorage.getItem("PLAYER");
    if (!isInitialized) {
      router.push("/initialize");
    }
  }, [router]);

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
