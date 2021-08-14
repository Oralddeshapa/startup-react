import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import './Header.css';

export default function Header() {

  return (
    <div className="NavbarBrand">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StartUP</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/log_in"
              >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign_up"
              >
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/new_idea"
                style={{visibility: localStorage.getItem('token') ? 'visible' : 'hidden' }}
              >
                Create Idea
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{visibility: localStorage.getItem('token') ? 'visible' : 'hidden' }}
              >
                { localStorage.getItem('username').toUpperCase() }
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
