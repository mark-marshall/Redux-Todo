import * as types from './constants/actionTypes';

const defaultState = {
  todos: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.CHANGE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
            return todo;
          }
          return todo;
        }),
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case types.CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false),
      };
    case types.SET_TO_LOCAL_STORE:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
