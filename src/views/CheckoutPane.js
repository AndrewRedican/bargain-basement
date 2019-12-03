import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, CardBody } from 'shards-react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Button,
  Container
} from 'shards-react'
import { closeCart, removeFromCart, checkout } from '../actions'

class CheckoutPane extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeCloseModal, true)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeCloseModal, true)
  }

  onEscapeCloseModal = event => {
    if (event.key === 'Escape') this.props.closeCart()
  }

  removeFromCart = event =>
    this.props.removeFromCart(
      event.target.getAttribute('data-name'),
      event.target.getAttribute('data-id')
    )

  renderBody = selectedPkgs => {
    if (!selectedPkgs.length) return <CardBody>No packages selected.</CardBody>

    let totalPrice = 0
    return (
      <ListGroup>
        {selectedPkgs.map((pkg, i) => {
          totalPrice += pkg.price
          return (
            <ListGroupItem key={i}>
              <img
                data-id={pkg.id}
                data-name={pkg.name}
                className='ext-package-img-cart'
                src={this.props.removeImg.downloadUrl}
                onClick={this.removeFromCart}
              />
              <span className='cart-pkg-name'>{pkg.name}</span>
              <span className='cart-pkg-price'>{pkg.price}</span>
            </ListGroupItem>
          )
        })}
        <ListGroupItem theme='dark'>
          Total:
          <span className='cart-pkg-total'>{totalPrice}</span>
        </ListGroupItem>
      </ListGroup>
    )
  }

  render() {
    const selectedPkgs = Object.values(this.props.selectedPkgs)

    return (
      <Modal
        open={this.props.isShown}
        hideModal={this.props.closeCart}
        modalClassName='checkout-container'
        backdropClassName='checkout-backdrop'
      >
        <ModalHeader>
          <Container className='full-width'>
            <Row>
              <Col tag='span' sm='9' md='9' lg='9' xl='9'>
                My Trolley
              </Col>
              <Col tag='span' sm='3' md='3' lg='3' xl='3'>
                <img
                  id='exit-package-img'
                  src={this.props.deleteImg.downloadUrl}
                  onClick={this.props.closeCart}
                />
              </Col>
            </Row>
          </Container>
        </ModalHeader>
        <ModalBody>{this.renderBody(selectedPkgs)}</ModalBody>
        <ModalFooter>
          <Button
            block
            disabled={!selectedPkgs.length}
            onClick={this.props.checkout}
          >
            Checkout
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const selectedPackages = (allPackages, selectedPkgsIds) => {
  const selected = {}
  Object.keys(selectedPkgsIds).forEach(id => {
    if (selectedPkgsIds[id]) selected[id] = allPackages[id]
  })
  return selected
}

const mapStateToProps = ({ cartData, appData }) => ({
  isShown: cartData.isShown,
  deleteImg: appData.files['assets/icons/png/delete.png'],
  removeImg: appData.files['assets/icons/png/remove.png'],
  selectedPkgs: selectedPackages(appData.packages, cartData.selectedPkgIds)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeCart, removeFromCart, checkout }, dispatch)

CheckoutPane.defaultProps = {
  deleteImg: {},
  removeImg: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPane)
