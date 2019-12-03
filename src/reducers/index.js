import { combineReducers } from 'redux'
import appData from './appData'
import cartData from './cartData'

const rootReducer = combineReducers({
  appData,
  cartData
})

export default rootReducer
