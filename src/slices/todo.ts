import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 1, name: "First of all", completed: false },
  { id: 2, name: "Second", completed: false }
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addReq: (state, action) => state,
    add: (state, action) => [...state, action.payload]
  }
});

export default todoSlice;
