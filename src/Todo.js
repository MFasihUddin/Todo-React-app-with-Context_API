import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { useToggle } from "./hooks/useToggle";
import EditForm from "./EditForm";
import { TodoContext } from "./context/TodoProvider";

function Todo({ id, task, completed }) {
  const { toggleTodo, removeTodo } = useContext(TodoContext);
  const [isEditing, toggle] = useToggle();
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditForm id={id} task={task} editToggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
            checked={completed}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
