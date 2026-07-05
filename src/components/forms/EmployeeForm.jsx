import { useState } from 'react'

const defaultEmployee = {
  name: '',
  email: '',
  department: 'Engineering',
  role: '',
  status: 'Active',
}

export default function EmployeeForm({
  onSubmit,
  onAdd,
  onClose,
  initialData,
  submitLabel = 'Add Employee',
}) {
  const [formData, setFormData] = useState({
    ...defaultEmployee,
    ...initialData,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const employee = {
      ...formData,
      id: initialData?.id || Date.now(),
    }

    if (onSubmit) {
      onSubmit(employee)
    } else {
      onAdd(employee)
    }

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
      <button type="submit" className="save-btn">{submitLabel}</button>
    </form>
  )
}
