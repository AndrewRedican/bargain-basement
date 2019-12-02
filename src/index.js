import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './axiosConfig'
import { App } from './views/App'
import './index.css'

import { initializeFirebase } from './firebase'
import { userAuthenticated } from './actions'

initializeFirebase(userAuthenticated(store))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
