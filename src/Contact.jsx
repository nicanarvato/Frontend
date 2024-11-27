import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';

import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";

import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


function Contact() {
  
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
                <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <div style={{position: "absolute", // Allows precise positioning
          bottom: "20px", // Positions text 20px from the bottom of the container
          left: "15%", // Centers horizontally
          transform: "translateX(-50%)", // Ensures perfect centering
          color: "white", // White text for contrast
          textAlign: "center", }}>
            <h1>Contact</h1>
          </div>

        </div>

        {/* Main Content Here */}
        <div
          className="mt-5"
          style={{
            flexGrow: "1", // Fill up remaining space
            display: "flex", // Enable flexbox
            flexDirection:"column",
            alignItems:"center",
            gap:"20px"}}>
       <div
    style={{
      display: "flex", // Flexbox for horizontal alignment
      alignItems: "center", // Vertically center the items
      gap: "10px", // Spacing between items
    }}
  >
    <CiFacebook style={{ fontSize: "60px" }} />
    <div>
      <h4>Facebook</h4>
      <p>Facebook Account</p>
    </div>
  </div>

  {/* Contact Number Section */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}>
    <FaPhoneAlt style={{ fontSize: "50px" }} />
    <div>
      <h4>Contact Number</h4>
      <p>Number</p>
    </div>
  </div>

  {/* Email Section */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <IoMail style={{ fontSize: "50px" }} />
    <div>
      <h4>Email Account</h4>
      <p>Email</p>
    </div>
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

export default Contact;
