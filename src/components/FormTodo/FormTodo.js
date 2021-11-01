const FormTodo = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <label for="inputTask" className="visually-hidden">
            Agrega una Tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTask"
            placeholder="Agrega una Tarea"
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
