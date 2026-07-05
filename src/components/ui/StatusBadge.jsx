export default function StatusBadge({ status }) {
  const styles = {
    Active:   { bg: '#D1FAE5', color: '#10B981' },
    'On Leave': { bg: '#FEF3C7', color: '#F59E0B' },
    Inactive: { bg: '#FEE2E2', color: '#EF4444' },
    Absent: { bg: '#FEE2E2', color: '#EF4444' },
    Late: { bg: '#FDE68A', color: '#D97706' },
    'On Time': { bg: '#D1FAE5', color: '#10B981' }
    
  }

  const style = styles[status] || styles.Active

  return (
    <span
      className="status-badge"
      style={{ background: style.bg, color: style.color }}
    >
      {status}
    </span>
  )
}