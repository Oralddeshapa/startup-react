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

export default function Header() {

  let logout = (e) => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  function visible_for_role(role) {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === role) {
        return 'visible'
      }
      return 'hidden'
    }
    return 'hidden'
  }

  return (
    <div className="NavbarBrand">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StartUP</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar
            style = {{width: "100%"}}>
            <NavItem>
              <NavLink href="/log_in"
                style={{ visibility: !localStorage.getItem('token') ? 'visible' : 'hidden' }}
              >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign_up"
                style={{ visibility: !localStorage.getItem('token') ? 'visible' : 'hidden' }}
              >
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/new_idea"
                style={{ visibility: visible_for_role('creator') }}
              >
                Create Idea
              </NavLink>
            </NavItem>
            <NavItem
              style = {{"margin-left": "auto", "margin-right": "0"}}>
              <NavLink
                style={{ visibility: localStorage.getItem('token') ? 'visible' : 'hidden' }}
              >
                { localStorage.getItem('username') ? localStorage.getItem('username') : 'Empty' }
              </NavLink>
            </NavItem>
            <NavItem
              style = {{"margin-right": "5%", cursor: "pointer"}}>
              <NavLink
                onClick = {
                  () => logout()
                }>
                Log out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
