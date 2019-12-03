import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openCart, onInputChange } from '../actions'
import { BASE_PATH, PACKAGES_PATH } from '../paths'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from 'shards-react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'shards-react'

class NavBar extends Component {
  state = { dropdownOpen: false, sortAscending: true }

  toggleDropdownOpen = () =>
    this.setState({ dropdownOpen: !this.state.dropdownOpen })

  setAscending = () => this.setState({ sortAscending: true })

  setDescending = () => this.setState({ sortAscending: false })

  render() {
    return (
      <Navbar sticky='top' type='dark' theme='primary' expand='md'>
        <NavItem>
          <Link id='brand-title' to={BASE_PATH}>
            B. Basement
          </Link>
        </NavItem>
        <Nav navbar>
          <NavItem>
            <Link className='nav-link active' to={PACKAGES_PATH}>
              Packages
            </Link>
          </NavItem>
        </Nav>
        <Nav navbar className='ml-auto'>
          <InputGroup size='sm' seamless>
            <InputGroupAddon type='prepend'>
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput
              className='border-0'
              placeholder='Filter by name...'
              value={this.props.inputValue}
              onChange={this.props.onInputChange}
            />
          </InputGroup>
        </Nav>
        <Nav navbar className='ml-auto'>
          <Dropdown
            inNavbar
            open={this.state.dropdownOpen}
            toggle={this.toggleDropdownOpen}
          >
            <DropdownToggle>Sort by Price</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                active={!this.state.sortAscending}
                onClick={this.setDescending}
              >
                Highest First
              </DropdownItem>
              <DropdownItem
                active={this.state.sortAscending}
                onClick={this.setAscending}
              >
                Lowest First
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <Nav navbar className='ml-auto'>
          <NavLink active className='no-padding pointer'>
            <img
              id='shopping-cart-header-button'
              src={this.props.pkgImage.downloadUrl}
              height={40}
              width={40}
              onClick={this.props.openCart}
            />
          </NavLink>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = ({ appData }) => ({
  pkgImage: appData.files['assets/icons/png/cart.png'],
  inputValue: appData.inputValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCart, onInputChange }, dispatch)

NavBar.defaultProps = {
  pkgImage: {},
  inputValue: ''
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
