import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Button, Heading } from 'evergreen-ui'
import { BASE_PATH, SIGNIN_PATH, SIGNUP_PATH } from './App'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Pane display='flex' padding={16} background='tint2' borderRadius={3}>
        <Pane flex={1} alignItems='center' display='flex'>
          <Heading size={600}>
            <Link to={BASE_PATH}>Bargain Basement</Link>
          </Heading>
        </Pane>
        <Pane>
          <Button appearance='minimal' marginRight={16}>
            <Link to={SIGNIN_PATH}>Sign in</Link>
          </Button>
          <Button appearance='primary'>
            <Link to={SIGNUP_PATH}>Sign up</Link>
          </Button>
        </Pane>
      </Pane>
    )
  }
}

export default NavBar
