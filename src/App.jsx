import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Settings from './pages/Settings'
import Attendance from './pages/Attendance'
import Reports from './pages/Reports'
import './index.css'

function App() {
return (
  <BrowserRouter>
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div  className="page-content">
            <Routes>
         <Route path="/" exact component={Dashboard} />
         <Route path="/employees" component={Employees} />
        
        <Route path="/attendance" element={<Attendance />} />
<Route path="/reports"    element={<Reports />} /> <Route path="/settings" component={Settings} />
         </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
  
}

export default App;
