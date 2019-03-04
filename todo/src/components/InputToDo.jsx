import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
  };

  handleInput = event => {
    this.setState({
      input: event.target.value,
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
        <button>Add ToDo</button>
      </div>
    );
  }
}

export default App;
