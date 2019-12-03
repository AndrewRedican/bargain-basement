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

  renderPakage = (pkg, i) => <PackageCard key={i} {...pkg} />

  render() {
    return (
      <Row className='row-extra-padding'>
        {Object.values(this.props.packages)
          .filter(this.matchesName)
          .sort(this.sortFn)
          .map(this.renderPakage)}
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(PackagesPage)
