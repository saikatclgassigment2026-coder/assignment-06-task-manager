import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import '../styles/Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="mobile-menu-btn">
        <button className="btn-icon">
          <Menu size={20} />
        </button>
      </div>

      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search tasks..." className="search-input" />
      </div>

      <div className="topbar-actions">
        <button className="btn-icon">
          <Bell size={20} />
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=user1" alt="User" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
