import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { AuthContext } from '../components/shared/context/auth-context';

export function Header(props) {
  const auth = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      {auth.isLoggedIn ? (
        <Navbar.Brand as={Link} to="/home">
          React Sandpit
        </Navbar.Brand>
      ) : (
        <Navbar.Brand href="/">React Sandpit</Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {auth.isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <NavDropdown title="React Examples" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/examples/counter">
                  Counter
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/examples/ExamplesImageSlider">
                  Image Slider
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/examples/fetchrandomuser">
                  Fetch Random User
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/examples/ExamplesReactHookForm">
                  React Hook Form
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/examples/ExamplesReactLazyLoad">
                  React Image Lazy Load
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => auth.logout()}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
