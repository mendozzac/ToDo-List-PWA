import { useState } from "react";
import useTasks from "../../hook/useTask";

const Task = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const initialData = task.task;
  const [taskData, setTaskData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const onDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };

  const onChange = (event) => {
    setTaskData(event.target.value);
  };

  const changeChecked = () => {
    const newTask = {
      ...task,
      done: !task.done,
    };
    updateTask(newTask);
  };

  const onUpdate = (event) => {
    event.preventDefault();
    const newTask = {
      id: task.id,
      task: taskData,
      done: task.done,
    };
    if (taskData === "") {
      deleteTask(task.id);
    } else if (taskData === task.task) {
      return;
    } else {
      updateTask(newTask);
      setIsEditing(false);
    }
  };

  return (
    <li className="container">
      <form
        className="form-control d-flex justify-content-between"
        onSubmit={isEditing ? (event) => onUpdate(event) : onDelete}
      >
        <div className="col-1">
          <input
            type="checkbox"
            checked={task.done}
            onChange={changeChecked}
            className="form-check-input"
            value=""
          />
        </div>
        <div className="col-9 ">
          <input
            className={`form-control border-0 ${task.done ? "task-done" : ""}`}
            type="text"
            value={taskData}
            onChange={(event) => onChange(event)}
            onFocus={() => setIsEditing(true)}
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-danger">
            -
          </button>
        </div>
      </form>
    </li>
  );
};

export default Task;
