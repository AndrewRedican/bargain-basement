import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Button,
  Container,
  CardTitle
} from 'shards-react'
import { closeCart } from '../actions'

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

  render() {
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
                <CardTitle>My Trolley</CardTitle>
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
        <ModalBody>
          <img
            className='exit-package-img'
            src={this.props.removeImg.downloadUrl}
          />
        </ModalBody>
        <ModalFooter>
          <Button block>Checkout</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = ({ cartData, appData }) => ({
  isShown: cartData.isShown,
  deleteImg: appData.files['assets/icons/png/delete.png'],
  removeImg: appData.files['assets/icons/png/remove.png']
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeCart }, dispatch)

CheckoutPane.defaultProps = {
  deleteImg: {},
  removeImg: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPane)
