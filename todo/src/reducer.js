import * as types from './constants/actionTypes';

const defaultState = {
  todos: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      const newTodos = [...state.todos, action.todo];
      return { ...state, todos: newTodos };
    case types.CHANGE_COMPLETED:
      const changedTodos = state.todos.map(todo => {
        if (todo.id === action.toDoInfo.id) {
          todo.completed = action.toDoInfo.completedStatus;
          return todo;
        }
        return todo;
      });
      return { ...state, todos: changedTodos };
    case types.DELETE_ITEM:
      const updatedTodos = state.todos.filter(
        todo => todo.id !== action.toDoID,
      );
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
}
