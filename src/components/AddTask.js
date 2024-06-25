// src/components/AddTask.js
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';


const AddTask = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task } });
    setTask('');
  };

  return (
    <div className='taskadd'>
      <input className='inputfield'
      placeholder='Enter your task'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='buttonadd' onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;


