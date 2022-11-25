import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";

function CollapsibleExample() {
  const [count, setcount] = useState(false);

  function toggle() {
    setcount((prev) => !prev);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-bar">
      <Container>
        <Navbar.Brand href="#home">Sneakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={toggle}>Cart</Nav.Link>
            {count && (
              <div className="wrapper">
                <h5>Cart</h5>
                <button>Check out</button>
              </div>
            )}

            <Nav.Link href="profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
