import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Navbar className="justlearn-header" expanded={false} fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              About
      </NavItem>
            <NavItem eventKey={2} href="#">
              Help
      </NavItem>
            <NavItem eventKey={1} href="#">
              Contact us
      </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

