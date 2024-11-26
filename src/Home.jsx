import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import Typical from 'react-typical'; // Import the react-typical library
import BackgroundImage from './src/assets/idk5mjwz.jpg'; // Replace with your background image

function Home() {

  return (
    <div 
      style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
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

      <div style={{ flexGrow: "1", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", marginTop: "100px", padding: "50px" }}>
          <div style={{ flex: "1", textAlign: "left", fontFamily: "Georgia, serif" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Hello, I am Dominnica <br />
              San Lorenzo Narvato
            </h1>
            {/* Typing text effect */}
            <Typical
              steps={[
                'I am a college student of Naga College Foundation Inc.', 3000,
                'Currently studying Bachelor In Science in Information System.', 3000,
                'I am also a working student.', 3000
              ]}
              loop={Infinity} // Loop the typing animation infinitely
              wrapper="p"
              style={{ fontSize: "1.2rem" }}
            />
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
