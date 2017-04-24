import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth';

const EmployeeHeader = ({ dispatch, history }) => (
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
      <NavItem onClick={() => history.push('/employee')}>BROWSE GAMES</NavItem>
      <NavItem onClick={() => history.push('/employee/games/add')}>ADD GAMES</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem onClick={() => dispatch(logout())}>LOGOUT</NavItem>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
);

export default connect()(withRouter(EmployeeHeader));
