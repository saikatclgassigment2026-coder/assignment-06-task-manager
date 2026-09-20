import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, PlusSquare, CheckCircle2 } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'All Tasks', path: '/tasks', icon: <CheckSquare size={20} /> },
    { name: 'Add Task', path: '/tasks/add', icon: <PlusSquare size={20} /> },
    { name: 'Completed', path: '/completed', icon: <CheckCircle2 size={20} /> }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>TaskPro</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
