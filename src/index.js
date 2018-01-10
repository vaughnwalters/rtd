import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Counter component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>

      </div>
    )
  }
}

// TODO COMPONENT
class Todo extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>

      </div>
    )
  }
}

// Counter Action
// const increaseAction = { type: 'increase' }
// const decreaseAction = { type: 'decrease' }

// Todo Action
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }


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
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }
    default:
      return state
  }
}

// Counter Store
// const store = createStore(counter)

// Todo Store
const store = createStore(counter)

// Counter Map Redux state to component props

// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// Todo Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
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
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
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







