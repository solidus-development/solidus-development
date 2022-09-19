import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark" fixed='top'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Testimonials</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">Daemon Development</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
