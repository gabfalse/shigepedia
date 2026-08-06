import { RANKS } from "../../Config/Rank";

export const TIERS = RANKS.flatMap((rank) => {
  if (rank.divisions) {
    return rank.divisions.map((division) => ({
      rank: rank.id,
      name: `${rank.name} ${division}`,
      division,
    }));
  }

  return [
    {
      rank: rank.id,
      name: rank.name,
      division: null,
    },
  ];
});

export function getTier(tierName) {
  return TIERS.find((tier) => tier.name === tierName) ?? null;
}

export function getTierIndex(tierName) {
  return TIERS.findIndex((tier) => tier.name === tierName);
}

export function getTierByIndex(index) {
  return TIERS[index] ?? null;
}

export function nextTier(tierName) {
  const index = getTierIndex(tierName);

  if (index === -1) return null;

  return TIERS[index + 1] ?? null;
}

export function previousTier(tierName) {
  const index = getTierIndex(tierName);

  if (index === -1) return null;

  return TIERS[index - 1] ?? null;
}

export function isMythicTier(tierName) {
  return ["Mythic", "Honor", "Glory", "Immortal"].includes(tierName);
}

export function normalizeTier(tierName, stars) {
  // Mythic ke atas
  if (isMythicTier(tierName)) {
    if (stars <= 24) {
      return {
        tier: "Mythic",
        stars: Math.max(1, stars),
      };
    }

    if (stars <= 49) {
      return {
        tier: "Honor",
        stars,
      };
    }

    if (stars <= 99) {
      return {
        tier: "Glory",
        stars,
      };
    }

    return {
      tier: "Immortal",
      stars,
    };
  }

  // Rank biasa
  let currentTier = tierName;
  let currentStars = stars;

  while (currentStars > 5) {
    currentStars -= 5;

    const next = nextTier(currentTier);

    if (!next) break;

    currentTier = next.name;

    if (currentTier === "Mythic") {
      return normalizeTier("Mythic", currentStars);
    }
  }

  return {
    tier: currentTier,
    stars: Math.max(1, currentStars),
  };
}

export function moveOneStar(tierName, stars) {
  return normalizeTier(tierName, stars + 1);
}

export function getTotalStars(tierName, stars) {
  const tier = getTier(tierName);

  if (!tier) return 0;

  if (!isMythicTier(tierName)) {
    const tierIndex = getTierIndex(tierName);
    return (tierIndex * 5) + stars;
  }

  return 95 + stars;
}

export function countStars(
  currentTier,
  currentStars,
  targetTier,
  targetStars
) {
  const current = getTotalStars(currentTier, currentStars);
  const target = getTotalStars(targetTier, targetStars);

  return Math.max(0, target - current);
}

export function getStarBreakdown(
  currentTier,
  currentStars,
  targetTier,
  targetStars
) {
  const breakdown = [];

  let tier = currentTier;
  let stars = currentStars;

  while (!(tier === targetTier && stars === targetStars)) {
    const rankId = getTier(tier).rank;

    const current = breakdown.find((item) => item.rank === rankId);

    if (current) {
      current.stars++;
    } else {
      breakdown.push({
        rank: rankId,
        stars: 1,
      });
    }

    const next = moveOneStar(tier, stars);

    tier = next.tier;
    stars = next.stars;
  }

  return breakdown;
}