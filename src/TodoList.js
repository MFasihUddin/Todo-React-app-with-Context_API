import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodoContext } from "./context/TodoProvider";

function TodoList() {
  const { todos } = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo key={todo.id} {...todo} />
              {i < todo.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
