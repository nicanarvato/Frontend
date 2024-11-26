import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundImage from "./src/assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import { Link } from 'react-router-dom';

function App() {
  const paragraphText = "Hello welcome to My Personal Website, feel free to visit my Profile Dominnica San Lorenzo Narvato";

  // Split the paragraph into words and lines (6 words per line)
  const splitTextIntoLines = (text, wordsPerLine = 6) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines;
  };

  const lines = splitTextIntoLines(paragraphText, 6);

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const words = lines[currentLine].split(" "); // Get current line words
      const intervalId = setInterval(() => {
        if (currentWordIndex < words.length) {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (!newLines[currentLine]) {
              newLines[currentLine] = "";
            }
            newLines[currentLine] += (newLines[currentLine] ? " " : "") + words[currentWordIndex];
            return newLines;
          });
          setCurrentWordIndex(prev => prev + 1);
        } else {
          clearInterval(intervalId); // Clear interval when current line is done
          setCurrentLine(prev => prev + 1); // Move to next line
          setCurrentWordIndex(0); // Reset word index for next line
        }
      }, 500); // Adjust word typing speed (milliseconds)

      return () => clearInterval(intervalId);
    }
  }, [currentWordIndex, currentLine, lines]);

  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      width: "100vw",
      position: "relative"
    }}>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Nica.Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mt-5" style={{ paddingTop: "220px" }}>
        <div style={{
          fontFamily: "Georgia, serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <h1 style={{
            color: "yellow",
            fontWeight: "bold",
            fontSize: "5rem",
            animation: "popUp 2s ease-in-out",
          }}>
            My Personal Website
          </h1>
          <style>
            {`
              @keyframes popUp {
                0% {
                  transform: scale(0.5);
                  opacity: 0;
                }
                50% {
                  transform: scale(1.1);
                  opacity: 0.7;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }

              @keyframes blink {
                50% {
                  border-color: transparent;
                }
              }
            `}
          </style>
          <br />
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
              padding: "20px", // Padding inside the background box
              borderRadius: "10px", // Rounded corners
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Drop shadow for depth
              maxWidth: "80%", // Limit the width to avoid overflowing
              textAlign: "center", // Center the text
            }}
          >
            {displayedLines.map((line, index) => (
              <p key={index} style={{
                fontFamily: "Georgia, serif",
                color: "white", // Text color for contrast
                fontSize: "1.5rem",
                marginTop: "0.5rem", // Adjust line spacing
                whiteSpace: "pre-wrap", // Preserve spacing
              }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
