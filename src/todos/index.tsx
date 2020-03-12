import React, { useCallback } from "react";
import TodoList from "./todo-list/todos";
import { Todo } from "./model";
import { useDispatch } from "react-redux";
import todoSlice from "../slices/todo";

export interface ITodos {
  list: Todo[];
}

const Todos: React.FC<ITodos> = ({ list }) => {
  const dispatch = useDispatch();
  const addTodo = useCallback(() => {
    dispatch(
      todoSlice.actions.addReq({
        id: list.length + 1,
        name: "New item",
        completed: false
      })
    );
  }, [dispatch, list]);
  return (
    <div className="todos">
      <button className="add-new" onClick={addTodo}>
        Add new Todo
      </button>
      <TodoList list={list} />
    </div>
  );
};

export default Todos;
