import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle } from 'shards-react'
import { loadDownloadUrl } from '../actions'

class ProductCard extends Component {
  componentDidMount() {
    this.props.loadDownloadUrl(this.props.pkgImageRelDir)
  }

  render() {
    const { pkgImage, name, price, description } = this.props
    return (
      <Card>
        <img
          className='product-image'
          src={pkgImage.downloadUrl || 'src/assets/icons/svg/loading.svg'}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{`${price} USD`}</CardSubtitle>
          {description}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = ({ appData }, ownProps) => ({
  pkgImageRelDir: `assets/products/${ownProps.image}`,
  pkgImage: appData.files[`assets/products/${ownProps.image}`]
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadDownloadUrl }, dispatch)

ProductCard.defaultProps = {
  pkgImage: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
