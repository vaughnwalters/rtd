import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import './styles/App.css'
import { mapStateToProps, store, mapDispatchToProps } from './store/store'
import List from './components/List'
// FUNCTIONAL COMPONENT
// export const List = props => (
//   <ul>
//     {
//       props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
//         <button
//           className="delete"
//           onClick={props.delete.bind(this, index)}>-</button>
//         </li>
//       )
//     }
//   </ul>
// )

// TODO COMPONENT
class Todo extends Component {

  onChange = (e) => {
    this.props.buildingStringAction(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.submitAction()
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input spellCheck="false" placeholder="Enter a task" value={this.props.item} onChange={this.onChange} />
          <button className="addTask">+</button>
        </form>

        <List
          itemArr={this.props.itemArr}
          delete={this.props.deleteAction}
        />

      </div>
    )
  }
}

// CONNECTED COMPONENT
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


