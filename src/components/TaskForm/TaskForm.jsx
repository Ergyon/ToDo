import { Plus, Settings } from "lucide-react"
import { useState } from "react"
import "./TaskForm.css"

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("medium")
  const [deadline, setDeadline] = useState("")
  const [category, setCategory] = useState("")

  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTask = () => {
    if (!title.trim()) {
      alert("Tu dois mettre un titre mon bebz ^^")
      return
    }

    const newTask = {
      id: Date.now(),
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

    setIsModalOpen(false)
  }

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTask()
    }
  }

  return (
    <div className="taskform">
      <div className="taskform__quick-add">
        <input
          type="text"
          className="taskform__input"
          placeholder="Ajoute quelque chose ma chérie..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKey}
        />

        <button
          className="taskform__options-btn"
          title="button"
          onClick={() => setIsModalOpen(true)}
        >
          <Settings size={20} />
        </button>

        <button
          className="taskform__add-btn"
          type="button"
          onClick={addTask}
          title="Ajouter"
        >
          <Plus size={20} />
        </button>
      </div>

      {isModalOpen && (
        <>
          <div
            className="taskform__overlay"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="taskform__modal">
            <div className="taskform__field">
              <label className="taskform__label">Priorité</label>
              <div className="taskform__priority-btns">
                <button
                  type="button"
                  className={`taskform__priority-btn priority-urgent 
                        ${priority === "urgent" ? "active" : ""}`}
                  onClick={() => setPriority("urgent")}
                  title="Urgent"
                >
                  🔴
                </button>
                <button
                  type="button"
                  className={`taskform__priority-btn priority-high 
                    ${priority === "high" ? "active" : ""}`}
                  onClick={() => setPriority("high")}
                  title="Haute"
                >
                  🟠
                </button>
                <button
                  type="button"
                  className={`taskform__priority-btn priority-medium 
                    ${priority === "medium" ? "active" : ""}`}
                  onClick={() => setPriority("medium")}
                  title="Moyenne"
                >
                  🟣
                </button>
                <button
                  type="button"
                  className={`taskform__priority-btn priority-low 
                    ${priority === "low" ? "active" : ""}`}
                  onClick={() => setPriority("low")}
                  title="Basse"
                >
                  🟢
                </button>
              </div>
            </div>

            <div className="taskform__field">
              <label htmlFor="modal-deadline" className="taskform__label">
                📅 Date limite
              </label>
              <input
                className="taskform__input-modal"
                id="modal-deadline"
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="taskform__field">
              <label htmlFor="modal-category" className="taskform__label">
                🏷️ Catégorie
              </label>

              <input
                id="modal-category"
                type="text"
                placeholder="Aimer Benoit, lui offrid des cadeaux, du super sexe..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="taskform__modal-actions">
              <button
                className="taskform__modal-cancel"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Annuler
              </button>

              <button
                className="taskform__modal-submit"
                type="button"
                onClick={addTask}
              >
                Ajouter
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskForm
