import { QUESTS } from "@/lib/quests";

export interface PlayerInitializationPayload {
  name: string;
  age: number;
  avatar: string;
}

export function initializePlayer(payload: PlayerInitializationPayload) {
  // Temporary POST Request
  // Save the player data to localStorage
  localStorage.setItem("PLAYER", JSON.stringify(payload));

  // Initialize Mock Data
  localStorage.setItem("QUESTS", JSON.stringify(QUESTS));
  // localStorage.setItem("COMPLETED_QUESTS", JSON.stringify([]));
  // localStorage.setItem("FORFEITED_QUESTS", JSON.stringify([]));

  // Save Player Session
  sessionStorage.setItem("PLAYER_INITIALIZED", "true");
}
