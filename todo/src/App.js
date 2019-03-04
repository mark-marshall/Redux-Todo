import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import InputToDo from './components/InputToDo';

class App extends Component {
  // Setting up temporary state on App for fleshing out application components 
  state = {
    todos: [{
      value: 'bake cakes',
      completed:false
    }]
  }
  render() {
    return (
      <div className="App">
        Hello World
        <ToDoList todos={this.state.todos}/>
        <InputToDo />
      </div>
    );
  }
}

export default App;
