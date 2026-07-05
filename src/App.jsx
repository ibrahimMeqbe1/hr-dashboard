import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from './context/ThemeContext'
import ProtectedRoute from './components/layout/ProtectedRoute'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Settings from './pages/Settings'
import Attendance from './pages/Attendance'
import Reports from './pages/Reports'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          {/* صفحة Login — برّا الـ layout العادي */}
          <Route path="/login" element={<Login />} />

          {/* كل الصفحات الثانية محمية */}
          <Route path="/*" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Sidebar />
                <div className="main-content">
                  <Header />
                  <div className="page-content">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/employees" element={<Employees />} />
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App