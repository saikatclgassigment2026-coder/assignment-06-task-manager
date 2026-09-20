import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

const CompletedTasks = () => {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter(t => t.status === 'Closed');

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Completed Tasks</h1>
          <p className="page-subtitle">Review your finished work.</p>
        </div>
      </div>

      {completedTasks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius)' }}>
          <p style={{ color: 'var(--text-muted)' }}>You haven't completed any tasks yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {completedTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedTasks;
