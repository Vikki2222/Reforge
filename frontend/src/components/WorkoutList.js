// src/components/WorkoutList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/workouts/')
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching workouts:', err);
      });
  }, []);

  return (
    <div>
      <h2>Workout Logs</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.title} - {workout.duration} mins - {workout.calories_burned} cal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
