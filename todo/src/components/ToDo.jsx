import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PT from 'prop-types';
import styled from 'styled-components';

import { changeCompleted, deleteItem } from '../state/actionCreators';

const ToDoWrappers = styled.div`
  .complete {
    text-decoration: line-through;
    color: red;
  }
`;

export function ToDo({ changeCompleted, deleteItem, todo }) {
  return (
    <div>
      <ToDoWrappers>
        <li
          onClick={() => changeCompleted(todo)}
          className={todo.completed ? 'complete' : 'incomplete'}
        >
          {todo.value}
        </li>
      </ToDoWrappers>
      <button onClick={() => deleteItem(todo.id)} type="submit">
        Delete item
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeCompleted,
      deleteItem,
    },
    dispatch,
  );
}

export default connect(
  st => st,
  mapDispatchToProps,
)(ToDo);

ToDo.propTypes = {
  todo: PT.shape({
    id: PT.string.isRequired,
    value: PT.string.isRequired,
    completed: PT.bool.isRequired,
  }).isRequired,
  changeCompleted: PT.func.isRequired,
  deleteItem: PT.func.isRequired,
};
