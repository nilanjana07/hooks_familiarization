
import React, { useContext, useCallback } from 'react';
import { TaskContext } from './TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const removeTask = useCallback(() => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  }, [dispatch, task.id]);

  return (
    <div>
      <span>{task.text}</span>
      <button className='removebut'   onClick={removeTask}>Remove</button>
    </div>
  );
};

export default Task;
