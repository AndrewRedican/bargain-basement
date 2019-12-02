import { combineReducers } from 'redux'
import appData from './appData'
import userData from './userData'
import cartData from './cartData'

const rootReducer = combineReducers({
  appData,
  userData,
  cartData
})

export default rootReducer
