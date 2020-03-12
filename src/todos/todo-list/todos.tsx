import React from "react";
import { Todo } from "../model";

export interface ITodoList {
  list: Todo[];
}

const TodoList: React.FC<ITodoList> = ({ list }) => {
  return (
    <div className="todo-list">
      {list.map(todo => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
};

export default TodoList;
