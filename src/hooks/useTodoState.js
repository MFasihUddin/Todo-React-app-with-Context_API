import { useLocalStorageState } from "./useLocalStorageState";
import { v4 as uuid } from "uuid";
const useTodoState = (defaultVal) => {
  const [todos, setTodos] = useLocalStorageState("todos",defaultVal);
  return {
    todos,
    addTodo: (newTask) => {
      setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
    },
    toggleTodo: (todoId) => {
      const toggleOn = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(toggleOn);
    },
    removeTodo: (todoId) => {
      const remainingTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(remainingTodo);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodo);
    },
  };
};
export default useTodoState;
