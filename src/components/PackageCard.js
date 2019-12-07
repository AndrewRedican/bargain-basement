import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter
} from 'shards-react'
import { Link } from 'react-router-dom'
import { loadDownloadUrl, addToCart, removeFromCart } from '../actions'
import { PACKAGE_DETAIL } from '../paths'
import '../styles/PackageCard.css'

class PackageCard extends Component {
  componentDidMount() {
    this.props.loadDownloadUrl(this.props.pkgImageRelDir)
  }

  onAddToCart = () => this.props.addToCart(this.props.name, this.props.id)

  removeFromCart = () =>
    this.props.removeFromCart(this.props.name, this.props.id)

  render() {
    const readMoreTarget = PACKAGE_DETAIL.replace(':id', this.props.id)
    return (
      <Card className={`pkg-card ${this.props.selected ? 'selected' : ''}`}>
        <CardHeader className='pkg-card-header'>
          <CardTitle>{this.props.name}</CardTitle>
        </CardHeader>
        <img
          className='pkg-card-img'
          src={
            this.props.pkgImage.downloadUrl ||
            'src/assets/icons/svg/loading.svg'
          }
        />
        <CardBody className='pkg-card-pad-16'>
          <CardSubtitle>
            {this.props.localPrice} {this.props.currency}
          </CardSubtitle>
          <p className='pkg-card-details'>{this.props.description}</p>
        </CardBody>
        <CardFooter className='pkg-card-pad-16'>
          <Link className='btn btn-primary' to={readMoreTarget}>
            Details &rarr;
          </Link>
          {!this.props.selected ? (
            <img
              className='pkg-card-btn'
              src={this.props.buyImg.downloadUrl}
              onClick={this.onAddToCart}
            />
          ) : (
            <img
              className='pkg-card-btn'
              src={this.props.removeImg.downloadUrl}
              onClick={this.removeFromCart}
            />
          )}
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = ({ appData, cartData }, ownProps) => ({
  pkgImageRelDir: `assets/packages/${ownProps.image}`,
  pkgImage: appData.files[`assets/packages/${ownProps.image}`],
  buyImg: appData.files['assets/icons/png/add.png'],
  removeImg: appData.files['assets/icons/png/remove.png'],
  selected: cartData.selectedPkgIds[ownProps.id],
  currency: appData.currency,
  localPrice:
    Math.round(appData.rates[appData.currency] * ownProps.price * 100) / 100
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadDownloadUrl, addToCart, removeFromCart }, dispatch)

PackageCard.defaultProps = {
  pkgImage: {},
  buyImg: {},
  removeImg: {}
}

const imgShape = PropTypes.shape({
  downloadUrl: PropTypes.string
})

PackageCard.propTypes = {
  loadDownloadUrl: PropTypes.func,
  pkgImageRelDir: PropTypes.string,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  selected: PropTypes.bool,
  pkgImage: imgShape,
  buyImg: imgShape,
  removeImg: imgShape,
  localPrice: PropTypes.number,
  currency: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
