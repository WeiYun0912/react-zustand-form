import "./App.css";
import Products from "./Products";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  console.log("test");
  return (
    <>
      <TodoForm />
      <Todos />
      <Products />
    </>
  );
}

export default App;
