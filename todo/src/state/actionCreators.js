import * as types from '../constants/actionTypes';

export function changeCompleted(toDoInfo) {
  return {
    type: types.CHANGE_COMPLETED,
    toDoInfo,
  };
}

export function deleteItem(toDoID) {
  return {
    type: types.DELETE_ITEM,
    toDoID,
  };
}

export function addNewToDo(todo) {
  return {
    type: types.ADD_NEW_TODO,
    todo,
  };
}
