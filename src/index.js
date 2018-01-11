import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { autoRehydrate, persistStore} from 'redux-persist'
import './App.css'




// const initialList = (typeof localStorage['itemArr'] !== 'undefined') ? JSON.parse(localStorage.getItem('itemArr')) : []


// FUNCTIONAL COMPONENT
const List = props => (
  <ul>
    {
      props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
        {/* <ListItem /> */}
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
    this.props.typing(e.target.value)
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


// Todo Action
const submitAction = () => ({
 type: 'CREATE_TODO'
})

const typing = (value) => ({
  type: 'DESCRIBE_TODO',
  payload: value
})

// refactor from onChange
// const 
// not currrently removing from localStorage
const deleteAction = (index) => ({ 
  type: 'DELETE_TODO',
  payload: index 
})


const initialState = {item: '', itemArr: []}
// Todo Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'DESCRIBE_TODO':
      return {
        ...state,
        item: action.payload
      }
    case 'CREATE_TODO':
      return {
        item: '',
        itemArr: [...state.itemArr, state.item]
      }
    case 'DELETE_TODO':
      const index = action.payload
      return {
        ...state,
        itemArr: [
          ...state.itemArr.slice(0, index), // figure out math
          ...state.itemArr.slice(index + 1)
        ]
      }
    case 'persist/REHYDRATE':
      return {...state, persistedState: action.payload
      }
    default:
      return state
  }
}

// on @@APP_INIT or similar load saved todos from local storage

// local storage:
const store = compose(
  autoRehydrate()
  )(createStore)(todoReducer)

persistStore(store)

// Todo Store
// const store = createStore(todoReducer)

// Todo Map Redux state to component props

// this.props.item and then value is state.item, por ejamplo
function mapStateToProps(state) {
  console.log('state', state)
  return {
      item: state.item, 
      // itemArr: initialList
      itemArr: state.itemArr
  }
}


// method on the store to consume the action object

// passing actions we created (in this example keys with the same names)

// mapDispatchToProps if an object is automatically bound to Dispatch, so each key inside the object becomes bound to dispatch.  If a function though, need to be explicit about it 

const mapDispatchToProps = {
  // onSubmit: submitAction
  // delete: deleteAction
  submitAction,
  deleteAction,
  typing
}




// Todo Connected Component
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





// mapStateToProps -
// first arg is a function that takes state as an argument
// can call state X and props Y 



