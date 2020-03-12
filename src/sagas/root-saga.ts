import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo-saga";

export default function* rootSaga() {
  return yield all([fork(todoSaga)]);
}
