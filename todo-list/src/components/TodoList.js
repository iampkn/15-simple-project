import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSelectors } from "../store/Slice/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
        />
      );
    }
  }
  return (
    <div className="todo-list">
      <h3>Your Todo: </h3>
      <h4>Count: </h4>
      <button className="delete-btn">Clear All Todos</button>
      <div>{todoList}</div>
    </div>
  );
};

export default TodoList;
