import useTask from "../../hook/useTask";
import { useState } from "react";

const FormTodo = () => {
  const { createTask } = useTask();

  const initialData = { task: "" };
  const [taskData, setTaskData] = useState(initialData);

  const changeData = (event) => {
    setTaskData({ ...taskData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setTaskData(initialData);
  };

  const onCreateTask = (event) => {
    event.preventDefault();
    const url = "https://cosas-todo.herokuapp.com/todo";
    const newTask = {
      task: taskData.task,
      done: false,
    };

    createTask(newTask, url);

    resetForm();
  };
  return (
    <>
      <form className="row g-3" onSubmit={onCreateTask}>
        <div className="col-auto">
          <label htmlFor="task" className="visually-hidden">
            Agrega una Tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Agrega una Tarea"
            value={taskData.task}
            onChange={changeData}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Añadir
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTodo;
