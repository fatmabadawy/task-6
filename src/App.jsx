import  { useState } from "react";
import './App.css';
import Com from './components/Com.jsx';
import Top from './components/Top.jsx';
import Form from "./components/Form.jsx";

function App() {
  const [tasks, setTasks] = useState([
     { id: 1, dayDate: "14", month: "Aug", task: "New Side Project", numdays: "4" },
     { id: 2, dayDate: "12", month: "Mar", task: "Ski Holiday", numdays: "7" },
     { id: 3, dayDate: "28", month: "Jan", task: "Home Renovation", numdays: "7" },
     { id: 4, dayDate: "12", month: "Feb", task: "Family Visit", numdays: "2" }
  ]);

  const [showForm, setShowForm] = useState(false);

  const addTask = (newTask) => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId]);
    setShowForm(false);
  };

  const cancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className='h-screen flex justify-center items-center bg-[#dfe0df] '>
      <div className='bg-[#171b2f] w-1/2 rounded-xl pb-[25px]'>
        {!showForm && <Top onAddTask={() => setShowForm(true)} />}
          {showForm && <Form onAddTask={addTask} onCancel={cancelForm} />}
        <div className='flex flex-col'>
          {tasks.map(task => (
            <Com key={task.id} dayDate={task.dayDate} month={task.month} task={task.task} numdays={task.numdays} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;