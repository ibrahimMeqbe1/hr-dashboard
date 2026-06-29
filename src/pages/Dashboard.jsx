import StatsCard from "../ui/StatsCard";    
import { statsData } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="dashboard"> 
    <div className="stats-grid">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.id}
            {...stat}
          />
        ))}
        </div>
    </div>
  );
}