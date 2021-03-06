import useTask from "../../hook/useTask";
import { useState } from "react";

const FormTodo = () => {
  const { createTask } = useTask();

  const initialData = { task: "" };

  const [taskData, setTaskData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (taskData.task !== "") {
      setIsDisabled(false);
    }
  };

  const resetForm = () => {
    setTaskData(initialData);
  };

  const onCreateTask = (event) => {
    event.preventDefault();
    const newTask = {
      task: taskData.task,
      done: false,
    };
    createTask(newTask);
    resetForm();
  };

  const changeData = (event) => {
    setTaskData({ ...taskData, [event.target.id]: event.target.value });
    checkForm();
  };

  return (
    <>
      <form className="row g-2 justify-content-center" onSubmit={onCreateTask}>
        <div className="col-8">
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
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={isDisabled}
          >
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTodo;
