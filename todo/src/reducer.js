import * as types from './constants/actionTypes';

const defaultState = {
  todos: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case types.CHANGE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.toDoInfo.id) {
            todo.completed = action.toDoInfo.completedStatus;
            return todo;
          }
          return todo;
        }),
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.toDoID),
      };
    default:
      return state;
  }
}
