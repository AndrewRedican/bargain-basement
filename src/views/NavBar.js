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
  NavbarToggler,
  Collapse,
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
import '../styles/NavBar.css'

class NavBar extends Component {
  state = { collapseOpen: false, dropdownOpen: false }

  toggleNavbar = () => this.setState({ collapseOpen: !this.state.collapseOpen })

  toggleDropdownOpen = () =>
    this.setState({ dropdownOpen: !this.state.dropdownOpen })

  setAscending = () => this.props.setSortAscending(true)

  setDescending = () => this.props.setSortAscending(false)

  renderNavOptions = () => {
    if (this.props.options)
      return (
        <>
          <NavItem>
            <Dropdown
              inNavbar
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdownOpen}
            >
              <DropdownToggle caret>Sort by Price</DropdownToggle>
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
          </NavItem>
          <NavItem style={{ padding: '2px 10px' }}>
            <InputGroup seamless>
              <InputGroupAddon type='prepend'>
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput
                placeholder='Filter by name...'
                value={this.props.inputValue}
                onChange={this.props.onInputChange}
              />
            </InputGroup>
          </NavItem>
        </>
      )
    return undefined
  }

  render() {
    return (
      <Navbar sticky='top' type='dark' theme='primary' expand='md'>
        <Link className='navbar-brand' to={BASE_PATH}>
          B. Basement
        </Link>
        <NavbarToggler
          style={{ marginRight: 50 }}
          onClick={this.toggleNavbar}
        />
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar horizontal fill>
            <NavItem>
              <Link className='nav-link' to={PACKAGES_PATH}>
                Packages
              </Link>
            </NavItem>
            {this.renderNavOptions()}
          </Nav>
        </Collapse>
        <NavLink className='cart-tab'>
          {this.props.packagesInCart ? (
            <Badge pill theme='light' style={{ cursor: 'auto' }}>
              {this.props.packagesInCart}
            </Badge>
          ) : (
            undefined
          )}
          <img
            id='cart-btn'
            src={this.props.pkgImage.downloadUrl}
            height={40}
            width={40}
            onClick={this.props.openCart}
          />
        </NavLink>
      </Navbar>
    )
  }
}

const mapStateToProps = ({ appData, cartData }, { location }) => ({
  pkgImage: appData.files['assets/icons/png/cart.png'],
  inputValue: appData.inputValue,
  sortAscending: appData.sortAscending,
  options: location.pathname === PACKAGES_PATH,
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
  options: PropTypes.bool,
  setSortAscending: PropTypes.func,
  sortAscending: PropTypes.bool,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  pkgImage: PropTypes.shape({
    downloadUrl: PropTypes.string
  }),
  openCart: PropTypes.func,
  packagesInCart: PropTypes.number
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
