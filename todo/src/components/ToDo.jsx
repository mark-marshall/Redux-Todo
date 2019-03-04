import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const ToDoWrappers = styled.div`
  .complete {
    text-decoration: line-through;
    color: red;
  }
`;

const changeCompleted = toDoInfo => ({
  type: 'CHANGE_COMPLETED',
  toDoInfo,
});

const deleteItem = toDoID => ({
  type: 'DELETE_ITEM',
  toDoID,
});

export function ToDo({ changeCompleted, deleteItem, todo }) {
  return (
    <div>
      <ToDoWrappers>
        <li
          onClick={() =>
            changeCompleted({
              id: todo.id,
              completedStatus: !todo.completed,
            })
          }
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
