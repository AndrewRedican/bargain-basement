import Types from '../actions/types'

const { OPEN_CART, CLOSE_CART, CHECKOUT, PAYMENT_CONFIRM } = Types

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CART:
      return action.payload
    case CLOSE_CART:
      return action.payload
    case CHECKOUT:
      return action.payload
    case PAYMENT_CONFIRM:
      return action.payload
  }
  return state
}
