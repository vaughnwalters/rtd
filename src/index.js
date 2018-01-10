import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


const initialList = (typeof localStorage['itemArr'] !== 'undefined') ? JSON.parse(localStorage.getItem('itemArr')) : []


const List = props => (
  <ul>
    {
      props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
        {/* <ListItem /> */}
        <button className="delete" onClick={props.delete.bind(this, item)}>-</button>
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
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input spellCheck="false" placeholder="Enter a task" value={this.state.item} onChange={this.onChange} />
          <button className="addTask">+</button>
        </form>

        <List itemArr={this.state.itemArr} delete={this.delete} />

      </div>
    )
  }
}

// Counter Action
// const increaseAction = { type: 'increase' }
// const decreaseAction = { type: 'decrease' }

// Todo Action
const submitAction = () => {
 type: 'increase' 
}

// refactor from onChange
// const 

const deleteAction = (id) =>{ 
  type: 'decrease',
  id 
}


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

// Todo Reducer
function todoReducer(state = {
      item: '', 
      itemArr: initialList
    }, action) {
  const count = state.count
  console.log(count)
  switch (action.type) {
    case 'submitAction':
      // return { itemArr: count + 1 }
      return deleteAction
    case 'deleteAction':
      // return { count: count - 1 }
      return deleteAction
           default:
      return state
  }
}

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
function mapStateToProps(state) {
  console.log('state', state)
  return {
      item: state.item, 
      itemArr: initialList
  }
}

// Counter Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction),
//     onDecreaseClick: () => dispatch(decreaseAction)
//   }


// Todo Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  console.log(dispatch)
  return {
    onSubmit: () => dispatch(submitAction),
    delete: () => dispatch(deleteAction)
  }
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

























// // REACT TODO

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'


// ReactDOM.render(<App />, document.getElementById('root'))







