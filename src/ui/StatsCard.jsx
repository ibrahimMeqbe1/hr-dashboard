import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCard({ title, value, trend, icon: Icon }) {
  const isPositive = trend?.type === "up";

  return (
    <div className="stats-container">
      {Icon && (
        <div className="stats-card">
          <Icon size={22} />
        </div>
      )}

      {/* Title and Main Value */}
      <div className="stats-info">
        <p className="stats-title">{title}</p>
        <h3 className="stats-value">{value}</h3>
      </div>

      {trend && (
        <div className={`stats-change ${isPositive ? "up" : "down"}`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{trend.change}</span>
        </div>
      )}
    </div>
  );
}