import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPackage } from '../../actions'
// import PackageCard from '../../components/PackageCard'

class PackageDetails extends Component {
  componentDidMount() {
    this.props.loadPackage(this.props.match.params.id)
  }

  renderProduct = (prod, i) => undefined // todo

  render() {
    return <>Package Detail</>
  }
}

const mapStateToProps = ({ appData }, ownProps) => ({
  ...appData.packages[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails)
