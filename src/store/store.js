import { compose, createStore } from 'redux'
import { autoRehydrate, persistStore} from 'redux-persist'
import { todoReducer } from '../reducers/todoReducer'
import { submitAction, buildingStringAction, deleteAction } from '../actions/todo'

export const store = compose(
  autoRehydrate()
  )(createStore)(todoReducer)

persistStore(store)

export const mapStateToProps = (state) => {
  return {
      item: state.item, 
      itemArr: state.itemArr
  }
}

export const mapDispatchToProps = {
  submitAction,
  deleteAction,
  buildingStringAction
}
