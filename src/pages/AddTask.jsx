import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const AddTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    header: '',
    description: '',
    priority: 'Medium',
    category: 'Personal',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    navigate('/tasks');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Create New Task</h1>
          <p className="page-subtitle">Add a new task to your workspace.</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Task Header</label>
            <input 
              type="text" 
              name="header" 
              value={formData.header} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-main)' }}
              placeholder="e.g., Prepare Presentation"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
              rows="4"
              style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-main)', resize: 'vertical' }}
              placeholder="Task details..."
            ></textarea>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Priority</label>
              <select name="priority" value={formData.priority} onChange={handleChange} style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-main)' }}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleChange} style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-main)' }}>
                <option value="Academic">Academic</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Due Date</label>
            <input 
              type="date" 
              name="dueDate" 
              value={formData.dueDate} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-main)' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="btn btn-outline" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
