import { PRICE_DATA } from "../data/priceData";
import { RANK_DATA } from "../data/rankData";
import { RANK_ORDER } from "../data/rankOrder";

/**
 * Ambil informasi rank
 */
export const getRankInfo = (rankId) => {
  return RANK_DATA.find((item) => item.id === rankId);
};

/**
 * Ambil harga per bintang
 */
export const getRankPrice = (rankId) => {
  return PRICE_DATA[rankId] ?? 0;
};

/**
 * Cari index rank pada urutan rank
 */
export const getRankIndex = (rankId, division = null) => {
  return RANK_ORDER.findIndex(
    (item) =>
      item.rank === rankId &&
      (item.division ?? null) === (division ?? null)
  );
};

/**
 * Ambil data rank berdasarkan index
 */
export const getRankByIndex = (index) => {
  return RANK_ORDER[index] ?? null;
};

/**
 * Format nama rank
 */
export const formatRank = (rankId) => {
  const rank = getRankInfo(rankId);
  return rank?.name ?? "-";
};

/**
 * Format lengkap rank
 */
export const formatFullRank = ({
  rank,
  division = null,
  star = 0,
}) => {
  const name = formatRank(rank);

  if (division) {
    return `${name} ${division} ⭐${star}`;
  }

  return `${name} ⭐${star}`;
};