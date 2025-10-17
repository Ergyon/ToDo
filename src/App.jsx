import { useState } from "react"
import "./App.css"
import TaskList from "./components/TaskList/TaskList"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finir tache",
      priority: "urgent",
      deadline: "2025-10-20T18:00",
      category: "developpement",
      createdAt: "2025-10-16T10:00:00"
    },
    {
      id: 2,
      title: "Faire les courses",
      priority: "high",
      deadline: "2025-10-17T12:00:00",
      category: "Personnel",
      createdAt: "2025-10-16T11:30:00"
    },
    {
      id: 3,
      title: "Lire un livre",
      priority: "low",
      deadline: null,
      category: null,
      createdAt: "2025-10-16T14:00:00"
    },
    {
      id: 4,
      title: "Appeler le dentiste",
      priority: "medium",
      deadline: "2025-10-15T09:00:00",
      category: "Santé",
      createdAt: "2025-10-10T16:00:00"
    }
  ])

  const handleComplete = (taskId) => {
    console.log("tache complete :", taskId)
  }

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Une Todo liste toute douce</h1>
      </header>

      <main className="app__main">
        <TaskList
          tasks={tasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App
