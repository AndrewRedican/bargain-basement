import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const withDiscount = selectedPkgs.length >= 2

    const grossTotal = selectedPkgs
      .map(p => p.price)
      .reduce((acummulator, value) => acummulator + value)

    const netTotal = withDiscount ? grossTotal * 0.9 : grossTotal
    return (
      <ListGroup>
        {selectedPkgs.map((pkg, i) => (
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
        ))}
        {withDiscount ? (
          <ListGroupItem>
            <img
              className='discount-package-img-cart'
              src={this.props.discountImg.downloadUrl}
            />
            <span className='cart-pkg-name'>Discount</span>
            <span className='cart-pkg-price'>-10%</span>
          </ListGroupItem>
        ) : (
          undefined
        )}
        <ListGroupItem theme='dark'>
          Total:
          <span className='cart-pkg-total'>{netTotal}</span>
        </ListGroupItem>
      </ListGroup>
    )
  }

  render() {
    const selectedPkgs = Object.values(this.props.selectedPkgs)

    return (
      <Modal
        open={this.props.isShown}
        toggle={this.props.closeCart}
        modalClassName='checkout-container'
        backdropClassName='checkout-backdrop'
      >
        <ModalHeader>
          My Trolley
          <img
            className='exit-package-img'
            src={this.props.deleteImg.downloadUrl}
            onClick={this.props.closeCart}
          />
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
  discountImg: appData.files['assets/icons/png/discount.png'],
  selectedPkgs: selectedPackages(appData.packages, cartData.selectedPkgIds)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeCart, removeFromCart, checkout }, dispatch)

CheckoutPane.defaultProps = {
  deleteImg: {},
  removeImg: {},
  discountImg: {}
}

const imgShape = PropTypes.shape({
  downloadUrl: PropTypes.string
})

CheckoutPane.propTypes = {
  closeCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  checkout: PropTypes.func,
  removeImg: imgShape,
  discountImg: imgShape,
  deleteImg: imgShape,
  selectedPkgs: PropTypes.object,
  isShown: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPane)
