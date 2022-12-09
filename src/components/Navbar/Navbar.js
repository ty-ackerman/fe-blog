import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">The Passions Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="render">Render</Nav.Link>
            <Nav.Link href="verbum">Make a Post</Nav.Link>
            <NavDropdown title="USER Signed In" id="basic-nav-dropdown">
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