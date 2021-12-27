import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTasksThunk,
  deleteTaskThunk,
  createTaskThunk,
  updateTaskThunk,
} from "../redux/taskThunk/taskThunk";

const useTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const deleteTask = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
  };

  const updateTask = useCallback(
    (newTask) => {
      dispatch(updateTaskThunk(newTask));
    },
    [dispatch]
  );

  return {
    tasks,
    createTask,
    loadTasks,
    deleteTask,
    updateTask,
  };
};

export default useTasks;
