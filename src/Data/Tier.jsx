export const TIERS = [
  {
    id: 1,
    name: "Master",
    divisions: ["IV", "III", "II", "I"],
    maxStars: 5,
  },
  {
    id: 2,
    name: "Grandmaster",
    divisions: ["IV", "III", "II", "I"],
    maxStars: 5,
  },
  {
    id: 3,
    name: "Epic",
    divisions: ["V", "IV", "III", "II", "I"],
    maxStars: 5,
  },
  {
    id: 4,
    name: "Legend",
    divisions: ["V", "IV", "III", "II", "I"],
    maxStars: 5,
  },
  {
    id: 5,
    name: "Mythic",
    divisions: [],
    maxStars: 25,
  },
  {
    id: 6,
    name: "Honor",
    divisions: [],
    maxStars: 50,
  },
  {
    id: 7,
    name: "Glory",
    divisions: [],
    maxStars: 100,
  },
  {
    id: 8,
    name: "Immortal",
    divisions: [],
    maxStars: 999,
  },
];

export function getTier(name) {
  return TIERS.find((tier) => tier.name === name);
}

export function getTierIndex(name) {
  return TIERS.findIndex((tier) => tier.name === name);
}