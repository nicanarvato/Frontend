import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import {Link} from 'react-router-dom';
function App () {

  const splitTextIntoLines = (text, wordsPerLine = 6) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines;
  };

  const paragraphText =
    "Hello welcome to My Personal Website, feel free to visit my Profile Dominnica San Lorenzo Narvato";

  const lines = splitTextIntoLines(paragraphText, 6);
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh", 
      width: "100vw",
      position:"relative"
    }}>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Nica.Web</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          <div className="mt-5" style={{paddingTop:"220px"}}>  
          <div style={{
            fontFamily: "Georgia, serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1  style={{
              color: "yellow",
              fontWeight: "bold",
              fontSize: "5rem",
              animation: "popUp 2s ease-in-out",
            }}>
          My Personal Website </h1>
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

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
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
      <p
      style={{
        fontFamily: "Georgia, serif",
        color: "yellow",
        fontSize: "1.5rem",
        marginTop: "1rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "10px light yellow", // Simulate a cursor
        animation:
          "blink 0.5s step-end infinite",
        width: "fit-content", // To accommodate the typing animation
      }}
      >
       {lines.map((line, index) => (
              <span
                key={index}
                style={{
                  display: "block", // Each line on a new line
                }}
              >
                {line}
              </span>
            ))
            }
      
      </p>
          </div>
          </div>    

    </div>
  )
}

export default App
