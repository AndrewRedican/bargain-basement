import React, { Component } from 'react'
import { Container, Row, Col } from 'shards-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPackage } from '../../actions'
import ProductCard from '../../components/ProductCard'

class PackageDetails extends Component {
  componentDidMount() {
    this.props.loadPackage(this.props.match.params.id)
  }

  makeChucks = (items = [], chunkSize = 3) => {
    var chunkList = []
    for (let i = 0; i < items.length; i += chunkSize)
      chunkList.push(items.slice(i, i + chunkSize))
    return chunkList
  }

  render() {
    const products = Object.values(this.props.products).filter(p => p)
    return (
      <Container className='package-products'>
        <Row>Package Details</Row>
        <Row>
          {products.map((product, k) => (
            <Col key={k} sm='12' sm='6' md='4' lg='4' xl='4'>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ appData }, ownProps) => ({
  ...appData.packages[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackage }, dispatch)

PackageDetails.defaultProps = {
  products: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails)
