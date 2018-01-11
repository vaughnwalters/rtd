import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { autoRehydrate, persistStore} from 'redux-persist'
import './styles/App.css'
import { todoReducer } from './reducers/todoReducer'

import { submitAction, buildingStringAction, deleteAction } from './actions/todo'

// FUNCTIONAL COMPONENT
const List = props => (
  <ul>
    {
      props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
        <button
          className="delete"
          onClick={props.delete.bind(this, index)}>-</button>
        </li>
      )
    }
  </ul>
)


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


// ACTIONS
// const submitAction = () => ({
//  type: 'CREATE_TODO'
// })

// const buildingStringAction = (value) => ({
//   type: 'DESCRIBE_TODO',
//   payload: value
// })

// const deleteAction = (index) => ({ 
//   type: 'DELETE_TODO',
//   payload: index 
// })


// REDUCER
// const initialState = {item: '', itemArr: []}

// function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'DESCRIBE_TODO':
//       return {
//         ...state,
//         item: action.payload
//       }
//     case 'CREATE_TODO':
//       return {
//         item: '',
//         itemArr: [...state.itemArr, state.item]
//       }
//     case 'DELETE_TODO':
//       const index = action.payload
//       return {
//         ...state,
//         itemArr: [
//           ...state.itemArr.slice(0, index), 
//           ...state.itemArr.slice(index + 1)
//         ]
//       }
//     case 'persist/REHYDRATE':
//       return {...state, persistedState: action.payload
//       }
//     default:
//       return state
//   }
// }


// LOCAL STORAGE MIDDLEWARE
const store = compose(
  autoRehydrate()
  )(createStore)(todoReducer)

persistStore(store)


// STORE
function mapStateToProps(state) {
  return {
      item: state.item, 
      itemArr: state.itemArr
  }
}

const mapDispatchToProps = {
  submitAction,
  deleteAction,
  buildingStringAction
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


