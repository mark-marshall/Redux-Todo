import uuid from 'uuid';

import * as types from '../constants/actionTypes';

export function changeCompleted(todo) {
  return {
    type: types.CHANGE_COMPLETED,
    payload: {
      id: todo.id,
      completed: !todo.completed,
    },
  };
}

export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    payload: id,
  };
}

export function addNewToDo(text) {
  return {
    type: types.ADD_NEW_TODO,
    payload: {
      id: uuid(),
      value: text,
      completed: false,
    },
  };
}
