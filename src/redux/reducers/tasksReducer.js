import actionType from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  switch (actionType) {
    case actionType.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionType.createTask:
      newTasks = [...newTasks, action.task];
      break;
    case actionType.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    case actionType.updateTask:
      newTasks = [...action.task];
      break;
    default:
      newTasks = tasks;
  }
  return newTasks;
};

export default tasksReducer;
