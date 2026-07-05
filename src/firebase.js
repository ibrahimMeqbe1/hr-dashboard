import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxcUKRXUmeWJa_t06dchEm4879dQHh80s",
  authDomain: "hr-dashboard-b60d4.firebaseapp.com",
  projectId: "hr-dashboard-b60d4",
  storageBucket: "hr-dashboard-b60d4.firebasestorage.app",
  messagingSenderId: "877628961643",
  appId: "1:877628961643:web:67d55edb521e1b0db8922e"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)