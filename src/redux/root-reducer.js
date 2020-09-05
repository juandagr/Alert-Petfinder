import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import petsReducer from "./pets/pets.reducer";

/**
 * Persist config
 */
const persistConfig = {
  key: "root",
  storage,
  withelist: ["pets"],
};

/**
 * root reducer to combine all app reducers
 */
const rootReducer = combineReducers({
  pets: petsReducer,
});

export default persistReducer(persistConfig, rootReducer);
