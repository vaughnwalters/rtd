import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import './styles/App.css'
import { mapStateToProps, store, mapDispatchToProps } from './store/store'
import Todo from './containers/todo'

// import App from './containers/todo'
// TODO COMPONENT
// class Todo extends Component {

//   onChange = (e) => {
//     this.props.buildingStringAction(e.target.value)
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//     this.props.submitAction()
//   }

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.onSubmit}>
//           <input spellCheck="false" placeholder="Enter a task" value={this.props.item} onChange={this.onChange} />
//           <button className="addTask">+</button>
//         </form>

//         <List
//           itemArr={this.props.itemArr}
//           delete={this.props.deleteAction}
//         />

//       </div>
//     )
//   }
// }

// CONNECTED COMPONENT


ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
)


