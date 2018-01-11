import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'



const initialList = (typeof localStorage['itemArr'] !== 'undefined') ? JSON.parse(localStorage.getItem('itemArr')) : []

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

// Counter component
// class Counter extends Component {
//   render() {
//     const { value, onIncreaseClick, onDecreaseClick } = this.props
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//         <button onClick={onDecreaseClick}>Decrease</button>

//       </div>
//     )
//   }
// }

// TODO COMPONENT
class Todo extends Component {
  //  constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   item: '', 
  //   //   itemArr: initialList
  //   // }
  //   // this.delete = this.delete.bind(this)
  // }

  // delete() {}

  onChange = (e) => {
    // this.setState({ item: e.target.value })
    this.props.typing(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault()
    // const itemArr = [...this.state.itemArr, this.state.item]
    // localStorage.setItem('itemArr', JSON.stringify(itemArr)) 
    // this.setState({
    //   item: '',
    //   itemArr: itemArr
    // })
    this.props.submitAction()
  }

  // delete = (index) => {
  //   // console.log(this.state.itemArr)
  //   const itemArr = this.state.itemArr.filter(el => el !== id)
  //   console.log(itemArr)
  //   // abstract this implementation elsewhere
  //   localStorage.setItem('itemArr', JSON.stringify(itemArr))
  //   // redux-logic
  //   // (logic middleware that listens to delete and then handles state mutations like local storage, etc)
  //   // this.setState({
  //   //   itemArr: itemArr
  //   // });
  //   this.props.delete()
  // }

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

// Counter Action
// const increaseAction = { type: 'increase' }
// const decreaseAction = { type: 'decrease' }

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


// Counter Reducer
// function counter(state = { count: 0 }, action) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     case 'decrease':
//       return { count: count - 1 }
//     default:
//       return state
//   }
// }

const initialState = {item: '', itemArr: []}
// Todo Reducer
function todoReducer(state = initialState, action) {
  // const count = state.count
  // console.log(count)
  switch (action.type) {
    case 'DESCRIBE_TODO':
      return {
        ...state,
        item: action.payload
      }
    case 'CREATE_TODO':
      // return { itemArr: count + 1 }
      // return deleteAction
      // console.log(state.item)
      return {
        item: '',
        itemArr: [...state.itemArr, state.item]
      }
    case 'DELETE_TODO':
      // return { count: count - 1 }
      const index = action.payload
      return {
        ...state,
        itemArr: [
          ...state.itemArr.slice(0, index), // figure out math
          ...state.itemArr.slice(index + 1)
        ]
      }
    default:
      return state
  }
}

// on @@APP_INIT or similar load saved todos from local storage

// Counter Store
// const store = createStore(counter)

// Todo Store
const store = createStore(todoReducer)

// Counter Map Redux state to component props

// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

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

// Counter Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction),
//     onDecreaseClick: () => dispatch(decreaseAction)
//   }


// Todo Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   console.log(dispatch)
//   return {
//     onSubmit: () => dispatch(submitAction),
//     delete: () => dispatch(deleteAction)
//   }
// }

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

// // Counter Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )


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


















// // REACT TODO

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'


// ReactDOM.render(<App />, document.getElementById('root'))







