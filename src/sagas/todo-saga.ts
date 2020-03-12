import { takeEvery, debounce, put, all } from "redux-saga/effects";
import todoSlice from "../slices/todo";

function* addReq(action: any) {
  yield debounce(2000, todoSlice.actions.addReq.type, add);
}

function* add(actions: any) {
  console.log("add");
  yield put(todoSlice.actions.add(actions.payload));
}

export default function* todoSaga() {
  yield all([takeEvery(todoSlice.actions.addReq, addReq)]);
}
