import React, { Component } from 'react'
import { Pane, Text } from 'evergreen-ui'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Pane
        display='flex'
        padding={16}
        height='calc(100vh - 84px)'
        background='tint2'
        borderRadius={3}
      >
        <Text>Content to be displayed here</Text>
      </Pane>
    )
  }
}

export default Main
