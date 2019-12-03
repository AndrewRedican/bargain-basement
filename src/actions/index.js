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
  ADD_TO_CART
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

export const addToCart = (pkgName = '') => dispatch => {
  toast.success(`Your ${pkgName} package has been added.`)
  dispatch({
    type: ADD_TO_CART,
    package: pkgName
  })
}
