import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React Sandpit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="React Examples" id="basic-nav-dropdown">
            <NavDropdown.Item href="/examples/counter">Counter</NavDropdown.Item>
            <NavDropdown.Item href="/examples/ExamplesImageSlider">Image Slider</NavDropdown.Item>
            <NavDropdown.Item href="/examples/fetchrandomuser">Fetch Random User</NavDropdown.Item>
            <NavDropdown.Item href="/examples/ExamplesReactHookForm">React Hook Form</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
