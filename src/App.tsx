import React from "react";
import "./App.css";
import Todos from "./todos";

import { useSelector } from "react-redux";
import { IStore } from "./store";
import { Todo } from "./todos/model";

function App() {
  const todos = useSelector<IStore>(state => state.todos);

  return (
    <div className="App">
      <Todos list={todos as Todo[]} />
    </div>
  );
}

export default App;
