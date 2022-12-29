import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="newarticle">The Passions Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="render">Render</Nav.Link>
            <Nav.Link href="newarticle">Make a Post</Nav.Link>
            <NavDropdown title="James" id="basic-nav-dropdown">
              <NavDropdown.Item href="lexical">Lexical</NavDropdown.Item>
              <NavDropdown.Item href="posts">Your Posts</NavDropdown.Item>
              <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">Home</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
