import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import userReducer from "../store/Slice/useSlice"
import storage from "redux-persist/lib/storage"
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist"

const persistConfig = {
   key: "root",
   storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)
const saga = createSagaMiddleware()
const store = configureStore({
   reducer: {
      user: persistedReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(saga),
})

export const persistor = persistStore(store)

export default store
