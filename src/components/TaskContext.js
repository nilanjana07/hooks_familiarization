import React ,{createContext,useReducer,useState} from 'react'
import {TaskReducer} from "../reducer/TaskReducer";
const TaskContext=createContext();
const TaskProvider = ({children}) => {
    const [tasks,dispatch]=useReducer(TaskReducer,[]);

  return (
    <div>
      <TaskContext.Provider value={{tasks,dispatch}}>
        {children}
      </TaskContext.Provider>
    </div>
  )
}

export {TaskContext,TaskProvider}
