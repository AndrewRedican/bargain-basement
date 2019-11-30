import { combineReducers } from 'redux'
import AppData from './appData'
import UserData from './userData'
import CartData from './cartData'

const rootReducer = combineReducers({
  AppData,
  UserData,
  CartData
})

export default rootReducer
