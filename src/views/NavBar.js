import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Pane display='flex' padding={16} background='tint2' borderRadius={3}>
        <Pane flex={1} alignItems='center' display='flex'>
          <Heading size={600}>Bargain Basement</Heading>
        </Pane>
        <Pane>
          <Button appearance='minimal' marginRight={16}>
            Sign in
          </Button>
          <Button appearance='primary'>Sign up</Button>
        </Pane>
      </Pane>
    )
  }
}

export default NavBar
