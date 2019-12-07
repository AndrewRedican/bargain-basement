import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col } from 'shards-react'
import PackageCard from '../../components/PackageCard'
import { loadPackages } from '../../actions'

class PackagesPage extends Component {
  componentDidMount() {
    this.props.loadPackages()
  }

  matchesName = pkg => {
    const rgx = new RegExp(this.props.inputValue, 'i')
    rgx.ignoreCase
    return rgx.test(pkg.name)
  }

  sortFn = (_a, _b) => {
    let a, b
    if (this.props.sortAscending) {
      a = _a
      b = _b
    } else {
      a = _b
      b = _a
    }
    if (a.price < b.price) return -1
    if (a.price > b.price) return 1
    return 0
  }

  renderPakage = (pkg, i) => (
    <Col key={i} lg={3} md={6} sm={6} xs={12}>
      <PackageCard {...pkg} />
    </Col>
  )

  render() {
    return (
      <>
        {Object.values(this.props.packages)
          .filter(this.matchesName)
          .sort(this.sortFn)
          .map(this.renderPakage)}
      </>
    )
  }
}

const mapStateToProps = ({ appData }) => ({
  packages: appData.packages,
  inputValue: appData.inputValue,
  sortAscending: appData.sortAscending
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackages }, dispatch)

PackagesPage.propTypes = {
  loadPackages: PropTypes.func,
  inputValue: PropTypes.string,
  sortAscending: PropTypes.bool,
  packages: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PackagesPage)
