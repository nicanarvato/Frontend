import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";

function About() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh", // Set height to 100% of the viewport
          display: "flex", // Enable flex
          flexDirection: "column", // Stack items vertically
        }}
      >
        {/* Background Section */}
        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`, // Places the background image
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "250px", // Specific size the bg image would take
            position: "relative",
          }}
        >
          <Navbar data-bs-theme="dark" style={{backgroundColor:"clear"}}>
            <Container>
              <Navbar.Brand href="/">Nica.Web</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/education">Education</Nav.Link>
                <Nav.Link href="/hobbiess">Hobbies</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        {/* Main Content Here */}
        <div
          className="mt-5"
          style={{
            flexGrow: "1", // Fill up remaining space
            display: "flex", // Enable flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center", 
            marginTop: "20px", 
          }}
        >
          <div>
            <h1>About Me</h1>
          </div>
        </div>

        {/* Footer Section */}
        <div>
          <footer
            style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "#333",
              color: "#fff",
            }}
          >
            <p>&copy;  All rights reserved by Nica.Web 2024 limited </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default About;
