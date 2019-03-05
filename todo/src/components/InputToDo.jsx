import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';

import { addNewToDo } from '../state/actionCreators';

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
      <div>
        <input
          placeholder="Add a todo"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button onClick={() => this.addTodo()}>Add ToDo</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addNewToDo,
    },
    dispatch,
  );
}

export default connect(
  st => st,
  mapDispatchToProps,
)(InputToDo);
