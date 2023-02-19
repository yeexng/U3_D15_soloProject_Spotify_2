import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const TopBar = () => {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </Container>
  );
};

export default TopBar;
