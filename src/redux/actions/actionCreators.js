import actionTypes from "./actionTypes";
export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const updateTaskAction = (url, id) => ({
  type: actionTypes.updateTask,
  url,
  id,
});
