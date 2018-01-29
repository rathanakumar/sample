import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

export default class Menus extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Navbar className="hidden-xs hidden-sm menu-holder" fluid staticTop>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
    </NavItem>
          <NavItem eventKey={2} href="#">
            Link
    </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

