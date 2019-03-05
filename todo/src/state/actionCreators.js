import * as types from '../constants/actionTypes';
import uuid from "uuid";

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

export function addNewToDo(text) {
  return {
    type: types.ADD_NEW_TODO,
    payload: {
        id: uuid(),
        value: text,
        completed: false,
    }
  };
}
