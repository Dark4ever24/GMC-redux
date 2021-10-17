import React from "react"
import TodoItem from "./TodoItem.js"
import { useSelector } from "react-redux"

const  TodoList = () => {
const todos = useSelector(state=>state);
return (
<div>
{todos.map((todo) => {
return <TodoItem key={todos.id} todo={todo}/>;})}
</div>
);
};
export default TodoList;
