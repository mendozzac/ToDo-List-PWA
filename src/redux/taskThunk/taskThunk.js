import {
  loadTasksAction,
  createTaskAction,
  deleteTaskAction,
} from "../actions/actionCreators";

const apiUrl = "https://cosas-todo.herokuapp.com/todo";

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
  const response = await fetch(`${apiUrl}/tasks/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};
