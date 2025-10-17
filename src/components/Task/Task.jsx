import "./Task.css"

const Task = ({ task, onComplete, onDelete }) => {
  const priorityLabels = {
    urgent: "Urgent",
    high: "Haute",
    medium: "Moyenne",
    low: "Basse",
    neutral: ""
  }

  // formater deadline
  const deadlineFormat = (deadline) => {
    if (!deadline) return null
    const date = new Date(deadline)
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
    return date.toLocaleDateString("fr-FR", options)
  }

  // calculer temps restant
  const isOverdue = () => {
    if (!task.deadline) return false
    return new Date(task.deadline) < new Date()
  }

  // formater date de creation
  const formatCreateDate = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (
    <div className={`task--${task.priority}`}>
      <div className="task">
        <button
          className="task__doneBtn"
          title="Terminer"
          onClick={() => onComplete(task.id)}
        ></button>
        <h3 className="task__title">{task.title}</h3>
        <div className="task__infos">
          <span className={`task__badge priority--${task.priority}`}>
            {priorityLabels[task.priority] || priorityLabels.neutral}
          </span>
          {task.category && <span>{task.category}</span>}
        </div>

        {task.deadline && (
          <div className={`task__deadline ${isOverdue() ? "overdue" : ""}`}>
            <span>{deadlineFormat(task.deadline)}</span>
            {isOverdue() && <span className="overdue-icon">⚠️</span>}
          </div>
        )}

        <div className="task__init-date">
          <span>Date d'ajout</span>
          <span>{formatCreateDate(task.createdAt)}</span>
        </div>
        <button
          className="task__delBtn"
          title="Supprimer"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
    </div>
  )
}

export default Task
