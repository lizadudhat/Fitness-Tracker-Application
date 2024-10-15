import React from 'react';
import { Chart, registerables, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../App.css'

Chart.register(...registerables, CategoryScale, LinearScale);

const Statistics = ({ workouts }) => {
 
  const aggregatedData = workouts.reduce((acc, workout) => {
    const { activity, duration } = workout;
    if (acc[activity]) {
      acc[activity] += duration; 
    } else {
      acc[activity] = duration; 
    }
    return acc;
  }, {});


  const data = {
    labels: Object.keys(aggregatedData), 
    datasets: [
      {
        label: 'Total Duration (minutes)',
        data: Object.values(aggregatedData), 
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Duration (minutes)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Activities',
        },
      },
    },
  };

  return (
    <div className="container">
      <h2 className="my-4">Statistics</h2>
      <div style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;
