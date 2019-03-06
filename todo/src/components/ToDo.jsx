import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PT from 'prop-types';
import styled from 'styled-components';

import { changeCompleted, deleteItem } from '../state/actionCreators';

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToDoWrappers = styled.div`
  li {
    font-size: 25px;
    color: #f6f6f6;
    cursor: pointer;
    line-height: 1.7;
  }

  .complete {
    text-decoration: line-through;
    color: #eb4e47;
  }
`;

const DeleteWrapper = styled.div`
  button {
    background-color: #eb4e47;
    color: #3d075e;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: bold;
    text-transform: lowercase;
    cursor: pointer;
    margin: 10px 2% 30px 0;
  }

  button:hover {
    background-color: #5dc8bd;
  }
`;

export function ToDo({ changeCompleted, deleteItem, todo }) {
  return (
    <ListWrapper>
      <ToDoWrappers>
        <li
          onClick={() => changeCompleted(todo)}
          className={todo.completed ? 'complete' : 'incomplete'}
        >
          {todo.value}
        </li>
      </ToDoWrappers>
      <DeleteWrapper>
        <button onClick={() => deleteItem(todo.id)} type="submit">
          X
        </button>
      </DeleteWrapper>
    </ListWrapper>
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
