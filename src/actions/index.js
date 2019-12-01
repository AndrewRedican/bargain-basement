import {
  STORE_PACKAGES,
  STORE_PRODUCTS,
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART
} from './types'

export const storePackages = packages => dispatch =>
  dispatch({
    type: STORE_PACKAGES,
    packages
  })

export const storeProducts = products => dispatch =>
  dispatch({
    type: STORE_PRODUCTS,
    products
  })

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
