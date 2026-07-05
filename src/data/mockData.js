import { Users, UserCheck, Briefcase, TrendingUp } from 'lucide-react'

export const statsData = [
  {
    id: 1,
    title: 'Total Employees',
    value: '1,248',
    icon: Users,
    change: '+12% this month',
    changeType: 'up',
    color: '#4F46E5'
  },
  {
    id: 2,
    title: 'Present Today',
    value: '1,050',
    icon: UserCheck,
    change: '+3% vs yesterday',
    changeType: 'up',
    color: '#10B981'
  },
  {
    id: 3,
    title: 'Open Positions',
    value: '24',
    icon: Briefcase,
    change: '-2 this week',
    changeType: 'down',
    color: '#F59E0B'
  },
  {
    id: 4,
    title: 'Avg Performance',
    value: '87%',
    icon: TrendingUp,
    change: '+5% this quarter',
    changeType: 'up',
    color: '#8B5CF6'
  }
]
// بيانات الأداء عبر الأشهر — للـ Line Chart
export const performanceData = [
  { month: 'Jan', performance: 72 },
  { month: 'Feb', performance: 75 },
  { month: 'Mar', performance: 78 },
  { month: 'Apr', performance: 74 },
  { month: 'May', performance: 81 },
  { month: 'Jun', performance: 85 },
  { month: 'Jul', performance: 87 },
]

// بيانات الحضور الأسبوعي — للـ Bar Chart
export const attendanceData = [
  { day: 'Mon', present: 980, absent: 70 },
  { day: 'Tue', present: 1020, absent: 30 },
  { day: 'Wed', present: 1050, absent: 25 },
  { day: 'Thu', present: 990, absent: 60 },
  { day: 'Fri', present: 1010, absent: 40 },
]
export const employeesData = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', department: 'Engineering', role: 'Senior Developer', status: 'Active' },
  { id: 2, name: 'Michael Chen', email: 'm.chen@company.com', department: 'Design', role: 'UI/UX Designer', status: 'Active' },
  { id: 3, name: 'Emma Davis', email: 'emma.d@company.com', department: 'Marketing', role: 'Marketing Lead', status: 'On Leave' },
  { id: 4, name: 'James Wilson', email: 'j.wilson@company.com', department: 'Engineering', role: 'Backend Developer', status: 'Active' },
  { id: 5, name: 'Olivia Martinez', email: 'olivia.m@company.com', department: 'HR', role: 'HR Manager', status: 'Active' },
  { id: 6, name: 'Daniel Lee', email: 'd.lee@company.com', department: 'Finance', role: 'Financial Analyst', status: 'Inactive' },
  { id: 7, name: 'Sophia Brown', email: 's.brown@company.com', department: 'Engineering', role: 'Frontend Developer', status: 'Active' },
  { id: 8, name: 'Ethan Taylor', email: 'e.taylor@company.com', department: 'Marketing', role: 'Content Strategist', status: 'On Leave' },
]
export const attendanceLog = [
  { id: 1, name: 'Sarah Johnson', checkIn: '08:55 AM', checkOut: '05:30 PM', status: 'On Time' },
  { id: 2, name: 'Michael Chen', checkIn: '09:15 AM', checkOut: '06:00 PM', status: 'Late' },
  { id: 3, name: 'Emma Davis', checkIn: '--', checkOut: '--', status: 'Absent' },
  { id: 4, name: 'James Wilson', checkIn: '08:50 AM', checkOut: '05:20 PM', status: 'On Time' },
  { id: 5, name: 'Olivia Martinez', checkIn: '09:05 AM', checkOut: '05:45 PM', status: 'On Time' },
  { id: 6, name: 'Daniel Lee', checkIn: '--', checkOut: '--', status: 'Absent' },
  { id: 7, name: 'Sophia Brown', checkIn: '09:20 AM', checkOut: '06:10 PM', status: 'Late' },
  { id: 8, name: 'Ethan Taylor', checkIn: '08:58 AM', checkOut: '05:35 PM', status: 'On Time' },
]
export const departmentData = [
  { department: 'Engineering', count: 42 },
  { department: 'Marketing', count: 18 },
  { department: 'Design', count: 15 },
  { department: 'HR', count: 8 },
  { department: 'Finance', count: 12 },
]