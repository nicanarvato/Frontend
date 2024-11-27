import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';

import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import { CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";


function Education() {
  const timelineStyle = {
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
  };

  // Inline style for each timeline item
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
    position: 'relative',
  };

  // Inline style for the timeline date
  const dateStyle = {
    backgroundColor: '#FF5733',
    color: 'white',
    padding: '10px',
    borderRadius: '50%',
    fontSize: '18px',
    position: 'absolute',
    left: '0',
    top: '0',
    transform: 'translateX(-50%)',
  };

  // Inline style for the content of each timeline item
  const contentStyle = {
    paddingLeft: '50px',
    borderLeft: '2px solid #FF5733',
    padding: '10px',
  };

  // Inline style for content of the timeline item when it's an odd item
  const contentStyleOdd = {
    ...contentStyle,
    borderLeft: '2px solid #3498DB',
  };
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
            <h1>Education</h1>
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

<div style={timelineStyle}>
<div style={itemStyle}>
        <div style={dateStyle}>2019-Present</div>
        <div style={contentStyle}>
          <h3 style={{marginLeft:"20%"}}>Naga College Foundation</h3>
          <p>Bachelor of Science in Information System</p>
          <p>M.t. Villanueva Ave.Naga City</p>
        </div>
      </div>

      <div style={itemStyle}>
        <div style={dateStyle}>2017-2019</div>
        <div style={contentStyle}>
          <h3 style={{marginLeft:"20%"}}>
            Started My Career</h3>
          <p>Started working as a frontend developer.</p>
        </div>
      </div>

      <div style={itemStyle}>
        <div style={dateStyle}>2025</div>
        <div style={contentStyleOdd}>
          <h3 style={{marginLeft:"10%"}}>
            Promoted to Senior Developer</h3>
          <p>Advanced to senior frontend developer position.</p>
        </div>
      </div>

      <div style={itemStyle}>
        <div style={dateStyle}>2026</div>
        <div style={contentStyle}>
          <h3 style={{marginLeft:"20%"}}>
            Lead Frontend Developer</h3>
          <p>Started leading frontend development projects.</p>
        </div>
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

export default Education;
