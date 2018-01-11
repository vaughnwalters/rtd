import {
  CREATE_TODO,
  BUILD_STRING,
  DELETE_TODO
} from '../constants'

export const submitAction = () => ({
 type: CREATE_TODO
})

export const buildingStringAction = (value) => ({
  type: BUILD_STRING,
  payload: value
})

export const deleteAction = (index) => ({ 
  type: DELETE_TODO,
  payload: index 
})

