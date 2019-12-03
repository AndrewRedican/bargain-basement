import axios from 'axios'
import firebase from 'firebase/app'
import { toast } from 'react-toastify'

import {
  USER_AUTHENTICATED,
  STORE_PACKAGES,
  STORE_PACKAGE,
  STORE_FILE_META,
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  SET_INPUT_VALUE
} from './types'

import { selectFileByKey } from '../selectors/appData'

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

export const loadPackage = id => dispatch =>
  (async id => {
    try {
      const res = await axios.get(`/packages/${id}`)
      dispatch({ type: STORE_PACKAGE, id, package: res.data })
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  })(id)

export const loadDownloadUrl = relativeDir => dispatch =>
  (async () => {
    try {
      const noStored = !selectFileByKey(relativeDir)
      if (noStored) {
        const name = relativeDir.split('/').slice(-1)[0]
        const downloadUrl = await firebase
          .storage()
          .ref(relativeDir)
          .getDownloadURL()

        dispatch({
          type: STORE_FILE_META,
          file: { downloadUrl, relativeDir, name },
          key: relativeDir
        })
      }
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  })()

export const openCart = () => dispatch =>
  dispatch({
    type: OPEN_CART
  })

export const closeCart = () => dispatch =>
  dispatch({
    type: CLOSE_CART
  })

export const addToCart = (name = '', id) => dispatch =>
  dispatch({ type: ADD_TO_CART, name, id })

export const removeFromCart = (name = '', id) => dispatch =>
  dispatch({ type: REMOVE_FROM_CART, name, id })

export const checkout = () => dispatch => {
  toast.success(
    `That's it! You have checked out and "paid" for these amazing packages. \nThanks for using demo :).`,
    { autoClose: 5000 }
  )
  dispatch({ type: CHECKOUT })
}

export const onInputChange = event => dispatch => {
  dispatch({ type: SET_INPUT_VALUE, text: event.target.value })
}
