import useTasks from "../../hook/useTask";
import Task from "../Task/Task";

const TodoList = () => {
  const { tasks } = useTasks();

  return (
    <ul className="container">
      {tasks
        .sort((task) => (task.done ? 1 : -1))
        .map((task) => (
          <Task task={task} key={task.id} />
        ))}
    </ul>
  );
};

export default TodoList;
