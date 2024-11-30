import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import { CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";

function About() {
  const [activeCard, setActiveCard] = useState(null); // State to track the active card

  // Card data for mapping
  const cardsData = [
    {
      id: 1,
      icon: <CiUser style={{ fontSize: "180px" }} />,
      title: "Skills",
      text: "Computer Literate. Good in Customer Service.",
    },
    {
      id: 2,
      icon: <GiSkills style={{ fontSize: "180px" }} />,
      title: "Organization Attended",
      text: `Service Scholar (UNBOUND)
              Cadet Officer Leadership Trainings
              Music Ministry Club
              Commission In Women's Rights 2018`,
    },
    {
      id: 3,
      icon: <MdModelTraining style={{ fontSize: "180px" }} />,
      title: "Training",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

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
          <Navbar data-bs-theme="dark" style={{ backgroundColor: "clear" }}>
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

          <div
            style={{
              position: "absolute", // Allows precise positioning
              bottom: "20px", // Positions text 20px from the bottom of the container
              left: "15%", // Centers horizontally
              transform: "translateX(-50%)", // Ensures perfect centering
              color: "white", // White text for contrast
              textAlign: "center",
            }}
          >
            <h1>About Me</h1>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="mt-5"
          style={{
            flexGrow: "1", // Fill up remaining space
            display: "flex", // Enable flexbox
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Active Card */}
          {activeCard && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                style={{ width: "28rem", cursor: "pointer" }}
                onClick={() => setActiveCard(null)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {activeCard.icon}
                </div>
                <Card.Body>
                  <Card.Title>{activeCard.title}</Card.Title>
                  <Card.Text>{activeCard.text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Remaining Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap", // Ensures proper layout on smaller screens
            }}
          >
            {cardsData
              .filter((card) => !activeCard || card.id !== activeCard.id) // Exclude active card if selected
              .map((card) => (
                <Card
                  key={card.id}
                  style={{ width: "18rem", cursor: "pointer" }}
                  onClick={() => setActiveCard(card)} // Set the clicked card as active
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {card.icon}
                  </div>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
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
            <p>&copy; All rights reserved by Nica.Web 2024 limited </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default About;
