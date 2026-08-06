import { TIERS } from "../Engine/RankEngine";

export default function TierSelector({
  label,
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
      </label>

      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">
          Pilih Tier
        </option>

        {TIERS.map((tier) => (
          <option
            key={tier.name}
            value={tier.name}
          >
            {tier.name}
          </option>
        ))}
      </select>
    </div>
  );
}