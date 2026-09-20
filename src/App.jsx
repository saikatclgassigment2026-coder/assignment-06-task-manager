import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import TaskDetails from './pages/TaskDetails';
import CompletedTasks from './pages/CompletedTasks';
import { TaskProvider } from './context/TaskContext';
import './index.css';

// A simple layout component to wrap authenticated routes
const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <Topbar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

// Simulating a basic protected route as requested
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Hardcoded to true for this assignment, updated in assignment 07
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <AppLayout>{children}</AppLayout>;
};

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/tasks" element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          } />
          
          <Route path="/tasks/add" element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          } />
          
          <Route path="/tasks/:taskId" element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          } />
          
          <Route path="/completed" element={
            <ProtectedRoute>
              <CompletedTasks />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
