import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

const  App = () => {
  return (
    <div className = "App  my-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
};
export default App;
