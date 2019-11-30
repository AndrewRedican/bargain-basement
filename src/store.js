import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(
  ReduxPromise,
  ReduxThunk
)(createStore)

export default createStoreWithMiddleware(Reducers)
