import { STORE_PACKAGES, STORE_PRODUCTS } from '../actions/types'

const initialState = {
  packages: {},
  products: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PACKAGES:
      return {
        ...state,
        packages: action.packages
      }
    case STORE_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    default:
      return state
  }
}
