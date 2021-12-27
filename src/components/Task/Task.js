// import { useState } from "react";

const Task = ({ task }) => {
  const initialData = task.task;
  // const [taskData, setTaskData]=useState(initialData)
  return (
    <li>
      <div className="container form-check">
        <label className="form-check-label" htmlFor="flexCheck">
          Hecho
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheck"
        />
        <form>
          <input
            className="form-control col-4"
            type="text"
            value={initialData}
            readOnly
          />

          <button className="btn btn-danger">-</button>
        </form>
      </div>
    </li>
  );
};

export default Task;
