import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PackageCard from '../../components/PackageCard'
import { loadPackages } from '../../actions'

class PackagesPage extends Component {
  componentDidMount() {
    this.props.loadPackages()
  }

  renderPakage = (pkg, i) => <PackageCard key={i} {...pkg} />

  render() {
    return <>{Object.values(this.props.packages).map(this.renderPakage)}</>
  }
}

const mapStateToProps = ({ appData }) => ({
  packages: appData.packages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PackagesPage)
