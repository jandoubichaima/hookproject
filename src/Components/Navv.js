import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
function Navv({Setsearch , Search}) {
  return (
    <div>
      
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <input type="text"  onChange={(event)=>Setsearch( event.target.value)}  value="Search"/>
    </Container>
  </Navbar>
 

    </div>
  )
}

export default Navv;