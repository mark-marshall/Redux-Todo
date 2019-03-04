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
})

export function ToDo(props) {
  return (
    <div>
    <li
      onClick={() =>
        props.changeCompleted({
          id: props.todo.id,
          completedStatus: !props.todo.completed,
        })
      }
    >
      {props.todo.value}
    </li>
    <button
    onClick={() => props.deleteItem(props.todo.id)}
    >Delete item</button>
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
