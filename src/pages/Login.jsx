import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function Login() {
  const [expanded, setExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page-bg">

      {/* الخلفية مع overlay داكن */}
      <div className="login-bg-overlay" />

      {/* النص على اليسار */}
      <div className="login-left">
        <div className="login-brand">
          <span className="login-brand-icon">💼</span>
          <span className="login-brand-name">HR Dashboard</span>
        </div>
        <h2 className="login-tagline">
          Manage your team<br />
          <span>smarter & faster</span>
        </h2>
        <p className="login-desc">
          Track attendance, performance, and employee data — all in one place.
        </p>
      </div>

      {/* صندوق الـ Login */}
      <div className="login-right">
        <div
          className={`login-box ${expanded ? 'expanded' : ''}`}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => !loading && setExpanded(false)}
        >
          {/* حافة النيون الدوارة */}
          <div className="neon-spin" />

          <div className="login-inner">

            {/* التسمية المصغّرة */}
            <div className="login-label">
              <span>🔒</span>
              <span>LOGIN</span>
            </div>

            {/* الفورم الكامل */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-form-title">
                <span>🔒</span>
                <span>Sign In</span>
              </div>

              {error && (
                <div className="login-error-msg">
                  {error}
                </div>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                required
              />

              <button
                type="submit"
                className="login-submit-btn"
                disabled={loading}
                onClick={(e) => e.stopPropagation()}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              <p className="login-hint">
                Use your company email and password
              </p>
            </form>

          </div>
        </div>
      </div>

    </div>
  )
}