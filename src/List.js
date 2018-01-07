import React from 'react'
// import ListItem from './ListItem'

  // deleteItem = (e) => {
  //   this.setState({ 
  //     itemArr: []
  //   })
  // }


const List = props => (
  <div>
    {
      props.itemArr.map((item, index) => <div key={index}> {item} 
        {/* <ListItem /> */}
        <button onClick={props.delete.bind(this, index)}>x</button>
        </div>
      )
    }
  </div>
)

export default List
