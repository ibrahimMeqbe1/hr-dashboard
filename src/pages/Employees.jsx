import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import StatusBadge from '../components/ui/StatusBadge'
import Modal from '../components/ui/Modal'
import EmployeeForm from '../components/forms/EmployeeForm'
import { employeesData } from '../data/mockData'

export default function Employees() {
  const [employees, setEmployees] = useState(employeesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const departments = ['All', ...new Set(employees.map(emp => emp.department))]

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === 'All' || emp.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  const handleAddEmployee = (newEmployee) => {
    setEmployees(prev => [newEmployee, ...prev])
  }

  return (
    <div className="employees-page">

      <div className="employees-toolbar">
        <div className="search-box wide">
          <Search size={16} color="var(--text-secondary)" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          Add Employee
        </button>
      </div>

      <p className="results-count">
        {filteredEmployees.length} employee{filteredEmployees.length !== 1 ? 's' : ''} found
      </p>

      <div className="table-card">
        <table className="employees-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>
                  <div className="employee-name-cell">
                    <div className="avatar small">{emp.name.charAt(0)}</div>
                    <span>{emp.name}</span>
                  </div>
                </td>
                <td className="text-muted">{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td><StatusBadge status={emp.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredEmployees.length === 0 && (
          <div className="empty-state">No employees match your search.</div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Employee"
      >
        <EmployeeForm
          onAdd={handleAddEmployee}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

    </div>
  )
}