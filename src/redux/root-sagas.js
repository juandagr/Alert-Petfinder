import { all, call } from "redux-saga/effects";
import { petsSagas } from "./pets/pets.sagas";

/**
 * root saga to combine all app sagas
 */
export default function* rootSaga() {
  yield all([call(petsSagas)]);
}
