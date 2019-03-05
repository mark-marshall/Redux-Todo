import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import ToDo from './ToDo';

export function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDo key={todo.id} todo={todo} />
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

ToDoList.propTypes = {
  todos: PT.arrayOf(PT.shape({
    id: PT.string.isRequired,
    value: PT.string.isRequired,
    completed: PT.bool.isRequired,
  })).isRequired,
};
