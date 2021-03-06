import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './axiosConfig'
import './paths'
import App from './views/App'
import './styles/index.css'

import { initializeFirebase } from './firebase'
import { userAuthenticated } from './actions'

initializeFirebase(userAuthenticated(store))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
