import FormTodo from "../components/FormTodo/FormTodo";
import TodoList from "../components/TodoList/TodoList";

const TodoListPage = () => {
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
