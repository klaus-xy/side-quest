export interface QuestCategory {
  value: string;
  label: string;
  active?: boolean;
}

export const QUEST_CATEGORIES: QuestCategory[] = [
  { value: "all", label: "All Quests", active: true },
  { value: "social", label: "🤼‍♀️ Social", active: true },
  { value: "unusual", label: "👽 Unusual" },
  { value: "physical", label: "💪🏽 Physical" },
  { value: "tech", label: "👩🏽‍💻 Tech " },
  { value: "random", label: "🎲 Random " },
];

export type QuestStatus = "New" | "Initiated" | "Abandoned";

export interface Quest {
  title: string;
  description: string;
  category: string;
  xp: number;
  tier: number;
  status: QuestStatus;
}

export const QUESTS: Quest[] = [
  {
    title: "Sound Byte 🎶",
    description:
      "Record a voice memo, about 30 seconds, of a melody or rhythm stuck in your head.",
    category: "Create",
    xp: 25,
    tier: 1,
    status: "Initiated",
  },
  {
    title: "System Reboot 🤖",
    description: "Drink a full glass of water right now.",
    category: "Physical",
    xp: 50,
    tier: 1,
    status: "Initiated",
  },
  {
    title: "Social Anxiety Who? 🤷🏽‍♀️",
    description:
      "Spontaneously start to dance to background music in a coffee shop or a park.",
    category: "Social",
    xp: 100,
    tier: 2,
    status: "Initiated",
  },
  {
    title: "Commitment 🧑‍🤝‍🧑",
    description: "Push a new git commit -m Sponsored by SideQuest.inc.",
    category: "Tech",
    xp: 20,
    tier: 1,
    status: "New",
  },
  {
    title: "Touch Grass 🌱",
    description: "Go on. Touch grass.  Touch grass.  Touch grass.",
    category: "Social",
    xp: 100,
    tier: 2,
    status: "New",
  },
  {
    title: "Social Anxiety Who? v2 🦖",
    description:
      "Go get groceries in a full superhero suit or dinosaur onesie just because you can... and it's comfortable.",
    category: "Social",
    xp: 100,
    tier: 3,
    status: "New",
  },
  {
    title: "Social Anxiety Who? v3 👀",
    description:
      "Look at a stranger's delicious food/snack and ask for a taste with absolute, zero-guilt confidence.",
    category: "Social",
    xp: 100,
    tier: 3,
    status: "New",
  },
];
