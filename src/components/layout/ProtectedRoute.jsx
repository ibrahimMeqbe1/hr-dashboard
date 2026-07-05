import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    // Firebase بيراقب حالة الـ auth تلقائياً
    // لو المستخدم سجّل دخول قبل، بيرجعه مباشرة
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe() // تنظيف لما الـ component يختفي
  }, [])

  // لسا بيتحقق من الـ auth
  if (user === undefined) {
    return <div className="auth-loading">Loading...</div>
  }

  // مش logged in — روح لصفحة Login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // logged in — اعرض الصفحة
  return children
}