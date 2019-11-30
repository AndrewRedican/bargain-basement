import { OPEN_CART, CLOSE_CART, ADD_TO_CART } from './types'

export const openCart = () => dispatch =>
  dispatch({
    type: OPEN_CART
  })

export const closeCart = () => dispatch =>
  dispatch({
    type: CLOSE_CART
  })

export const addToCart = pkg => dispatch =>
  dispatch({
    type: ADD_TO_CART,
    package: pkg
  })
