import React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth';

const BaseHeader = ({ dispatch, authenticated, history }) => (
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
      <NavItem onClick={() => history.push('/platforms/ps4')}>PS4</NavItem>
      <NavItem onClick={() => history.push('/platforms/xbox-one')}>XBOX ONE</NavItem>
      <NavItem onClick={() => history.push('/platforms/switch')}>SWITCH</NavItem>
      <NavItem onClick={() => history.push('/platforms/pc')}>PC</NavItem>
    </Nav>

    {authenticated
      ? <Nav pullRight>
          <NavItem onClick={() => dispatch(logout())}>LOGOUT</NavItem>
        </Nav>
      : (<Nav pullRight>
          <NavItem onClick={() => history.push('/login')}>Login</NavItem>
          <NavItem onClick={() => history.push('/signup')}>Sign Up</NavItem>
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
