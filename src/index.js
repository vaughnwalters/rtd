import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/App.css'
import { store } from './store/store'
import Todo from './containers/todo'

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
)
