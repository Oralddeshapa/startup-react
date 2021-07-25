import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Header.css';

export default class Header extends React.Component {
  state = {
    isOpen: false
  }

  render() {

    return (
      <div className="NavbarBrand">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">StartUP</NavbarBrand>
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
