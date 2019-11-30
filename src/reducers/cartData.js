import {
  OPEN_CART,
  CLOSE_CART,
  CHECKOUT,
  PAYMENT_CONFIRM
} from '../actions/types'

const initialState = { isShown: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...state, isShown: true }
    case CLOSE_CART:
      return { ...state, isShown: false }
    case CHECKOUT:
      return action.payload
    case PAYMENT_CONFIRM:
      return action.payload
    default:
      return state
  }
}
