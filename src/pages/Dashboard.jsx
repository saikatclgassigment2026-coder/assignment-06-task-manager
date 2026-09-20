import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LayoutDashboard, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const { tasks } = useTasks();

  const completedCount = tasks.filter(t => t.status === 'Closed').length;
  const pendingCount = tasks.filter(t => t.status === 'Pending').length;
  const raisedCount = tasks.filter(t => t.status === 'Raised').length;
  const highPriorityCount = tasks.filter(t => t.priority === 'High' && t.status !== 'Closed').length;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard Overview</h1>
          <p className="page-subtitle">Track your progress and task statistics.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--primary)' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius)', color: 'var(--primary)' }}><LayoutDashboard size={24} /></div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Total Tasks</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{tasks.length}</h3>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--success)' }}>
          <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: 'var(--radius)', color: 'var(--success)' }}><CheckCircle2 size={24} /></div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Completed</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{completedCount}</h3>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--warning)' }}>
          <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: 'var(--radius)', color: 'var(--warning)' }}><Clock size={24} /></div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Pending / Raised</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{pendingCount + raisedCount}</h3>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid var(--danger)' }}>
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', borderRadius: 'var(--radius)', color: 'var(--danger)' }}><AlertCircle size={24} /></div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>High Priority</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{highPriorityCount}</h3>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Recent Tasks</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {tasks.slice(-4).reverse().map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
