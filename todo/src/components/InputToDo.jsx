import React, { Component } from 'react';

class App extends Component {
  // Setting up temporary state on App for fleshing out application components 
  state = {
    input: '',
  }

  handleInput = event => {
      this.setState({
          input: event.target.value,
      })
  }

  render() {
    return (
      <div>
          <input placeholder="Add a todo" value={this.state.input} onChange={this.handleInput}></input>
          <button>Add ToDo</button>
      </div>
    );
  }
}

export default App;