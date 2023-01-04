import React from "react";
import { Container,  Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Welcome!!!!!</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
