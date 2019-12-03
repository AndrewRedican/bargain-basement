import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Row } from 'shards-react'
import { ToastContainer } from 'react-toastify'
import { BASE_PATH, PACKAGES_PATH, PACKAGE_DETAIL } from '../paths'
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
    this.props.loadDownloadUrl('assets/icons/png/remove.png')
    this.props.loadDownloadUrl('assets/icons/png/discount.png')
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Container>
            <Row>
              <Route exact path={BASE_PATH} component={WelcomePage} />
              <Route path={PACKAGES_PATH} component={PackagesPage} />
              <Route path={PACKAGE_DETAIL} component={PackageDetails} />
            </Row>
          </Container>
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
