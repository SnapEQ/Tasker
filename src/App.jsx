import { useEffect, useState } from 'react'
import Task from './components/Task'
import { nanoid } from 'nanoid';


// TO DOs:
// -  ✅handle adding new tasks
// -  ✅refactor the task to be a form
// -  style the task list
// -  ✅add task features

const STORAGE_KEY = 'tasker-tasks';




function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if(savedTasks){
      const parsedTasks = JSON.parse(savedTasks);

      return parsedTasks.map(task => ({
        ...task,
        isInEditMode: false,
        handleDone,
        handleDelete,
        handleEdit,
        handleUpdateTaskText
      }));
    }
    return [];
  });

  const saveToLocalStorage = (tasks) => {
    const tasksToSave = tasks.map(({ isInEditMode, handleDone, handleDelete, handleEdit, handleUpdateTaskText, ...rest }) => rest);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
};

  useEffect(()=>{
    saveToLocalStorage(tasks);
  }, [tasks])

  const tasksArray = tasks.map((task) => {
    return <Task
      key={task.id}
      id={task.id}
      text={task.text}
      completed={task.completed}
      isInEditMode={task.isInEditMode}
      doneFunc={task.handleDone}
      deleteFunc={task.handleDelete}
      editFunc={task.handleEdit}
      updateTextFunc={task.handleUpdateTaskText} />
  })

  function handleDone(id) {
    setTasks(prevTasks => prevTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  function handleDelete(id) {
    setTasks(prevTasks => prevTasks.filter((task) => {
      return task.id !==id
    }))
  }

  function handleEdit(id){
    console.log("Event fired")
    setTasks(prevTasks => prevTasks.map((task)=>{
      if(task.id === id) {
        return {...task, isInEditMode: !task.isInEditMode}
      }
      return task
    }))
  }

  function handleUpdateTaskText(id, newText){
    setTasks(prevTasks => prevTasks.map((task) => {
      if(task.id === id){
        return {...task, text: newText}
      }
      return task;
    }))
  }





  function handleClick() {
    const newTask = {
      id: nanoid(),
      text: "New task",
      completed: false,
      isInEditMode: false,
      handleDone: handleDone,
      handleDelete: handleDelete,
      handleEdit: handleEdit,
      handleUpdateTaskText: handleUpdateTaskText

    }

    setTasks(prevTasks => [...prevTasks, newTask]);
  }



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
