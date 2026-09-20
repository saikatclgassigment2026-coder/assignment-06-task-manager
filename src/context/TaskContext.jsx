import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

const initialTasks = [
  {
    id: "1",
    header: "Finish React Project",
    description: "Complete all 11 assignments as per the PDF requirements.",
    priority: "High",
    category: "Academic",
    raisedDate: new Date().toISOString(),
    dueDate: "2026-08-28",
    status: "Pending"
  },
  {
    id: "2",
    header: "Grocery Shopping",
    description: "Buy milk, eggs, bread, and some vegetables.",
    priority: "Medium",
    category: "Personal",
    raisedDate: new Date(Date.now() - 86400000).toISOString(),
    dueDate: "2026-08-30",
    status: "Raised"
  },
  {
    id: "3",
    header: "Read Documentation",
    description: "Read the React Router v6 documentation.",
    priority: "Low",
    category: "Academic",
    raisedDate: new Date(Date.now() - 172800000).toISOString(),
    dueDate: "2026-08-25",
    status: "Closed"
  }
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      raisedDate: new Date().toISOString(),
      status: 'Raised'
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      deleteTask,
      updateTaskStatus
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
