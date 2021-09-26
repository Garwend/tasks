import { useState } from 'react';

import CreateTask from './components/CreateTask/CreateTask';
import WaitingTasks from './components/WaitingTasks/WaitingTasks';
import CurrentTasks from './components/CurrentTasks/CurrentTasks';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';

import './App.less';



function App() {
  const [waitingTasks, setWaitingTasks] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div className="App">
      <CreateTask setWaitingTasks={setWaitingTasks} setCurrentTasks={setCurrentTasks}/>
      <section>
        <WaitingTasks waitingTasks={waitingTasks} setWaitingTasks={setWaitingTasks} />
        <CurrentTasks currentTasks={currentTasks} setCompletedTasks={setCompletedTasks} setCurrentTasks={setCurrentTasks} setWaitingTasks={setWaitingTasks} />
        <CompletedTasks completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
      </section>
    </div>
  );
}

export default App;
