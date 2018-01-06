import React, { Component } from 'react';
import WILogo from './WILogo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={WILogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
      </div>
    );
  }
}

export default App;
