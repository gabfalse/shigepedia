import { POSITION_DATA } from "../Components/Data/PositionData";
import { PRICE_DATA } from "../Components/Data/priceData";

/*
|--------------------------------------------------------------------------
| Total bintang tiap tier
|--------------------------------------------------------------------------
*/

const getTierTotalStars = (tier) => {
  if (tier.id === "mythic") return 25;      // 0-24
  if (tier.id === "honor") return 25;       // 25-49
  if (tier.id === "glory") return 50;       // 50-99
  if (tier.id === "immortal") return 9999;  // 100+
  return tier.stars;                        // Master - Legend
};

/*
|--------------------------------------------------------------------------
| Tier -> Posisi Linear
|--------------------------------------------------------------------------
*/

export const tierToPosition = (tierId, star = 0) => {
  let position = 0;

  for (const tier of POSITION_DATA) {

    if (tier.id === tierId) {
      return position + Number(star);
    }

    position += getTierTotalStars(tier);
  }

  return position;
};

/*
|--------------------------------------------------------------------------
| Posisi -> Tier
|--------------------------------------------------------------------------
*/

export const positionToTier = (position) => {

  let current = position;

  for (const tier of POSITION_DATA) {

    const total = getTierTotalStars(tier);

    if (current < total) {

      return {
        tierId: tier.id,
        label: tier.label,
        rank: tier.rank,
        star: current,
      };

    }

    current -= total;
  }

  // Immortal tidak ada batas atas
  return {
    tierId: "immortal",
    label: "Mythic Immortal",
    rank: "immortal",
    star: current + 100,
  };
};

/*
|--------------------------------------------------------------------------
| Harga berdasarkan rank
|--------------------------------------------------------------------------
*/

export const getPriceByRank = (rank) => {
  return PRICE_DATA[rank] ?? 0;
};

/*
|--------------------------------------------------------------------------
| Harga berdasarkan posisi
|--------------------------------------------------------------------------
*/

export const getPriceByPosition = (position) => {

  const info = positionToTier(position);

  return getPriceByRank(info.rank);

};

/*
|--------------------------------------------------------------------------
| Posisi selanjutnya
|--------------------------------------------------------------------------
*/

export const nextPosition = (position) => position + 1;

/*
|--------------------------------------------------------------------------
| Posisi sebelumnya
|--------------------------------------------------------------------------
*/

export const previousPosition = (position) =>
  Math.max(0, position - 1);