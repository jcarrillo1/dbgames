import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth';

const AdminHeader = ({ dispatch }) => (
<Navbar collapseOnSelect>
  <div className="container">
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/admin">DBGames</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem><NavLink to="/admin">BROWSE USERS</NavLink></NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem onClick={() => dispatch(logout())}>LOGOUT</NavItem>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
);

export default connect()(withRouter(AdminHeader));
