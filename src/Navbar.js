import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavComponent = () => {
  return (
    <Navbar className='navbar' style={{ backgroundColor: '#1861A5' }} expand="lg">
      <div className="container justify-content-center d-flex align-items-center">

        <a style={{ marginRight: '1rem' }}>
          <img src={require("./images/basket.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '50px', height: '50px', backgroundColor: '#1861A5' }} />
        </a>

        <Navbar.Brand as={Link} to="/">Los Santos Basketball club</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active>Coach</Nav.Link>
            <Nav.Link as={Link} to="/club">Club</Nav.Link>
            <NavDropdown as={Link} to="/Services" title="Services" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/Booking">Book a court</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/Book a training session">Book a training session</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ticket">Buy a basketball tournament ticket</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/Organize a basketball tournament
">Organize a basketball tournament
</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/location">Location</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavComponent;
