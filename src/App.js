import "./App.css";

import TodoListPage from "./page/TodoListPage";

function App() {
  return (
    <>
      <div className="container container-app">
        <h1>Tareas Que Hacer</h1>
        <TodoListPage />
      </div>
    </>
  );
}

export default App;
