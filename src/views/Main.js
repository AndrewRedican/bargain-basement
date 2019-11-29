import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import { WelcomePage, PackagesPage } from './Pages'

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
        <BrowserRouter>
          <Route path='/' component={WelcomePage} />
          <Route path='/packages' component={PackagesPage} />
        </BrowserRouter>
      </Pane>
    )
  }
}

export default Main
