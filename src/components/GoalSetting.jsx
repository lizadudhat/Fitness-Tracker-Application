
import '../App.css'
import React, { useState } from 'react';

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('weekly'); 
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState(0);
  const [goals, setGoals] = useState([]);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleGoalTypeChange = (e) => {
    setGoalType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      setGoals([...goals, { type: goalType, goal, progress }]);
      setGoal('');
      setProgress(0);
    }
  };

  return (
    <div className="gole">
      <h2>Set Your Fitness Goals</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Goal Type:
            <select value={goalType} onChange={handleGoalTypeChange}>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Goal:
            <input
              type="text"
              value={goal}
              onChange={handleGoalChange}
              placeholder="Enter your goal"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Progress  :

            <input
              type="number"
              value={progress}
              onChange={handleProgressChange}
              min="0"
              max="100"
              required

            />
          </label>
        </div>
        <button type="submit"style={{width:"10%",backgroundColor:"#2dc9d7"}}>Add Goal</button>
      </form>

    <center>
    <h3 style={{color:"#2dc9d7"}}> Goals</h3>
    </center>
      <ul>
        {goals.map((item, index) => (
          <li key={index}>
            {item.type} Goal: {item.goal} - Progress: {item.progress}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalSetting;
