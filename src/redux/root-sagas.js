import { all, call } from "redux-saga/effects";
import { petsSagas } from "./pets/pets.sagas";

export default function* rootSaga() {
  yield all([call(petsSagas)]);
}
