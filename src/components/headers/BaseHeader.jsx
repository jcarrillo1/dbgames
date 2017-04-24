import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth';

const BaseHeader = ({ dispatch, authenticated }) => (
<Navbar collapseOnSelect>
  <div className="container">
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/">DBGames</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem><NavLink to="/platforms/ps4">PS4</NavLink></NavItem>
      <NavItem><NavLink to="/platforms/xboxone">XBOX ONE</NavLink></NavItem>
      <NavItem><NavLink to="/platforms/switch">SWITCH</NavLink></NavItem>
      <NavItem><NavLink to="/platforms/pc">PC</NavLink></NavItem>


    </Nav>

    {authenticated
      ? <Nav pullRight>
          <NavItem onClick={() => dispatch(logout())}>LOGOUT</NavItem>
        </Nav>
      : (<Nav pullRight>
          <NavItem><NavLink to="/login">Login</NavLink></NavItem>
          <NavItem><NavLink to="/signup">SignUp</NavLink></NavItem>
        </Nav>)
    }
  </Navbar.Collapse>
  </div>
</Navbar>
);

const mapStateToProps = state => ({
  ...state.auth,
});

export default connect(mapStateToProps)(withRouter(BaseHeader));
