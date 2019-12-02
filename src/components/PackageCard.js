import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadDownloadUrl } from '../actions'

import { Card, CardHeader, CardTitle, CardBody, Button } from 'shards-react'

class PackageCard extends Component {
  componentDidMount() {
    this.props.loadDownloadUrl(this.props.pkgImageRelDir)
  }

  render() {
    return (
      <Card className='package-card'>
        <CardHeader>{this.props.name}</CardHeader>
        <img
          src={
            this.props.pkgImage.downloadUrl ||
            'src/assets/icons/svg/loading.svg'
          }
          style={{ objectFit: 'scale-down', maxHeight: 400, maxWidth: 400 }}
        />
        <CardBody>
          <CardTitle>{this.props.price} USD</CardTitle>
          <p className='limited-display'>{this.props.description}</p>
          <Button>Read more &rarr;</Button>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = ({ appData }, ownProps) => ({
  pkgImageRelDir: `assets/packages/${ownProps.image}`,
  pkgImage: appData.files[`assets/packages/${ownProps.image}`] || {}
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadDownloadUrl }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PackageCard)
