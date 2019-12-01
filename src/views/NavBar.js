import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openCart } from '../actions'
import { BASE_PATH, PACKAGES_PATH, SIGNIN_PATH, SIGNUP_PATH } from './App'
import { Navbar, Nav, NavItem, NavLink } from 'shards-react'

class NavBar extends Component {
  render() {
    return (
      <Navbar type='dark' theme='primary' expand='md'>
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
          <NavItem>
            <NavLink active className='no-padding pointer'>
              <img
                id='shopping-cart-header-button'
                src='src/assets/icons/png/cart.png'
                height={40}
                width={40}
                onClick={this.props.openCart}
              />
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className='ml-auto'>
          <NavItem>
            <Link className='nav-link active' to={SIGNIN_PATH}>
              Sign in
            </Link>
          </NavItem>
          <NavItem>
            <Link className='btn btn-dark btn-pill' to={SIGNUP_PATH}>
              Sign up
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCart }, dispatch)

export default connect(null, mapDispatchToProps)(NavBar)
