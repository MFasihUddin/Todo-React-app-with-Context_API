import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
// import TodoReducer from "../reducer/TodoReducer";

export const TodoContext = createContext();

const defaultVal = [{ id: 1, task: "Hello!!!", completed: false }];

export function TodoProvider(props) {
  const { todos, addTodo, toggleTodo, removeTodo, editTodo } =
    useTodoState(defaultVal);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, removeTodo, editTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
