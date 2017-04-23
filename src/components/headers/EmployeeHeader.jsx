import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth';

const EmployeeHeader = ({ dispatch }) => (
<Navbar collapseOnSelect>
  <div className="container">
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/employee">DBGames</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem><NavLink to="/employee">BROWSE GAMES</NavLink></NavItem>
      <NavItem><NavLink to="/employee/games/add">ADD GAMES</NavLink></NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem onClick={() => dispatch(logout())}>LOGOUT</NavItem>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
);

export default connect()(withRouter(EmployeeHeader));
