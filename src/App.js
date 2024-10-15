import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Login from './components/Login';
import Signup from './components/Sign-up';
import Dashboard from './components/Dashboard';
import WorkoutLog from './components/WorkoutLog';
import Statistics from './components/Statistics';
import GoalSetting from './components/GoalSetting'; 

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]); 
  const location = useLocation(); 

  return (
    <div className="App">
    
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#2dc9d7" }}>
          <img src='https://lh3.googleusercontent.com/6E8NcQQijI7tPgtkBcZ8OnES_jVsrEdLpC_mH_1kGQRAb3uSzKUp8HxiGTqnUXucaa4=s180-rw' style={{ width: "60px" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ color: "white" }}>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard" style={{ color: "white", paddingLeft: "30px" }}>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workout-log" style={{ color: "white", paddingLeft: "40px" }}>Log Workout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/statistics" style={{ color: "white", paddingLeft: "40px" }}>Statistics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/goal-setting" style={{ color: "white", paddingLeft: "40px" }}>Goal Setting</a>
              </li>
             
            </ul>
          </div>
        </nav>
      )}

     
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard workouts={workouts} goals={goals} />} />
        <Route path="/workout-log" element={<WorkoutLog setWorkouts={setWorkouts} />} />
        <Route path="/statistics" element={<Statistics workouts={workouts} />} />
        <Route path="/goal-setting" element={<GoalSetting setGoals={setGoals} goals={goals} />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
