import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({ todos }){
    return (
        <ul>
            {
                todos.map(todo => <ToDo key={todo.value} value={todo.value} completed={todo.completed}/>)
            }
        </ul>
    )
}