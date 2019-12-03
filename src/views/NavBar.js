import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openCart } from '../actions'
import { BASE_PATH, PACKAGES_PATH } from '../paths'
import { Navbar, Nav, NavItem, NavLink } from 'shards-react'

class NavBar extends Component {
  render() {
    return (
      <Navbar sticky='top' type='dark' theme='primary' expand='md'>
        <NavItem>
          <Link id='brand-title' to={BASE_PATH}>
            B. Basement
          </Link>
        </NavItem>
        <Nav navbar>
          <NavItem>
            <Link className='nav-link active' to={PACKAGES_PATH}>
              Packages
            </Link>
          </NavItem>
        </Nav>
        <Nav navbar className='ml-auto'>
          <NavLink active className='no-padding pointer'>
            <img
              id='shopping-cart-header-button'
              src={this.props.pkgImage.downloadUrl}
              height={40}
              width={40}
              onClick={this.props.openCart}
            />
          </NavLink>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = ({ appData }) => ({
  pkgImage: appData.files['assets/icons/png/cart.png']
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCart }, dispatch)

NavBar.defaultProps = {
  pkgImage: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
