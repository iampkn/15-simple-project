import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../store/Slice/useSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
   key: "root",
   storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
   reducer: {
      user: persistedReducer,
   },
})

export const persistor = persistStore(store)

export default store
