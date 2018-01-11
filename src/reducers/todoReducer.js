const initialState = {item: '', itemArr: []}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DESCRIBE_TODO':
      return {
        ...state,
        item: action.payload
      }
    case 'CREATE_TODO':
      return {
        item: '',
        itemArr: [...state.itemArr, state.item]
      }
    case 'DELETE_TODO':
      const index = action.payload
      return {
        ...state,
        itemArr: [
          ...state.itemArr.slice(0, index), // figure out math
          ...state.itemArr.slice(index + 1)
        ]
      }
    case 'persist/REHYDRATE':
      return {...state, persistedState: action.payload
      }
    default:
      return state
  }
}
