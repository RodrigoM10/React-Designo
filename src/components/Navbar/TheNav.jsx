import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './TheNav.css';

export default function NavbarRB() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="navbar-title">
      <div className="navbar-logo"></div>
      <h1 className="m-0">DESIGNO</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link href="#link" className="navbar-link">OUR COMPANY</Nav.Link>
          <Nav.Link href="#link"className="navbar-link">LOCATIONS</Nav.Link>
          <Nav.Link href="#link"className="navbar-link">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
