import { createReducer } from "@reduxjs/toolkit";
import { addBook } from "./bookActions";
import { deleteBook } from "./bookActions";
const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    }); //it need to parameter first is action type, and the second is a call back function
});

export default bookReducer;
