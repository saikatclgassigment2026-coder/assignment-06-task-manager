import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import '../styles/TaskCard.css';

const TaskCard = ({ task }) => {
  const { deleteTask, updateTaskStatus } = useTasks();

  const handleStatusChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  const isCompleted = task.status === 'Closed';

  return (
    <div className={`task-card ${isCompleted ? 'task-completed' : ''}`}>
      <div className="task-header">
        <h3 className="task-title">
          <Link to={`/tasks/${task.id}`}>{task.header}</Link>
        </h3>
        <div className="task-actions">
          <button className="btn-icon" onClick={() => deleteTask(task.id)} title="Delete Task">
            <Trash2 size={16} className="text-danger" />
          </button>
        </div>
      </div>
      
      <p className="task-desc">{task.description}</p>
      
      <div className="task-meta">
        <div className="task-badges">
          <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority} Priority</span>
          <span className={`badge badge-${task.category.toLowerCase()}`}>{task.category}</span>
        </div>
        
        <div className="task-dates">
          <span className="date-item">
            <Calendar size={14} /> Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="task-footer">
        <div className="status-selector">
          <span className={`status-dot status-${task.status.toLowerCase()}`}></span>
          <select 
            value={task.status} 
            onChange={handleStatusChange}
            className="status-select"
          >
            <option value="Raised">Raised</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        
        {isCompleted && (
          <span className="completed-stamp">
            <CheckCircle size={16} /> Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
