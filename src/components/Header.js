import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import planet from '../assets/planet.png';

const Header = () => (
  <div className="header">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="logo-image" href="#home">
          <Image src={planet} />
          <p>Space Travelers&apos; Hub</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Rockets">Rockets</Nav.Link>
            <Nav.Link href="#Missions">Missions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
