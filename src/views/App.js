import React, { Component } from 'react'
import NavBar from './NavBar'
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <NavBar />
        <Main />
      </>
    )
  }
}

export default App
