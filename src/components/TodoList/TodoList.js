import useTasks from "../../hook/useTask";

const TodoList = () => {
  const { tasks } = useTasks();
  console.log("list", tasks);
  return (
    <>
      <div className="container form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheck"
        />
        <label className="form-check-label" htmlFor="flexCheck">
          Hecho
        </label>

        <input
          className="form-control col-4"
          type="text"
          value={tasks.name}
          aria-label="Disabled input example"
          disabled
          readOnly
        />

        <button className="btn btn-danger">Borrar</button>
      </div>
    </>
  );
};

export default TodoList;
