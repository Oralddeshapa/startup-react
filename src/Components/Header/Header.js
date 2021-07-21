import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Header.css';

export default class Header extends React.Component {
  state = {
    isOpen: false
  }

  toggle() {
    this.state.isOpen = !this.state.isOpen
  }

  render() {

    return (
      <div class="NavbarBrand">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">StartUP</NavbarBrand>
          <NavbarToggler onClick={this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/log_in">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sign_up">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
  }
}
