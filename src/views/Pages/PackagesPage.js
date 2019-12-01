import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import PackageCard from '../../components/PackageCard'
import { storePackages } from '../../actions'

class PackagesPage extends Component {
  state = { loading: true }

  componentDidMount() {
    this.loadPackages()
  }

  loadPackages = async () => {
    const response = await axios.get('packages')
    console.warn('@loadPackages', response, response.data)
    this.props.storePackages(response.data)
    this.setState({ loading: false })
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
  bindActionCreators({ storePackages }, dispatch)

connect(mapStateToProps, mapDispatchToProps)(PackagesPage)

export { PackagesPage }
