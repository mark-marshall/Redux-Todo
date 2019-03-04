import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const defaultState = {
    todos: [],
}

function reducer(state = defaultState, action){
    switch(action.type) {
        case 'ADD_NEW_TODO':
        let newTodos = [...state.todos, action.todo]
        return {...state, todos: newTodos};
        default:
        return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
