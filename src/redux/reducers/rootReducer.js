import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
});

export default rootReducer;
