import { useRef } from "react";
import useTodo from "./state/useTodo";

const TodoForm = () => {
  const { addNewTodo } = useTodo();
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    addNewTodo(value);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type in Something ..." ref={inputRef} />
    </form>
  );
};

export default TodoForm;
