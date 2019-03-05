import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PT from 'prop-types';
import styled from 'styled-components';

import { addNewToDo, clearCompleted } from '../state/actionCreators';

const InputWrapper = styled.div`
  button {
    background-color: #f2af9a;
    color: #3d075e;
    padding: 5% 7%;
    border: none;
    border-radius: 2px;
    font-size: 20px;
    font-weight: bold;
    text-transform: lowercase;
    cursor: pointer;
    margin: 10px 2% 30px 0;
  }

  button:hover {
    background-color: #5dc8bd;
  }

  input {
    width: 90%;
    padding: 5%;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 50px;
  }
`;

export class InputToDo extends Component {
  state = {
    input: '',
  };

  handleInput = event => {
    this.setState({
      input: event.target.value,
    });
  };

  addTodo = () => {
    this.props.addNewToDo(this.state.input);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <InputWrapper>
        <input
          placeholder="Add a todo"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button onClick={() => this.addTodo()}>Add ToDo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </InputWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addNewToDo,
      clearCompleted,
    },
    dispatch,
  );
}

export default connect(
  st => st,
  mapDispatchToProps,
)(InputToDo);

InputToDo.propTypes = {
  addNewToDo: PT.func.isRequired,
};
