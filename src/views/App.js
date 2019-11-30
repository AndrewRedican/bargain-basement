import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import NavBar from './NavBar'
import {
  WelcomePage,
  PackagesPage,
  SignInPage,
  SignUpPage,
  CheckoutPage
} from './Pages'

export const BASE_PATH = '/'
export const PACKAGES_PATH = '/packages'
export const SIGNUP_PATH = '/signup'
export const SIGNIN_PATH = '/signin'
export const CHECKOUT_PATH = '/checkout'

export const App = () => (
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
      <Route path={CHECKOUT_PATH} component={CheckoutPage} />
    </Pane>
  </BrowserRouter>
)
