import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
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

  const [state, setState] = useState({
    token: '',
    name: '',
    role: '',
  });

  useEffect(() => {
    setState({
      name: localStorage.getItem('username'),
      token: localStorage.getItem('token'),
      role: localStorage.getItem('role'),
    });

  }, [])

  let logout = (e) => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  function visibleForRole(role) {
    if ((state.token) && (state.role === role)) {
      return 'visible'
    }
    return 'hidden'
  }

  return (
    <div className="NavbarBrand" id='NavBar'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StartUP</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar
            style = {{width: "100%"}}>
            <NavItem>
              <NavLink href="/log_in"
                style={{ visibility: !state.token ? 'visible' : 'hidden' }}
              >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign_up"
                style={{ visibility: !state.token ? 'visible' : 'hidden' }}
              >
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/new_idea"
                style={{ visibility: visibleForRole('creator') }}
              >
                Create Idea
              </NavLink>
            </NavItem>
            <NavItem
              style = {{"margin-left": "auto", "margin-right": "0"}}>
              <NavLink
                style={{ visibility: state.token ? 'visible' : 'hidden' }}
              >
                { state.name ? state.name : 'Empty' }
              </NavLink>
            </NavItem>
            <NavItem
              style = {{"margin-right": "5%", cursor: "pointer"}}>
              <NavLink
                style={{ visibility: state.token ? 'visible' : 'hidden' }}
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
