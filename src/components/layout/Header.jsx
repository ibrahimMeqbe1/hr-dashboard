import { Search, Bell, ChevronDown } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/':           'Dashboard',
  '/employees':  'Employees',
  '/attendance': 'Attendance',
  '/reports':    'Reports',
  '/settings':   'Settings',
}

export default function Header() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>

      <div className="header-actions">
        {/* Search */}
        <div className="search-box">
          <Search size={16} color="var(--text-secondary)" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notifications */}
        <button className="icon-btn">
          <Bell size={18} />
          <span className="notif-dot" />
        </button>

        {/* User */}
        <div className="user-avatar">
          <div className="avatar">A</div>
          <span>Admin</span>
          <ChevronDown size={14} color="var(--text-secondary)" />
        </div>
      </div>
    </header>
  )
}