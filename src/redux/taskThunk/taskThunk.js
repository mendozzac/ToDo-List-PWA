import {
  loadTasksAction,
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadTasksThunk = () => async (dispatch) => {
  const response = await fetch(apiUrl);
  const tasks = await response.json();
  dispatch(loadTasksAction(tasks));
};

export const createTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  task = await response.json();
  dispatch(createTaskAction(task));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export const updateTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/${task.id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  task = await response.json();
  dispatch(updateTaskAction(task));
};
