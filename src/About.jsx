import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';

import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import { CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";


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

          <div style={{position: "absolute", // Allows precise positioning
          bottom: "20px", // Positions text 20px from the bottom of the container
          left: "15%", // Centers horizontally
          transform: "translateX(-50%)", // Ensures perfect centering
          color: "white", // White text for contrast
          textAlign: "center", }}>
            <h1>About Me</h1>
          </div>

        </div>

        {/* Main Content Here */}
        <div
          className="mt-5 g-4"
          style={{
            flexGrow: "1", // Fill up remaining space
            display: "flex", // Enable flexbox
            marginTop: "20px",
            justifyContent:"center",
            gap:"20px"}}>

<Card style={{ width: '18rem' }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

              <CiUser style={{fontSize:"180px"}}/>
            </div>
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <Card.Text>
          Computer Literate.
          Good in Costumer Service.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

              <GiSkills style={{fontSize:"180px"}}/>
            </div>
      <Card.Body>
        <Card.Title>Organization Attended</Card.Title>
        <Card.Text>
          Service Scholar (UNBOUND)
          Cadet Officer Leadership Trainings
          Music MInistry Club
          Commission In Womens Right's 2018
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

              <MdModelTraining style={{fontSize:"180px"}}/>
            </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

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
