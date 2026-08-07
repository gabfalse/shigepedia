import { TIERS, getTier, getTierIndex } from "../Data/Tier";

/**
 * Mengembalikan rank berikutnya setelah naik 1 bintang.
 */
export function getNextRank(rank) {
  let { tier, division, star } = rank;

  const currentTier = getTier(tier);

  // Mythic ke atas (tanpa divisi)
  if (currentTier.divisions.length === 0) {
    star++;

    if (star > currentTier.maxStars) {
      const nextTier = TIERS[getTierIndex(tier) + 1];

      if (!nextTier) {
        return {
          tier,
          division: null,
          star: currentTier.maxStars,
        };
      }

      return {
        tier: nextTier.name,
        division: null,
        star: 1,
      };
    }

    return {
      tier,
      division: null,
      star,
    };
  }

  // Master - Legend
  star++;

  if (star <= currentTier.maxStars) {
    return {
      tier,
      division,
      star,
    };
  }

  // reset bintang
  star = 1;

  const currentDivisionIndex = currentTier.divisions.indexOf(division);

  // masih ada divisi berikutnya
  if (currentDivisionIndex > 0) {
    return {
      tier,
      division: currentTier.divisions[currentDivisionIndex - 1],
      star,
    };
  }

  // naik tier
  const nextTier = TIERS[getTierIndex(tier) + 1];

  if (!nextTier) {
    return {
      tier,
      division,
      star: currentTier.maxStars,
    };
  }

  if (nextTier.divisions.length === 0) {
    return {
      tier: nextTier.name,
      division: null,
      star: 1,
    };
  }

  return {
    tier: nextTier.name,
    division: nextTier.divisions[0], // V atau IV
    star: 1,
  };
}

/**
 * Menghasilkan perjalanan rank sebanyak quantity bintang.
 */
export function travelRank(startRank, quantity) {
  let current = { ...startRank };

  const result = [];

  for (let i = 0; i < quantity; i++) {
    result.push(current);

    current = getNextRank(current);
  }

  return result;
}