import React from 'react'

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

export default List
