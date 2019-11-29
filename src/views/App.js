import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import NavBar from './NavBar'
import { WelcomePage, PackagesPage, SignInPage, SignUpPage } from './Pages'

export const BASE_PATH = '/'
export const PACKAGES_PATH = '/packages'
export const SIGNUP_PATH = '/signup'
export const SIGNIN_PATH = '/signin'

export const App = () => (
  <BrowserRouter>
    <NavBar />
    <Pane
      display='flex'
      padding={16}
      height='calc(100vh - 84px)'
      background='tint2'
      borderRadius={3}
    >
      <Route path={BASE_PATH} component={WelcomePage} />
      <Route path={PACKAGES_PATH} component={PackagesPage} />
      <Route path={SIGNUP_PATH} component={SignUpPage} />
      <Route path={SIGNIN_PATH} component={SignInPage} />
    </Pane>
  </BrowserRouter>
)
