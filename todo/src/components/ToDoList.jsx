import React from 'react';
import { connect } from 'react-redux';

import ToDo from './ToDo';

export function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDo key={todo.value} value={todo.value} completed={todo.completed} />
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(ToDoList);
