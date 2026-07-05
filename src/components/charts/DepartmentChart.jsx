import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

export default function DepartmentChart({ data }) {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Employees by Department</h3>
      <p className="chart-subtitle">Headcount distribution across teams</p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis type="number" stroke="#64748B" fontSize={12} />
          <YAxis type="category" dataKey="department" stroke="#64748B" fontSize={12} width={90} />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px' }}
          />
          <Bar dataKey="count" fill="#4F46E5" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}