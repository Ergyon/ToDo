import Task from "../Task/Task"
import "./TaskList.css"

const TaskList = ({ onComplete, onDelete, tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="tasklist-empty">
        <p>Tu n'as aucune tâche pour le moment, profite de ta journée 🌟</p>
      </div>
    )
  }

  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
