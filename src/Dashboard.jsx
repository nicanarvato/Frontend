import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { API_ENDPOINT } from './Api';
import { Nav,Navbar,Container,Button,Form, NavDropdown, NavbarBrand, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

function Dashboard () {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDecodedUserID = async () => {
            try {
                const response = JSON.parse(localStorage.getItem('token'))
                setUser(response.data);

                const decoded_token = jwtDecode(response.data.token);
                setUser(decoded_token);
            } catch (error) {
                navigate ("/login");
            }
        };
    fetchDecodedUserID ();
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token');
            navigate("/login");
        } catch (error) {
            console.error('Logout failed',error);
        }
    };

return (
    <div>
        <div>
        <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href = "#home">Narvato</Navbar.Brand>
                
            <Navbar.Toggle aria-controls="navbar-content" />  
            <Navbar.Collapse id = "navbar-content">
                <Nav className = "ms-auto">
                </Nav>
                    <Form className="d-flex my-2 my-lg-0">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    <Button variant="outline-light">Search</Button>
                    </Form>

                <Nav className='ms-lg-3'>
                <NavDropdown title={user ? `User: ${user.username}`:'Dropdown'} 
                        id="basic-nav-dropdown"align="end">
                        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            
            </Container>
        </Navbar>

        </div>
        <div></div>
    </div>
)

}
    export default Dashboard