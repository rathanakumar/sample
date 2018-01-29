import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Navbar expanded={false} fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
      </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
      </NavItem>
            <NavItem eventKey={1} href="#">
              Link Right
      </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

