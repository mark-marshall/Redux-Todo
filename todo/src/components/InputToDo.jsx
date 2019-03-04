import React, { Component } from 'react';

class App extends Component {
  // Setting up temporary state on App for fleshing out application components 
  state = {
    input: '',
  }
  render() {
    return (
      <div>
          <input placeholder="Add a todo"></input>
          <button>Add ToDo</button>
      </div>
    );
  }
}

export default App;