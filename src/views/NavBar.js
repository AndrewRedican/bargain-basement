import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Button, Heading } from 'evergreen-ui'
import { BASE_PATH, SIGNIN_PATH, SIGNUP_PATH, CHECKOUT_PATH } from './App'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Pane className='navbar' display='flex' padding={16} borderRadius={3}>
        <Pane flex={1} alignItems='center' display='flex'>
          <Heading size={600}>
            <Link to={CHECKOUT_PATH}>
              <img
                src='src/assets/icons/png/016-shopping-cart-1.png'
                height={40}
                width={40}
              />
            </Link>
            <Link to={BASE_PATH} className='font-texture header-title'>
              Bargain Basement
            </Link>
          </Heading>
        </Pane>
        <Pane>
          <Button appearance='minimal' height={40} marginRight={16}>
            <Link to={SIGNIN_PATH} className='font-texture'>
              Sign in
            </Link>
          </Button>
          <Button height={40} appearance='primary' intent='none'>
            <Link to={SIGNUP_PATH}>Sign up</Link>
          </Button>
        </Pane>
      </Pane>
    )
  }
}

export default NavBar
