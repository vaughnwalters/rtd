import React, { Component } from 'react';
// import WILogo from './WILogo.png';
import List from './List';

// console.log(Component)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: '', 
      itemArr: []
    }
    this.delete = this.delete.bind(this)
  }

  onChange = (e) => {
    // console.log('event', e)
    // changes state every time a letter is entered
    this.setState({ item: e.target.value })
  }

  onSubmit = (e) => {
    // console.log('event', e.target.value)
    // prevent default keeps page from reloading
    e.preventDefault() 
    this.setState({
      item: '',
      itemArr: [...this.state.itemArr, this.state.item]
    })
  }


  delete = (id) => {
    console.log(id)
    this.setState (prevState => ({
      itemArr: prevState.itemArr.filter(el => el !== id)
    
    }));
  }

  // onClick = (e) => {
  //   this.setState({ 
  //     itemArr: []
  //   })
  // }

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

        <List itemArr={this.state.itemArr} delete={this.delete} />

      </div>
    )
  }
}

export default App
