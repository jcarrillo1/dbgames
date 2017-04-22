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

const BaseHeader = () => (
<Navbar collapseOnSelect>
  <div className="container">
  <Navbar.Header>
    <Navbar.Brand>
      DBGames
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" />
          <InputGroup.Button>
            <Button>Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      </Navbar.Form>
    <Nav>
      <NavItem eventKey={1} href="#">PS4</NavItem>
      <NavItem eventKey={2} href="#">XBOX ONE</NavItem>
      <NavItem eventKey={3} href="#">SWITCH</NavItem>
      <NavItem eventKey={3} href="#">PC</NavItem>

      <NavDropdown eventKey={4} title="MORE" id="basic-nav-dropdown">
        <MenuItem eventKey={4.1}>PS3</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">LOGIN</NavItem>
      <NavItem eventKey={2} href="#">SIGNUP</NavItem>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
);

export default BaseHeader;
