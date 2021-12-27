import { useEffect } from "react";
import FormTodo from "../components/FormTodo/FormTodo";
import TodoList from "../components/TodoList/TodoList";
import useTasks from "../hook/useTask";

const TodoListPage = () => {
  const { loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <div className="container">
        <FormTodo />
        <TodoList />
      </div>
    </>
  );
};

export default TodoListPage;
