import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Pane } from 'evergreen-ui'
import { ToastContainer } from 'react-toastify'
import {
  BASE_PATH,
  PACKAGES_PATH,
  SIGNUP_PATH,
  SIGNIN_PATH,
  PACKAGE_DETAIL
} from '../paths'
import NavBar from './NavBar'
import { WelcomePage, SignInPage, SignUpPage } from './Pages'
import PackagesPage from './Pages/PackagesPage'
import PackageDetails from './Pages/PackageDetails'
import CheckoutPane from './CheckoutPane'
import { loadDownloadUrl } from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.loadDownloadUrl('assets/icons/png/cart.png')
    this.props.loadDownloadUrl('assets/icons/png/add.png')
    this.props.loadDownloadUrl('assets/icons/png/delete.png')
    this.props.loadDownloadUrl('assets/icons/png/discount.png')
  }

  render() {
    return (
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
            <Route path={PACKAGE_DETAIL} component={PackageDetails} />
          </Pane>
        </BrowserRouter>
        <CheckoutPane />
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadDownloadUrl }, dispatch)

export default connect(null, mapDispatchToProps)(App)
