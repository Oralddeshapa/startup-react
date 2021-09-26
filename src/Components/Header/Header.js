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
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {

  const dispatch = useDispatch()

  const name = useSelector((state) => state.login.username)
  const role = useSelector((state) => state.login.role)
  const token = useSelector((state) => state.login.token)

  useEffect(() => {
    dispatch({ type: 'LOGIN',
               payload: {
                username: localStorage.getItem('username'),
                role: localStorage.getItem('role'),
                token: localStorage.getItem('token') }
              })
  }, [])

  let logout = (e) => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  function visibleForRole(i_role) {
    if ((token) && (role === i_role)) {
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
                style={{ visibility: !token ? 'visible' : 'hidden' }}
              >
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sign_up"
                style={{ visibility: !token ? 'visible' : 'hidden' }}
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
                style={{ visibility: token ? 'visible' : 'hidden' }}
              >
                { name ? name : '' }
              </NavLink>
            </NavItem>
            <NavItem
              style = {{"margin-right": "5%", cursor: "pointer"}}>
              <NavLink
                style={{ visibility: token ? 'visible' : 'hidden' }}
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
