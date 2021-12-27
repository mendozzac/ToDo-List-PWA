import actionType from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks;

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
      newTasks = tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      break;
    default:
      newTasks = tasks;
  }
  return newTasks;
};

export default tasksReducer;
