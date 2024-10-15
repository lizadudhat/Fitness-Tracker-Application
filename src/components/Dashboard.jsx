import React from 'react';
import Statistics from './Statistics'; 

const Dashboard = ({ workouts, goals }) => {
  return (
    <div className="container">
     
      <div className="row">
      
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Workouts</h5>
              <ul>
                {workouts.length > 0 ? (
                  workouts.map((workout, index) => (
                    <li key={index}>
                      {workout.activity} for {workout.duration} minutes - {workout.calories} calories on {workout.date}
                    </li>
                  ))
                ) : (
                  <li>Not Found</li>
                )}
              </ul>
            </div>
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Progress Tracking</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${goals.progress}%` }}
                  aria-valuenow={goals.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {goals.progress}%
                </div>
              </div>
            
              <Statistics workouts={workouts} />
            </div>
          </div>
        </div>

      
       
      </div>
    </div>
  );
};

export default Dashboard;
