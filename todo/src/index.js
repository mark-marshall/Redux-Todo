import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as types from './constants/actionTypes';
import './index.css';
import App from './App';

const defaultState = {
  todos: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      const newTodos = [...state.todos, action.todo];
      return { ...state, todos: newTodos };
    case types.CHANGE_COMPLETED:
      const changedTodos = state.todos.map((todo) => {
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

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
