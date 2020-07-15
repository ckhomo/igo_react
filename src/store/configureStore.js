import { createStore } from "redux";
// import thunk from "redux-thunk"
import rootReducer from "../reduxers";

const configureStore = function (preloadedState) {
  createStore(rootReducer, preloadedState);
};

export default configureStore;
