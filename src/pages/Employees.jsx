import { useEffect, useState } from 'react'
import { Edit2, Plus, Search, Trash2 } from 'lucide-react'
import StatusBadge from '../components/ui/StatusBadge'
import Modal from '../components/ui/Modal'
import EmployeeForm from '../components/forms/EmployeeForm'
import { employeesData } from '../data/mockData'

const STORAGE_KEY = 'hr-dashboard-employees'

export default function Employees() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem(STORAGE_KEY)
    return savedEmployees ? JSON.parse(savedEmployees) : employeesData
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState(null)

  const departments = ['All', ...new Set(employees.map(emp => emp.department))]
  const statuses = ['All', ...new Set(employees.map(emp => emp.status))]

  const filteredEmployees = employees.filter(emp => {
    const searchValue = searchTerm.toLowerCase()
    const matchesSearch = [emp.name, emp.email, emp.role]
      .some(value => value.toLowerCase().includes(searchValue))
    const matchesDepartment = departmentFilter === 'All' || emp.department === departmentFilter
    const matchesStatus = statusFilter === 'All' || emp.status === statusFilter
    return matchesSearch && matchesDepartment && matchesStatus
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees))
  }, [employees])

  const handleAddEmployee = (newEmployee) => {
    setEmployees(prev => [newEmployee, ...prev])
  }

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(prev => prev.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    ))
    setEditingEmployee(null)
  }

  const handleDeleteEmployee = (employeeId) => {
    const shouldDelete = window.confirm('Delete this employee record?')
    if (!shouldDelete) return

    setEmployees(prev => prev.filter(emp => emp.id !== employeeId))
  }

  const openAddModal = () => {
    setEditingEmployee(null)
    setIsModalOpen(true)
  }

  const openEditModal = (employee) => {
    setEditingEmployee(employee)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setEditingEmployee(null)
    setIsModalOpen(false)
  }

  return (
    <div className="employees-page">

      <div className="employees-toolbar">
        <div className="search-box wide">
          <Search size={16} color="var(--text-secondary)" />
          <input
            type="text"
            placeholder="Search name, email, or role..."
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

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <button className="add-btn" onClick={openAddModal}>
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
              <th>Actions</th>
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
                <td>
                  <div className="table-actions">
                    <button
                      type="button"
                      className="action-btn"
                      aria-label={`Edit ${emp.name}`}
                      title="Edit employee"
                      onClick={() => openEditModal(emp)}
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      type="button"
                      className="action-btn danger"
                      aria-label={`Delete ${emp.name}`}
                      title="Delete employee"
                      onClick={() => handleDeleteEmployee(emp.id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
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
        onClose={closeModal}
        title={editingEmployee ? 'Edit Employee' : 'Add New Employee'}
      >
        <EmployeeForm
          initialData={editingEmployee}
          onSubmit={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
          onAdd={handleAddEmployee}
          onClose={closeModal}
          submitLabel={editingEmployee ? 'Save Changes' : 'Add Employee'}
        />
      </Modal>

    </div>
  )
}
