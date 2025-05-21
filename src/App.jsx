import { useState } from 'react'
import Task from './components/Task'

function App() {

  return (
    <main>
      <header>
        <h1>Tasker</h1>
      </header>
      <section className='task-header'>
        <h2>Your tasks involve:</h2>
      </section>
      <section className='task-container'>
          <Task text="blah"/>
          <Task text="blah"/>
          <Task text="blah"/>
      </section>

      <button className='add-new-task'>Add new task</button>
    </main>
  )
}

export default App
