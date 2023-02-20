import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavReducer from "../reducers/favReducer";
import getSongsReducer from "../reducers/getSongsReducer";
import musicPlayerReducer from "../reducers/musicPlayerReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // default value: localStorage
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  search: getSongsReducer,
  favourite: FavReducer,
  musicPlayer: musicPlayerReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

//remember to restart npm

export { store, persistedStore };
