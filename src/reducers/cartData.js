import {
  OPEN_CART,
  CLOSE_CART,
  CHECKOUT,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/types'

const initialState = { isShown: false, selectedPkgIds: {} }

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, isShown: true }
    case CLOSE_CART:
      return { ...state, isShown: false }
    case ADD_TO_CART:
      return {
        ...state,
        selectedPkgIds: {
          ...state.selectedPkgIds,
          [action.id]: true
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        selectedPkgIds: {
          ...state.selectedPkgIds,
          [action.id]: false
        }
      }
    case CHECKOUT:
      return {
        ...state,
        selectedPkgIds: {}
      }
    default:
      return state
  }
}
