import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      <li
        onClick={() =>
          changeCompleted({
            id: todo.id,
            completedStatus: !todo.completed,
          })
        }
      >
        {todo.value}
      </li>
      <button onClick={() => deleteItem(todo.id)} type="submit">Delete item</button>
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
