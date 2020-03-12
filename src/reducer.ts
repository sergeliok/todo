import todoSlice from "./slices/todo";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos: todoSlice.reducer
});

export default rootReducer;
