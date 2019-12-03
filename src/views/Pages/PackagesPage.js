import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row } from 'shards-react'
import PackageCard from '../../components/PackageCard'
import { loadPackages } from '../../actions'

class PackagesPage extends Component {
  componentDidMount() {
    this.props.loadPackages()
  }

  renderPakage = (pkg, i) => <PackageCard key={i} {...pkg} />

  render() {
    return (
      <Row className='row-extra-padding'>
        {Object.values(this.props.packages).map(this.renderPakage)}
      </Row>
    )
  }
}

const mapStateToProps = ({ appData }) => ({
  packages: appData.packages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PackagesPage)
