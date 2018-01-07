import React from 'react'

const List = props => (
  <div>
    {
      props.itemArr.map((item, index) => <div key={index}> {item} </div>
      )
    }
  </div>
)

export default List
