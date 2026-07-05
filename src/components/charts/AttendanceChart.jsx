import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

export default function AttendanceChart({ data }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Weekly Attendance</h3>
      <p className="chart-subtitle">Present vs absent employees</p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="day" stroke="#64748B" fontSize={12} />
          <YAxis stroke="#64748B" fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              fontSize: '13px'
            }}
          />
          <Legend wrapperStyle={{ fontSize: '13px' }} />
          <Bar dataKey="present" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="absent" fill="#EF4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}