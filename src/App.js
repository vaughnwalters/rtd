import React, { Component } from 'react';
import './App.css';

// import WILogo from './WILogo.png';
import List from './List';

// console.log(Component)
const initialList = (typeof localStorage['itemArr'] !== 'undefined') ? JSON.parse(localStorage.getItem('itemArr')) : []

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: '', 
      itemArr: initialList
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
    const itemArr = [...this.state.itemArr, this.state.item]
    localStorage.setItem('itemArr', JSON.stringify(itemArr)) 
    this.setState({
      item: '',
      itemArr: itemArr
    })
  }


  delete = (id) => {
    // console.log(id)
    console.log(this.state.itemArr)
    const itemArr = this.state.itemArr.filter(el => el !== id)
    console.log(itemArr)
    localStorage.setItem('itemArr', JSON.stringify(itemArr)) 
    // 
    this.setState({
      itemArr: itemArr
    
    });
  }

  render() {
    return (
      <div className="App">
        {/*<header>
          <img src={WILogo} alt='logo' />
          <h1 className='App-title'>Todo App</h1>
        </header> */}
         
        <form onSubmit={this.onSubmit}>
          <input placeholder="Enter a task" value={this.state.item} onChange={this.onChange} />
          <button>Add</button>
        </form>

        <List itemArr={this.state.itemArr} delete={this.delete} />

      </div>
    )
  }
}

export default App
