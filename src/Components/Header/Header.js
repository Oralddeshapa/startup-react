import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Header.css';

export default function Header(status) {

  let state = {
    isOpen: false
  }

  return (
    <div className="NavbarBrand">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StartUP</NavbarBrand>
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/log_in"
              style={{visibility: status.isAuthorised ? 'hidden' : 'visible' }} >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign_up"
              style={{visibility: status.isAuthorised ? 'hidden' : 'visible' }} >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
