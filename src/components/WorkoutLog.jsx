import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const WorkoutLog = ({ setWorkouts }) => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setWorkouts((prevWorkouts) => [
      ...prevWorkouts,
      { activity, duration: parseInt(duration), calories: parseInt(calories), date: `${year}-${month}-01` }
    ]);

    setActivity('');
    setDuration('');
    setCalories('');
    setMonth('');
    setYear('');

    navigate('/dashboard');
  };

  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={i} value={String(i + 1).padStart(2, '0')}>
      {new Date(0, i).toLocaleString('default', { month: 'long' })}
    </option>
  ));

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, i) => (
    <option key={i} value={currentYear - i}>
      {currentYear - i}
    </option>
  ));

  return (
    <div className="container">
     
      <div className="gym-banner">
        <div className="banner-content">
          <h1>Welcome to Our Gym</h1>
          <p>Your fitness journey starts here!</p>
         
        </div>
      </div>

      <h2 className="my-4">Log Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Activity Type</label>
          <input 
            type="text" 
            className="form-control" 
            value={activity} 
            onChange={(e) => setActivity(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (in minutes)</label>
          <input 
            type="number" 
            className="form-control" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Calories Burned</label>
          <input 
            type="number" 
            className="form-control" 
            value={calories} 
            onChange={(e) => setCalories(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Month</label>
          <select 
            className="form-control" 
            value={month} 
            onChange={(e) => setMonth(e.target.value)} 
            required 
          >
            <option value="">Select Month</option>
            {monthOptions}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <select 
            className="form-control" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            required 
          >
            <option value="">Select Year</option>
            {yearOptions}
          </select>
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: "#2dc9d7" }}>Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLog;
