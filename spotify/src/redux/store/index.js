import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavReducer from "../reducers/favReducer";
import getSongsReducer from "../reducers/getSongsReducer";

const combinedReducer = combineReducers({
  search: getSongsReducer,
  favourite: FavReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
