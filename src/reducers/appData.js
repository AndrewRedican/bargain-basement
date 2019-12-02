import {
  STORE_PACKAGES,
  STORE_PACKAGE,
  STORE_PRODUCTS,
  STORE_FILE_META
} from '../actions/types'

const initialState = {
  packages: {},
  products: {},
  files: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PACKAGES:
      return {
        ...state,
        packages: {
          ...state.packages,
          ...action.packages.data
        }
      }
    case STORE_PACKAGE:
      return {
        ...state,
        packages: {
          ...state.packages,
          [action.id]: action.package.data
        }
      }
    case STORE_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case STORE_FILE_META:
      return {
        ...state,
        files: {
          ...state.files,
          [action.key]: {
            ...state.files[action.key],
            ...action.file
          }
        }
      }
    default:
      return state
  }
}
