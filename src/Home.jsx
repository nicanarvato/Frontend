import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ProfileImage from './assets/idk5mjwz.jpg'; // Replace with your actual image path

// Function to split text into chunks of 6 words per line
const splitTextIntoLines = (text, wordsPerLine = 10) => {
  const words = text.split(" "); // Split text by spaces into words
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" ")); // Join 6 words per line
  }
  return lines;
};

function Home() {
  const paragraphText = "I am a college student of Naga College Foundation INC. Bachelor In Science in Information System. I am also A Working student as a Pharmacy Assistant.";

  const lines = splitTextIntoLines(paragraphText, 10); // 

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

      <div style={{ marginTop: "100px", textAlign: "left", padding: "50px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Hello, I am Dominnica San Lorenzo Narvato</h1>
        
        {/* Display the lines of text */}
        <div>
          {lines.map((line, index) => (
            <p key={index} style={{ fontSize: "1.2rem", color: "#555" }}>
              {line}
            </p>
          ))}
        </div>

        <div style={{ margin: "20px auto", borderRadius: "50%", overflow: "hidden", width: "150px", height: "150px", backgroundColor: "#FFEB3B" }}>
          <img src={ProfileImage} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "30px", backgroundColor: "#333", color: "#fff" }}>
        <p>&copy; 2024 Dominnica San Lorenzo Narvato</p>
      </footer>
    </div>
  );
}

export default Home