import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import authReducer from "./slices/authSlice";
const store = configureStore({
  reducer: { books: bookReducer, auths: authReducer },
});

export default store;
