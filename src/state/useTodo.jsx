import { create } from "zustand";
import { devtools } from "zustand/middleware";
const todoObj = (todoContent) => {
  return {
    id: crypto.randomUUID(),
    todoContent,
    complete: false,
    edit: false,
  };
};

const addNewTodo = (todos, todoContent) => {
  const todo = todoObj(todoContent);
  const newTodo = todos.concat(todo);

  return newTodo;
};

const toggleCompleteTodo = (todos, todoId) => {
  const newTodo = todos.map((todo) =>
    todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
  );

  return newTodo;
};

const deleteTodo = (todos, todoId) => {
  const newTodo = todos.filter((todo) => todo.id !== todoId);

  return newTodo;
};

const toggleEditTodo = (todos, todoId) => {
  const newTodo = todos.map((todo) =>
    todo.id === todoId ? { ...todo, edit: !todo.edit } : todo
  );

  return newTodo;
};

const updateEditingTodoContent = (todos, todoId, todoContent) => {
  const newTodo = todos.map((todo) =>
    todo.id === todoId ? { ...todo, todoContent } : todo
  );

  return newTodo;
};

const useTodo = create(
  devtools((set) => ({
    todos: [],
    addNewTodo(todoContent) {
      set((state) => ({
        ...state,
        todos: addNewTodo(state.todos, todoContent),
      }));
    },

    toggleCompleteTodo(todoId) {
      set((state) => ({
        ...state,
        todos: toggleCompleteTodo(state.todos, todoId),
      }));
    },

    deleteTodo(todoId) {
      set((state) => ({
        ...state,
        todos: deleteTodo(state.todos, todoId),
      }));
    },

    toggleEditTodo(todoId) {
      set((state) => ({
        ...state,
        todos: toggleEditTodo(state.todos, todoId),
      }));
    },

    updateEditingTodoContent(todoId, todoContent) {
      set((state) => ({
        ...state,
        todos: updateEditingTodoContent(state.todos, todoId, todoContent),
      }));
    },
  }))
);

export default useTodo;
