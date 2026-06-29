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