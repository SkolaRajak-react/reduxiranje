import { combineReducers } from "redux";
import usersReducer from "./Users";
import movieReducer from "./Movies";

export default combineReducers({
  users: usersReducer,
  movies: movieReducer
});
