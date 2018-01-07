import React, { Component } from 'react';
// import WILogo from './WILogo.png';
import List from './List';

console.log(Component)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: '', 
      itemArr: []
    }
  }

  onChange = (e) => {
    // console.log('event', e)
    // changes state every time a letter is entered
    this.setState({ item: e.target.value })
  }

  onSubmit = (e) => {
    console.log('event', e)
    e.preventDefault() 
    this.setState({
      item: '',
      itemArr: [...this.state.itemArr, this.state.item]
    })
  }

  render() {
    return (
      <div>
        
        {/*<header>
          <img src={WILogo} alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header> */}
         
        <form onSubmit={this.onSubmit}>
          <input value={this.state.item} onChange={this.onChange} />
          <button>Add</button>
        </form>

        <List itemArr={this.state.itemArr} />

      </div>
    )
  }
}

export default App
