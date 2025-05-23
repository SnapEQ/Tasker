import { useState } from 'react'
import Task from './components/Task'
import { nanoid } from 'nanoid';


// TO DOs:
// -  ✅handle adding new tasks
// -  refactor the task to be a form
// -  style the task list
// -  add task features


function App() {

  const [tasks, setTasks] = useState([]);


  const tasksArray = tasks.map((task) => {
    return <Task key={task.id} id={task.id} text={task.text} />
  })





  function handleClick() {
    const newTask = {
      id: nanoid(),
      text: "New task",
      completed: false
    }

    setTasks(prevTasks => [...prevTasks, newTask]);
  }


  console.log(tasks)

  return (
    <main>
      <header>
        <h1>Tasker</h1>
      </header>
      <section className='task-header'>
        <h2>Your tasks involve:</h2>
      </section>
      <section className='task-container'>
        {tasksArray}

      </section>
      <br />
      <button className='add-new-task' onClick={handleClick}>Add new task</button>
    </main>
  )
}

export default App
