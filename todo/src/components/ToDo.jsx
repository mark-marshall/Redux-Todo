import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const changeCompleted = toDoInfo => ({
  type: 'CHANGE_COMPLETED',
  toDoInfo,
});

export function ToDo(props) {
  return (
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
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeCompleted,
    },
    dispatch,
  );
}

export default connect(
  st => st,
  mapDispatchToProps,
)(ToDo);
