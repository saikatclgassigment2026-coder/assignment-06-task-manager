# Assignment 06: Task Manager

## Objective
Create a Task Management application featuring React Router, a basic Protected Route structure, Dashboard, and detailed Task views.

## Technologies Used
- React (Vite)
- React Router v6
- Context API (State Management)
- Lucide React Icons
- Custom CSS with Variables & Flexbox/Grid

## Features
- **Routing**: Client-side routing with `react-router-dom` (Dashboard, All Tasks, Add Task, Task Details, Completed).
- **Protected Routes**: A basic structural implementation of protected routes mapping to authenticated views.
- **Dashboard Statistics**: Overview of task counts by status and priority.
- **Task Management**: Create, view, update status, and delete tasks.
- **Dynamic Task Details**: Dedicated page for viewing in-depth task information using URL parameters (`useParams`).
- **Responsive Layout**: Sidebar navigation that converts to a mobile-friendly menu (simulated).

## Folder Structure
```
assignment-06-task-manager/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── TaskCard.jsx
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   ├── AddTask.jsx
│   │   ├── TaskDetails.jsx
│   │   └── CompletedTasks.jsx
│   ├── styles/
│   │   ├── Sidebar.css
│   │   ├── Topbar.css
│   │   └── TaskCard.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## How to Install
1. Navigate to the project directory: `cd assignment-06-task-manager`
2. Install dependencies: `npm install`

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **React Router Dom**: Implementing nested layouts, `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams`, and `useNavigate`.
- **Protected Routes**: Creating a Higher-Order Component (`ProtectedRoute`) pattern to conditionally render routes based on an authentication state.
- **Context API for CRUD**: Centralizing the tasks array and all modification functions (add, update, delete) in `TaskContext` so any route can interact with the global task list.
