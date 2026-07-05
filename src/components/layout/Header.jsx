import { Search, Bell, ChevronDown, Sun, Moon } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

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
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>

      <div className="header-actions">
        <div className="search-box">
          <Search size={16} color="var(--text-secondary)" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* زر Dark Mode */}
        <button className="icon-btn" onClick={toggleTheme} title="Toggle theme">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="icon-btn">
          <Bell size={18} />
          <span className="notif-dot" />
        </button>

        <div className="user-avatar">
          <div className="avatar">A</div>
          <span>Admin</span>
          <ChevronDown size={14} color="var(--text-secondary)" />
        </div>
      </div>
    </header>
  )
}