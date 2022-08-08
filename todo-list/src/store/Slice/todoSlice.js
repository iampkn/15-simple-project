import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);
const todoSlide = createSlice({
  name: "todo",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
  },
});

export const { addTodo, addTodos } = todoSlide.actions;
export default todoSlide.reducer;
