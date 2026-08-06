import { isMythicTier } from "../Engine/RankEngine";

export default function StarSelector({
  tier,
  value,
  onChange,
  label,
}) {
  if (!tier) return null;

  const maxStars = isMythicTier(tier)
    ? 150
    : 5;

  return (
    <div className="form-group">
      <label className="form-label">
        {label}
      </label>

      <select
        className="input"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
      >
        {Array.from(
          { length: maxStars },
          (_, index) => index + 1
        ).map((star) => (
          <option
            key={star}
            value={star}
          >
            {star} ⭐
          </option>
        ))}
      </select>
    </div>
  );
}