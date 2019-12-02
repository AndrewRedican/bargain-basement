import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import { BASE_PATH, PACKAGES_PATH, SIGNUP_PATH, SIGNIN_PATH } from '../paths'
import NavBar from './NavBar'
import { WelcomePage, SignInPage, SignUpPage } from './Pages'
import PackagesPage from './Pages/PackagesPage'
import CheckoutPane from './CheckoutPane'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

export const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Pane
        display='flex'
        padding={16}
        height='calc(100vh - 84px)'
        borderRadius={3}
      >
        <Route path={BASE_PATH} component={WelcomePage} />
        <Route path={PACKAGES_PATH} component={PackagesPage} />
        <Route path={SIGNUP_PATH} component={SignUpPage} />
        <Route path={SIGNIN_PATH} component={SignInPage} />
      </Pane>
    </BrowserRouter>
    <CheckoutPane />
  </>
)
