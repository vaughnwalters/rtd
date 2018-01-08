import React from 'react'
// import ListItem from './ListItem'

  // deleteItem = (e) => {
  //   this.setState({ 
  //     itemArr: []
  //   })
  // }


const List = props => (
  <ul>
    {
      props.itemArr.map((item, index) => <li className="list-item"key={index}> {item} 
        {/* <ListItem /> */}
        <button onClick={props.delete.bind(this, item)}>x</button>
        </li>
      )
    }
  </ul>
)

export default List
