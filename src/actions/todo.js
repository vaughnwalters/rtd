export const submitAction = () => ({
 type: 'CREATE_TODO'
})

export const buildingStringAction = (value) => ({
  type: 'DESCRIBE_TODO',
  payload: value
})

export const deleteAction = (index) => ({ 
  type: 'DELETE_TODO',
  payload: index 
})

