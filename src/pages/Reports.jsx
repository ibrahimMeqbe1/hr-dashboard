import PerformanceChart from '../components/charts/PerformanceChart'
import AttendanceChart from '../components/charts/AttendanceChart'
import DepartmentChart from '../components/charts/DepartmentChart'
import { performanceData, attendanceData, departmentData } from '../data/mockData'

export default function Reports() {
  return (
    <div className="dashboard">
      <div className="charts-grid">
        <PerformanceChart data={performanceData} />
        <AttendanceChart data={attendanceData} />
      </div>
      <DepartmentChart data={departmentData} />
    </div>
  )
}