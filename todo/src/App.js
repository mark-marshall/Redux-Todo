import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { setToLocalStore } from './state/actionCreators';
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
  componentDidMount() {
    if (!!this.props.todos) {
      this.props.setToLocalStore(JSON.parse(localStorage.getItem('todos')));
    }
  }

  componentDidUpdate() {
    if (!!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify(this.props.todos));
    }
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setToLocalStore,
    },
    dispatch,
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
