import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodoContext } from "./context/TodoProvider";

function EditForm({ id, task, editToggle }) {
  const { editTodo } = useContext(TodoContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          editToggle();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          autoFocus
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default EditForm;
