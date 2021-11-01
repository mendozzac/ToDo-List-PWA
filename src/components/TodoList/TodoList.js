const TodoList = () => {
  return (
    <>
      <div className="container form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheck"
        />
        <label className="form-check-label" for="flexCheck">
          Hecho
        </label>
        <input
          className="form-control col-4"
          type="text"
          value=""
          aria-label="Disabled input example"
          disabled
          readonly
        />
        <button className="btn btn-danger">Borrar</button>
      </div>
    </>
  );
};

export default TodoList;
