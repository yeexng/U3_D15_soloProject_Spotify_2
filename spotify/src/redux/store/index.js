import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getSongsReducer from "../reducers/getSongsReducer";

const combinedReducer = combineReducers({
  search: getSongsReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
