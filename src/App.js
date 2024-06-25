
import './App.css';
import { TaskProvider } from './components/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
function App() {
  return (
    <div>
      <TaskProvider>
        <div>
          <h1 className='heading'>
            Task Manager
          </h1>
          <AddTask />
        <TaskList />
        </div>
        </TaskProvider>
    </div>
  );
}

export default App;
