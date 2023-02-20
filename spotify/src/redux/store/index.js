import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavReducer from "../reducers/favReducer";
import getSongsReducer from "../reducers/getSongsReducer";
import musicPlayerReducer from "../reducers/musicPlayerReducer";

const combinedReducer = combineReducers({
  search: getSongsReducer,
  favourite: FavReducer,
  musicPlayer: musicPlayerReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
