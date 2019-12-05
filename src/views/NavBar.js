import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { openCart, onInputChange, setSortAscending } from '../actions'
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
  DropdownItem,
  Badge
} from 'shards-react'

class NavBar extends Component {
  state = { dropdownOpen: false }

  toggleDropdownOpen = () =>
    this.setState({ dropdownOpen: !this.state.dropdownOpen })

  setAscending = () => this.props.setSortAscending(true)

  setDescending = () => this.props.setSortAscending(false)

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
        {this.props.filterAndSortDisplayed ? (
          <>
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
                    active={!this.props.sortAscending}
                    onClick={this.setDescending}
                  >
                    Highest First
                  </DropdownItem>
                  <DropdownItem
                    active={this.props.sortAscending}
                    onClick={this.setAscending}
                  >
                    Lowest First
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </>
        ) : (
          undefined
        )}
        <Nav navbar className='ml-auto'>
          <NavLink active className='no-padding'>
            {this.props.packagesInCart ? (
              <Badge pill theme='light' style={{ cursor: 'auto' }}>
                {this.props.packagesInCart}
              </Badge>
            ) : (
              undefined
            )}
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

const mapStateToProps = ({ appData, cartData }, { location }) => ({
  pkgImage: appData.files['assets/icons/png/cart.png'],
  inputValue: appData.inputValue,
  sortAscending: appData.sortAscending,
  filterAndSortDisplayed: location.pathname === PACKAGES_PATH,
  packagesInCart: Object.values(cartData.selectedPkgIds).filter(
    selected => selected
  ).length
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openCart, onInputChange, setSortAscending }, dispatch)

NavBar.defaultProps = {
  pkgImage: {},
  inputValue: ''
}

NavBar.propTypes = {
  filterAndSortDisplayed: PropTypes.bool,
  setSortAscending: PropTypes.func,
  sortAscending: PropTypes.bool,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  pkgImage: PropTypes.shape({
    downloadUrl: PropTypes.string
  }),
  openCart: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
