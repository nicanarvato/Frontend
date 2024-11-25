import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Education () {

  return (
    <div style={{
      minHeight: "100vh", 
      width: "100vw",
      position:"relative",
      backgroundColor:"#DAD4B5"
    }}>
      <Navbar data-bs-theme="dark" fixed="top" style={{backgroundColor:"#800000"}}>
        <Container>
          <Navbar.Brand as={Link} to="/">Nica.Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/hobbiess">Hobbies</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="mt-5" style={{fontFamily:"Georgia, seriff", 
              display: "flex",
              justifyContent: "center",
              paddingTop:"60px",
            flexDirection:"column"}}>
      
      <Card style={{height:"10rem",width:"100vw",justifyContent: "center", alignItems: "center", backgroundColor:'#982B1C',marginTop:"70px"}}>
      <Card.Body><h1 style={{fontSize:"4rem",color:"white",fontWeight:"bold"}}>Background  Studies</h1></Card.Body>
        </Card>
        <div style={{paddingTop:"100px"}}>
       
        <p style={{fontSize:"1.2rem"}}>
        College <br />
        Bachelor of Science in Information Sytems (BSIS) <br />
        Naga College Foundation <br />
        M.T. Villanueva Ave. Naga City 
        <hr />
        <br />
        High School <br />
        Information In Communication Technology (TVL) <br />
        AMA Computer College <br />
        #25 Magsaysay Ave. Brgy. Balatas Naga City <br />
        2017-2019
        <br />
        Gainza National High School <br />
        Gainza, Camarines Sur <br />
        2012- 2017 <br />
        <hr />
        <br />
        Elementary <br />
        Cagbunga Elementary School <br />
        Cagbunga Gainza Camarines Sur <br />
        2008 - 2012 
        <hr />
        <br />
        </p>
        </div>
      </div>

    </div>
  )
}

export default Education
