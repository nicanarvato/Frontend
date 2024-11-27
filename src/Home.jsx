import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import BackgroundImage from "./assets/53533242_432060137531250_8369841780350255104_n.jpg"; // Replace with the path to your background image

function Home() {

  return (
    <div 
      style={{ 
        backgroundImage: `url(${BackgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Make sure the image covers the whole div
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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

      <div style={{ flexGrow: "1", color: "#fff" }}> {/* Make text color white for visibility */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "100px", padding: "80px" }}>
          <div style={{ flex: "1", textAlign: "left", fontFamily: "Georgia, serif" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Hello, I am Dominnica <br />
              San Lorenzo Narvato
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
              I am a college student of Naga College Foundation Inc.
              Currently studying Bachelor In Science in Information System. <br />
              I am also a working student currently working as a Pharmacy Assistant.
            </p>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "30px", backgroundColor: "#333", color: "#fff" }}>
        <p>&copy; @All rights reserved by Nica.Web 2024 limited</p>
      </footer>
    </div>
  );
}

export default Home;
