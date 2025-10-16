import "./TaskItem.css"

const TaskItem = ({ task, onComplete, onDelete }) => {
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
      <button
        className="task__doneBtn"
        title="Terminer"
        onClick={() => onComplete(task.id)}
      ></button>

      <div className="task-item__content">
        <h3 className="task-item__title">{task.title}</h3>
        <span className={`task-item__badge priority--${task.priority}`}>
          {priorityLabels[task.priority] || priorityLabels.neutral}
        </span>

        <div className="task-item__metadata">
          {task.deadline && (
            <div
              className={`task-item__deadline ${isOverdue() ? "overdue" : ""}`}
            >
              <span>{deadlineFormat(task.headline)}</span>
              {isOverdue() && <span className="overdue-icon">⚠️</span>}
            </div>
          )}

          {task.category && (
            <div className="task-item__category">
              <span>{task.category}</span>
            </div>
          )}
        </div>

        <div className="task-item__init-date">
          Ajouté le {formatCreateDate(task.createdAt)}
        </div>
      </div>

      <button className="task-item__delBtn">
        title = 'Supprimer' onClick={() => onDelete(task.id)}
      </button>
    </div>
  )
}

export default TaskItem
