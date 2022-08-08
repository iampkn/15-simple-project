import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodos } from "../store/Slice/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const submit = () => {
    // if (text.length > 0) {
    //   dispatch(addTodo({ id: nanoid(), todo: text, completed: false }));
    // }
    const items = text.split(",");
    // items.forEach((item) =>
    //   dispatch(addTodo({ id: nanoid(), todo: item, completed: false }))
    // );
    dispatch(
      addTodos(
        items.map((item) => ({ id: nanoid(), text: item, completed: false }))
      )
    );
  };
  return (
    <div className="add-todo">
      <p>To add multiple items write them then using comma to seperated</p>
      <p>
        <li>eg: react, redux, html, css</li>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
