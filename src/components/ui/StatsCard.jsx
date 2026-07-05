import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatsCard({ title, value, icon: Icon, change, changeType, color }) {
  const isPositive = changeType === 'up'

  return (
    <div className="stats-card">

      <div className="stats-icon" style={{ background: color + '20', color: color }}>
        <Icon size={22} />
      </div>

      <div className="stats-info">
        <p className="stats-title">{title}</p>
        <h3 className="stats-value">{value}</h3>
      </div>

      <div className={`stats-change ${isPositive ? 'up' : 'down'}`}>
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{change}</span>
      </div>

    </div>
  )
}