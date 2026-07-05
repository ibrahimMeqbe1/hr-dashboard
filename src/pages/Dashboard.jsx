import StatsCard from '../components/ui/StatsCard'
import PerformanceChart from '../components/charts/PerformanceChart'
import AttendanceChart from '../components/charts/AttendanceChart'
import { statsData, performanceData, attendanceData } from '../data/mockData'

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
        <div className="charts-grid">
          <PerformanceChart data={performanceData} />
          <AttendanceChart data={attendanceData} />
        </div>
    </div>
  );
}