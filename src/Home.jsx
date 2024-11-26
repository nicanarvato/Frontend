import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row,Col, Image } from 'react-bootstrap';
import ProfileImage from './assets/idk5mjwz.jpg'; // Replace with your actual image path

function Home() {

  return (
    <div style={{ backgroundColor: "#f1f1f1", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Nica.Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<div style={{flexGrow:"1"}}>
  <div style={{ display: "flex", alignItems: "center", marginTop: "100px", padding: "50px" }}>
  <div style={{ flex: "1", textAlign: "left" ,fontFamily:"Georgia,seriff"}}>
    <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
      Hello, I am Dominnica <br />
    San Lorenzo Narvato</h1>
    <p style={{ fontSize: "1.2rem" }}>
      I am a college student of Naga College Foundation Inc.
      Currently studying Bachelor In Science in Information System. <br />
      I am also a working student currently working as a Pharmacy Assistant.
    </p>
  </div>
  <div>
    <Image src={ProfileImage} thumbnail style={{ width:"300px" }} />
  </div>
</div>
</div>
      <footer style={{ textAlign: "center", padding: "30px", backgroundColor: "#333", color: "#fff" }}>
        <p>&copy; 2024 Dominnica San Lorenzo Narvato</p>
      </footer>
    </div>
  );
}

export default Home