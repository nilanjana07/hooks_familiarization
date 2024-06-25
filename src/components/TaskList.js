// src/components/TaskList.js
import React, { useContext, useMemo } from 'react';
import { TaskContext } from './TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const renderedTasks = useMemo(() => {
    return tasks.map((task) => <Task key={task.id} task={task} />);
  }, [tasks]);

  return <div className='taskdesc'>{renderedTasks}</div>;
};

export default TaskList;
