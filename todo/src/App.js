import React, { Component } from 'react';

import './App.css';
import ToDoList from './components/ToDoList';
import InputToDo from './components/InputToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        To Do list
        <ToDoList />
        <InputToDo />
      </div>
    );
  }
}

export default App;
