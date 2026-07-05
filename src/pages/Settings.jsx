import { useState } from 'react'

export default function Settings() {
  const [name, setName] = useState('Admin User')
  const [email, setEmail] = useState('admin@company.com')
  const [notifications, setNotifications] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    // هون فعلياً رح ترسل البيانات لسيرفر — هلق بس منعرض رسالة نجاح
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="settings-page">
      <div className="settings-card">
        <h3 className="chart-title">Profile</h3>
        <p className="chart-subtitle">Update your account information</p>

        <form onSubmit={handleSave} className="settings-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div>
              <p className="toggle-label">Email Notifications</p>
              <p className="text-muted" style={{ fontSize: '12px' }}>
                Receive updates about employee activity
              </p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <button type="submit" className="save-btn">
            {saved ? 'Saved ✓' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}