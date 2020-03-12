import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import { Todo } from "./todos/model";
import rootSaga from "./sagas/root-saga";

export interface IStore {
  todos: Todo[];
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
