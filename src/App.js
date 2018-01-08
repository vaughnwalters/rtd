import React, { Component } from 'react'
import './App.css'
import List from './List'

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
    this.setState({ item: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const itemArr = [...this.state.itemArr, this.state.item]
    localStorage.setItem('itemArr', JSON.stringify(itemArr)) 
    this.setState({
      item: '',
      itemArr: itemArr
    })
  }

  delete = (id) => {
    console.log(this.state.itemArr)
    const itemArr = this.state.itemArr.filter(el => el !== id)
    console.log(itemArr)
    localStorage.setItem('itemArr', JSON.stringify(itemArr)) 
    this.setState({
      itemArr: itemArr
    })
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.onSubmit}>
          <input placeholder="Enter a task" value={this.state.item} onChange={this.onChange} />
          <button className="addTask">+</button>
        </form>

        <List itemArr={this.state.itemArr} delete={this.delete} />

      </div>
    )
  }
}

export default App
