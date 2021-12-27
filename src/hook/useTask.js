import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTasksThunk,
  deleteTaskThunk,
  createTaskThunk,
} from "../redux/taskThunk/taskThunk";

const useTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();
  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);
  const deleteTask = useCallback(
    (id) => {
      dispatch(deleteTaskThunk(id));
    },
    [dispatch]
  );

  const createTask = useCallback(
    (task) => {
      dispatch(createTaskThunk(task));
    },
    [dispatch]
  );

  return {
    tasks,
    createTask,
    loadTasks,
    deleteTask,
  };
};

export default useTasks;
