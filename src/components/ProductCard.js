import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      <Card className='product-card'>
        <CardBody>
          <CardTitle>
            <img
              className='product-card-img'
              src={pkgImage.downloadUrl || 'src/assets/icons/svg/loading.svg'}
            />
            {name}
          </CardTitle>
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

ProductCard.propTypes = {
  loadDownloadUrl: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  pkgImageRelDir: PropTypes.string,
  pkgImage: PropTypes.shape({
    downloadUrl: PropTypes.string
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
