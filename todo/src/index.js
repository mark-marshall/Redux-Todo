import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

function reducer(state, action) {
  return {
    todos: [{ value: 'bake cakes', completed: false }, { value: 'clean car', completed: false }],
  };
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
