import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Briefcase
} from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const navItems = [
  { path: '/',            icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/employees',   icon: Users,           label: 'Employees' },
  { path: '/attendance',  icon: Calendar,        label: 'Attendance' },
  { path: '/reports',     icon: BarChart3,       label: 'Reports' },
  { path: '/settings',    icon: Settings,        label: 'Settings' },
]

export default function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <Briefcase size={22} color="#818CF8" />
        <span>HR Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button className="sidebar-link logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  )
}