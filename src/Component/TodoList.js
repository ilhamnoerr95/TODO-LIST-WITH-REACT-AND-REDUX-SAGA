import React from 'react';
import {useSelector} from "react-redux";
// import todos from '../redux/app-saga';
import TodoItem from './TodoItems'

const TodoList = ()=>{
    let todos = useSelector((state)=> state.app)
    console.log("todos", todos)
    return <div className="my-3">
            {todos.map((todo)=>{
                return <TodoItem key={todo.id} todoNama={todo}/>
            })}
    </div>
}

export default TodoList