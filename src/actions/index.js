import axios from 'axios'

import {
  USER_AUTHENTICATED,
  STORE_PACKAGES,
  STORE_PRODUCTS,
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART
} from './types'

export const userAuthenticated = store => user =>
  store.dispatch({ type: USER_AUTHENTICATED, user })

export const loadPackages = () => dispatch =>
  (async () => {
    try {
      const res = (await axios.get('/packages')) || {}
      const packages = res.data
      dispatch({ type: STORE_PACKAGES, packages })
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  })()

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
