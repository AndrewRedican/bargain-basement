import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, CardBody, CardTitle, Button } from 'shards-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPackage, addToCart, removeFromCart } from '../../actions'
import ProductCard from '../../components/ProductCard'
import '../../styles/PackageDetails.css'

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
      <Container>
        <Row>
          <CardBody>
            <CardTitle>
              {`${this.props.name} Package - ${this.props.localPrice} ${this.props.currency}`}
            </CardTitle>
            <Container>
              <Row>
                <Col sm='12' md='8' lg='8' xl='9' className='pkg-full-desc'>
                  {this.props.description}
                </Col>
                <Col sm='12' md='4' lg='4' xl='3'>
                  {!this.props.selected ? (
                    <Button
                      className='pkg-detail-btn'
                      pill
                      theme='success'
                      onClick={this.onAddToCart}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button
                      className='pkg-detail-btn'
                      pill
                      theme='danger'
                      onClick={this.removeFromCart}
                    >
                      Remove from Cart
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
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

const mapStateToProps = ({ appData, cartData }, ownProps) => {
  const pkg = appData.packages[ownProps.match.params.id] || {}
  return {
    ...pkg,
    buyImg: appData.files['assets/icons/png/add.png'],
    selected: cartData.selectedPkgIds[ownProps.match.params.id],
    currency: appData.currency,
    localPrice:
      Math.round(appData.rates[appData.currency] * pkg.price * 100) / 100
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPackage, addToCart, removeFromCart }, dispatch)

PackageDetails.defaultProps = {
  products: {},
  buyImg: {}
}

PackageDetails.propTypes = {
  loadPackage: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  selected: PropTypes.bool,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  products: PropTypes.any,
  currency: PropTypes.string,
  localPrice: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails)
