import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button
} from 'shards-react'
import { Link } from 'react-router-dom'
import { loadDownloadUrl, addToCart } from '../actions'
import { PACKAGE_DETAIL } from '../paths'

class PackageCard extends Component {
  componentDidMount() {
    this.props.loadDownloadUrl(this.props.pkgImageRelDir)
  }

  onAddToCart = () => this.props.addToCart(this.props.name)

  render() {
    const readMoreTarget = PACKAGE_DETAIL.replace(':id', this.props.id)
    return (
      <Card className='package-card'>
        <CardHeader>{this.props.name}</CardHeader>
        <img
          className='package-card-img'
          src={
            this.props.pkgImage.downloadUrl ||
            'src/assets/icons/svg/loading.svg'
          }
        />
        <CardBody>
          <CardTitle>{this.props.price} USD</CardTitle>
          <p className='limited-display'>{this.props.description}</p>
          <Link className='btn btn-primary' to={readMoreTarget}>
            Read more &rarr;
          </Link>
          <img
            className='add-package-img'
            src={this.props.buyImg.downloadUrl}
            onClick={this.onAddToCart}
          />
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = ({ appData }, ownProps) => ({
  pkgImageRelDir: `assets/packages/${ownProps.image}`,
  pkgImage: appData.files[`assets/packages/${ownProps.image}`],
  buyImg: appData.files['assets/icons/png/add.png']
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadDownloadUrl, addToCart }, dispatch)

PackageCard.defaultProps = {
  pkgImage: {},
  buyImg: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
