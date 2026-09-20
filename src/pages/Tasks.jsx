import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Tasks = () => {
  const { tasks } = useTasks();
  const activeTasks = tasks.filter(t => t.status !== 'Closed');

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">All Active Tasks</h1>
          <p className="page-subtitle">Manage and track your ongoing work.</p>
        </div>
        <Link to="/tasks/add" className="btn btn-primary">
          <Plus size={18} /> New Task
        </Link>
      </div>

      {activeTasks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius)' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>No active tasks found.</p>
          <Link to="/tasks/add" className="btn btn-primary">Create Your First Task</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {activeTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;
