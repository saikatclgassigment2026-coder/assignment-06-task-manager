import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { ArrowLeft, Calendar, Clock, Tag, Flag } from 'lucide-react';

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTaskStatus } = useTasks();

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Task not found</h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/tasks')}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="page-header">
        <div>
          <button className="btn-icon" onClick={() => navigate(-1)} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <ArrowLeft size={16} /> Back
          </button>
          <h1 className="page-title">{task.header}</h1>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Description</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{task.description}</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Status</label>
            <select 
              value={task.status} 
              onChange={(e) => updateTaskStatus(task.id, e.target.value)}
              style={{ padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'var(--bg-main)', fontWeight: 600, color: 'var(--primary)' }}
            >
              <option value="Raised">Raised</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: 'var(--radius)' }}>
              <Flag size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>PRIORITY</p>
              <p style={{ fontWeight: 600 }}>{task.priority}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: 'var(--radius)' }}>
              <Tag size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>CATEGORY</p>
              <p style={{ fontWeight: 600 }}>{task.category}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderRadius: 'var(--radius)' }}>
              <Clock size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>RAISED ON</p>
              <p style={{ fontWeight: 600 }}>{new Date(task.raisedDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#fef3c7', color: '#92400e', borderRadius: 'var(--radius)' }}>
              <Calendar size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>DUE DATE</p>
              <p style={{ fontWeight: 600 }}>{new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
