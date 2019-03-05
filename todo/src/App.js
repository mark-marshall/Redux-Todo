import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import ToDoList from './components/ToDoList';
import InputToDo from './components/InputToDo';

const AppWrapper = styled.div`
  width: 400px;
  margin: auto;
  padding: 3% 5%;
  background-color: #3d075e;
  border-radius: 4px;

  h2 {
    color: #f2af9a;
    text-transform: lowercase;
    font-size: 35px;
    margin-bottom: 50px;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h2>
          Let's get to work{' '}
          <span role="img" aria-label="octopus">
            🐙
          </span>
        </h2>
        <ToDoList />
        <InputToDo />
      </AppWrapper>
    );
  }
}

export default App;
