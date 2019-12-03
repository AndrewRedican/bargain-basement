import React, { Component } from 'react'
import { Container, Row, Col, CardBody, CardTitle, Button } from 'shards-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPackage, addToCart, removeFromCart } from '../../actions'
import ProductCard from '../../components/ProductCard'

class PackageDetails extends Component {
  componentDidMount() {
    this.props.loadPackage(this.props.match.params.id)
  }

  onAddToCart = () =>
    this.props.addToCart(this.props.name, this.props.match.params.id)

  removeFromCart = () =>
    this.props.removeFromCart(this.props.name, this.props.match.params.id)

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
        <Row>
          <CardBody>
            <CardTitle>
              {`${this.props.name} Package - ${this.props.price} USD`}
            </CardTitle>
            {this.props.description}
            {!this.props.selected ? (
              <Button
                className='add-package-btn'
                pill
                theme='success'
                onClick={this.onAddToCart}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                className='add-package-btn'
                pill
                theme='danger'
                onClick={this.removeFromCart}
              >
                Remove from Cart
              </Button>
            )}
          </CardBody>
        </Row>
        <Row>
          {products.map((product, k) => (
            <Col key={k} sm='6' md='4' lg='4' xl='4'>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ appData, cartData }, ownProps) => ({
  ...appData.packages[ownProps.match.params.id],
  buyImg: appData.files['assets/icons/png/add.png'],
  selected: cartData.selectedPkgIds[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackage, addToCart, removeFromCart }, dispatch)

PackageDetails.defaultProps = {
  products: {},
  buyImg: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails)
