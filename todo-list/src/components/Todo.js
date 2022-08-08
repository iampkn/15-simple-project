import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ text, completed, id }) => {
  const toggle = () => {};
  const deleteItem = () => {};
  return (
    <div className="todo">
      <input
        type="checkbox"
        id="todoItem"
        value={completed}
        onChange={toggle}
      />
      <label htmlFor="todoItem">{text}</label>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default Todo;
