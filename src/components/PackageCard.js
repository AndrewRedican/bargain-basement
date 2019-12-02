import React, { Component } from 'react'
import firebase from 'firebase'

import { Card, CardHeader, CardTitle, CardBody, Button } from 'shards-react'

class PackageCard extends Component {
  constructor(props) {
    super(props)
    const imgs = (props.image || '').split(';')
    const img = imgs[this.getRandomInt(imgs.length)]
    this.dir = `assets/packages/${img}`
    this.cardImage = React.createRef()
  }

  componentDidMount() {
    const updateImgSrc = url => (this.cardImage.current.src = url)
    firebase
      .storage()
      .ref(this.dir)
      .getDownloadURL()
      .then(updateImgSrc)
      .catch(error => {
        console.error(error)
      })
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

  render() {
    return (
      <Card className='package-card'>
        <CardHeader>{this.props.name}</CardHeader>
        <img
          src='src/assets/icons/svg/loading.svg'
          ref={this.cardImage}
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

export default PackageCard
