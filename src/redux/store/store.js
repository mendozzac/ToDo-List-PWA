import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
