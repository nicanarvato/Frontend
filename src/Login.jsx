import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { API_ENDPOINT } from './Api';
import { Navbar,Container,Button,Form, Row, Col,Nav,Modal, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Login () {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = JSON.parse(localStorage.getItem('token'))
            setUser(response.data);

                navigate("/dashboard");
        } catch (error) {
            localStorage.removeItem('token');
            navigate("/login");
        }
        
    };
    fetchUser();

}, []);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [error, setError] = useState('');

const handleSubmit = async (e) => {

    e.preventDefault();

try{
const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
    username,
    password,
});
localStorage.setItem("token",JSON.stringify(response));
setError('');

navigate("/dashboard");
} catch (error) {
    setError('Invalid username or password');
    }
};


return (
    <div>
        <Navbar bg="primary">
            <Container>
                <Navbar.Brand href = "#">Narvato </Navbar.Brand>
            </Container>
        </Navbar>

        <Container>
            <Row className='justify-content-md-center'>
                <Col>
                    <div>
                        <div className='container'>
                            <div className='card-body' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Form onSubmit = {handleSubmit} style ={{width:"500px", marginTop:"20px"}}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control 
                                    className="form-control-sm rounded-0"
                                    type="username"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} required/>
                            </Form.Group> <br />

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    className="form-control-sm rounded-0"
                                    type= "password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group> <br />

            <p style={{color:"white",paddingBottom: "10px"}}>Forgot Password?</p>
            <Form.Group controlId="formButton">
                {error && <p style={{color: 'red'}}>{error}</p>}
                <Button 
                type="submit" 
                style={{
                    width: "300px",
                    backgroundColor: "white",
                    color: "black",
                }}>Login</Button>
            </Form.Group>
            
        </Form> 
                            </div>
                        </div>
                    </div>

                </Col>

            </Row>
        </Container>
    </div>

    )
}
export default Login