import { useState } from "react"
import "./TaskForm.css"

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("medium")
  const [priority, setPriority] = useState("")
  const [deadline, setDeadline] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if (!title.trim()) {
    alert("Tu dois mettre un titre mon bebz ^^")
    return
  }

  const newTask = {
    id: Date.nom(),
    title: title.trim(),
    priority,
    deadline: deadline || null,
    createdAt: new Date().toISOString()
  }

  onAddTask(newTask)

  setTitle("")
  setPriority("medium")
  setDeadline("")
  setCategory("")
}
