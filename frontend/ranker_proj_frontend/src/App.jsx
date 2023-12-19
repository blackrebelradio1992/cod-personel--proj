import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1>User Registration</h1>
        <div>
          {/* Your other components or content here */}
          <UserForm />
        </div>
      </Container>
    </div>
  );
}

export default App;
