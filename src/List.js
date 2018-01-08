import React from 'react'

const List = props => (
  <ul>
    {
      props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
        <button onClick={props.delete.bind(this, item)}>x</button>
        </li>
      )
    }
  </ul>
)

export default List
