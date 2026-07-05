import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

export default function PerformanceChart({ data }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Performance Trend</h3>
      <p className="chart-subtitle">Monthly average performance score</p>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
          <YAxis stroke="#64748B" fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              fontSize: '13px'
            }}
          />
          <Line
            type="monotone"
            dataKey="performance"
            stroke="#4F46E5"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#4F46E5' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}