import React, { Component } from 'react'
import List from '../components/List'
import { mapStateToProps, mapDispatchToProps } from '../store/store'
import { connect } from 'react-redux'

export class Todo extends Component {

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
