import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import PackageCard from '../../components/PackageCard'
import { loadPackages } from '../../actions'

class PackagesPage extends Component {
  state = { loading: true }

  componentDidMount() {
    this.props.loadPackages()
  }

  renderPakages = () => {
    //
    return <PackageCard />
  }

  render() {
    return <>Packages{this.renderPakages()}</>
  }
}

const mapStateToProps = ({ appData }) => ({
  packages: appData.packages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PackagesPage)
