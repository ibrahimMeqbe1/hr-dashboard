import { useState } from 'react'

export default function EmployeeForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Engineering',
    role: '',
    status: 'Active',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      id: Date.now(),
      ...formData,
    }
    onAdd(newEmployee)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Department</label>
        <select name="department" value={formData.department} onChange={handleChange}>
          <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>HR</option>
          <option>Finance</option>
        </select>
      </div>
      <div className="form-group">
        <label>Role</label>
        <input type="text" name="role" placeholder="e.g. Senior Developer" value={formData.role} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>Active</option>
          <option>On Leave</option>
          <option>Inactive</option>
        </select>
      </div>
      <button type="submit" className="save-btn">Add Employee</button>
    </form>
  )
}