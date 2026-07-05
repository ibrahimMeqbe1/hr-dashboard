import StatusBadge from '../components/ui/StatusBadge'
import { attendanceLog } from '../data/mockData'

export default function Attendance() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

return (
  <div className="employees-page">
    <p className="page-subtitle">{today}</p>

      <div className="table-card">
        <table className="employees-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceLog.map(entry => (
              <tr key={entry.id}>
                <td>
                  <div className="employee-name-cell">
                    <div className="avatar small">{entry.name.charAt(0)}</div>
                    <span>{entry.name}</span>
                  </div>
                </td>
                <td className="text-muted">{entry.checkIn}</td>
                <td className="text-muted">{entry.checkOut}</td>
                <td><StatusBadge status={entry.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}